"use strict";
import { createClient } from "../../prismicio";
import metaFetcher from "meta-fetcher";
import fetchMeta from "fetch-meta-tags";
import { render } from "mjml-react";

//import * as emailTemplate from "../../email_templates/emailtemplate";
import * as emailTemplateV2 from "../../email_templates/emailtemplateV2";
const client = createClient();

export default async function newsletterHandler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const { lang } = req.query;
      try {
        const doc = await client.getAllByType("newsletter_2", {
          accessToken: process.env.PRISMIC_TOKEN,
          lang,
        });

        const newsletters = doc.map((newsletter) => {
          return {
            id: newsletter.id,
            title: newsletter.uid,
          };
        });

        if (newsletters.length) {
          res.status(200).json({ newsletters });
        } else {
          res.status(201).json({ reason: "Newsletters list is empty" });
        }
      } catch (err) {
        console.log(err);
        res.status(403).json({ reason: err });
      }

      break;
    case "POST":
      // Return Html template for particular newsletter
      const { newsletterId, newsLang } = req.body;
      try {
        const doc = await client.getByID(newsletterId, {
          accessToken: process.env.PRISMIC_TOKEN,
          fetchLinks: [
            "blog_post.title",
            "blog_post.description",
            "blog_post.featured_image",
            "daymenu.calories",
            "daymenu.carbs",
            "daymenu.menu",
            "daymenu.breakfast_recipes",
            "daymenu.lunch_recipes",
            "daymenu.dinner_recipes",
            "advice.title_advice",
            "advice.cat_group",
            //"catego.name",
            "catego.label",
            "advice.description_advice",
            "daymenu.snacks",
            "daymenu.snacks.snack_link",
          ],
          lang: newsLang,
        });

        const toBeFetchedURLs = doc.data.body
          .find((slice) => slice.slice_type === "curating_content")
          ?.items.filter((item) => item.links.link_type === "Web")
          .reduce((links, item) => {
            links.push(item.links.url);
            return links;
          }, []);

        const URLsMetadata = [];

        if (toBeFetchedURLs)
          for (const url of toBeFetchedURLs) {
     
            const result = await metaFetcher(url);
            delete result.socials;
            delete result.favicons;
            result. OGtags = await fetchMeta("https://luisc.xyz");
            URLsMetadata.push(result);
          }

        const { html } = render(
          emailTemplateV2.TemplateGenerator(doc.data, newsLang, URLsMetadata),
          {
            validationLevel: "soft",
          }
        );
        res.status(200).json({ html });
      } catch (err) {
        console.log(err);
        res.status(403).json({ reason: err });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
