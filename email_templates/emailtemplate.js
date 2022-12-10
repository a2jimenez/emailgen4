import React from "react";
import * as prismicR from "@prismicio/richtext";

import {
  Mjml,
  MjmlAttributes,
  MjmlBody,
  MjmlBreakpoint,
  MjmlButton,
  MjmlClass,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
} from "mjml-react";

import Footer from "./Footer";

export const generate = (data, newsLang) => {

  return (
    <Mjml>
      <MjmlHead>
        <MjmlBreakpoint width="320px" />
        <MjmlAttributes>
          <MjmlText align="center" color="#555" />
          <MjmlTitle>
            {newsLang === "es-es"
              ? "Boletin Semanal DeDiabetes"
              : "Diabetes Weekly Bulletin"}
          </MjmlTitle>
        </MjmlAttributes>

        <MjmlStyle>{`
          .link-black {
            bcolor: black;
          }
        `}</MjmlStyle>
        <MjmlStyle>{`
          .blue-column {
            color: white; 
            text-decoration: none
          }
        `}</MjmlStyle>
      </MjmlHead>
      <MjmlBody background-color="#ffffff">
        <MjmlSection>
          <MjmlColumn>
            <MjmlText
              font-size="2rem"
              color="#2A2A2A"
              font-family="helvetica, arial, sans-serif, 'open sans', 'helvetica neue'"
              line-height="30px"
              align="left"
              padding-bottom="15px"
              fontWeight={"bold"}
            >
              <h1>
                {newsLang === "es-es"
                  ? "Boletin Semanal DeDiabetes"
                  : "Diabetes Weekly Bulletin"}
              </h1>
            </MjmlText>
            <MjmlText
              align="left"
              font-family="helvetica, arial, sans-serif, 'open sans', 'helvetica neue'"
              font-size="1.25rem"
              fontWeight={"bold"}
              padding-top="0px"
            >
              <h2>
                {data.newsletter_title
                  ? prismicR.asText(data.newsletter_title)
                  : ""}
              </h2>
            </MjmlText>
            <MjmlDivider
              border-width="5px"
              border-color="lightgrey"
              width="50%"
            ></MjmlDivider>
            <MjmlText
              font-size="1.25rem"
              color="#2A2A2A"
              font-family="helvetica, arial, sans-serif, 'open sans', 'helvetica neue'"
              line-height="48px"
              align="left"
              padding-bottom="0px"
              fontWeight={"bold"}
            >
              <h2>
                {newsLang === "es-es"
                  ? "Artículos Recientes"
                  : "Recent Articles"}
              </h2>
            </MjmlText>
            =
          </MjmlColumn>
        </MjmlSection>

        {data.posts.map((post, index) => (
          <MjmlSection key={index}>
            <MjmlColumn>
              <MjmlImage
                src={post.nlposts.data.featured_image.url}
                padding-bottom="0"
                href={`https://dediabetes.com/${post.nlposts.uid}`}
              />
              <MjmlText
                font-size="14px"
                line-height="21px"
                color="#626262"
                align="left"
              >
                <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  <a
                    href={`https://dediabetes.com/${post.nlposts.uid}`}
                    //style="text-decoration: none; color: #626262"
                    style={{ textDecoration: "none", color: "#626262" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {post.nlposts.data.title
                      ? prismicR.asText(post.nlposts.data.title)
                      : ""}
                  </a>
                </h3>
                <p>
                  {post.nlposts.data.description
                    ? prismicR.asText(post.nlposts.data.description)
                    : ""}
                </p>
              </MjmlText>
              <MjmlButton
                background-color="#cfe2f3"
                color="black"
                border-radius="20px"
                href={`https://dediabetes.com/${post.nlposts.uid}`}
                padding="0 0 0 0"
              >
                <MjmlText>
                  {newsLang === "es-es" ? "Sigue Leyendo" : "Keep reading"}
                </MjmlText>
              </MjmlButton>
            </MjmlColumn>
          </MjmlSection>
        ))}

        <MjmlSection padding-bottom="0px">
          <MjmlColumn>
            <MjmlDivider
              border-width="5px"
              border-color="lightgrey"
              width="50%"
            />
            <MjmlText
              font-size="1.25rem"
              color="#2A2A2A"
              font-family="helvetica, arial, sans-serif, 'open sans', 'helvetica neue'"
              line-height="24px"
              align="left"
              padding-bottom="0px"
              fontWeight={"bold"}
            >
              <h2>
                {data.advice_newsletter.data.title_advice
                  ? prismicR.asText(data.advice_newsletter.data.title_advice)
                  : ""}
              </h2>
            </MjmlText>
            <MjmlImage
              src={data.advice_newsletter.data.image_advice.url}
              padding-bottom="0"
            />
            <MjmlText
              align="left"
              font-size="16px"
              line-height="26px"
              padding-top="24px"
            >
              <p align="left">
                {data.advice_newsletter.data.description_advice
                  ? prismicR.asText(
                      data.advice_newsletter.data.description_advice
                    )
                  : ""}
              </p>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection>
          <MjmlColumn>
            <MjmlDivider
              border-width="5px"
              border-color="lightgrey"
              width="50%"
            />
            <MjmlText
              font-size="1.25rem"
              color="#2A2A2A"
              font-family="helvetica, arial, sans-serif, 'open sans', 'helvetica neue'"
              line-height="24px"
              align="left"
              padding-bottom="0px"
              fontWeight={"bold"}
            >
              <h2>
                {newsLang === "es-es"
                  ? "El Menú de la Semana"
                  : "The Menu of the Week"}
              </h2>
            </MjmlText>
            <MjmlImage
              src="https://res.cloudinary.com/dn78y3q10/image/upload/w_320/v1634154527/menu-semanal_scx6si.jpg"
              padding-bottom="0"
            />

            <MjmlText align="left" font-size="16px" line-height="26px">
              <p align="left">
                {newsLang === "es-es"
                  ? `Incluimos semanalmente un menú para un día. Uno de nuestros
                  objetivos en DeDiabetes es mostrar que puedes comer muy bien si
                  sabes ajustar las recetas a tu paladar y, más importante, a las
                  necesidades de tu cuerpo y sus limitaciones.`
                  : `We include a weekly menu for one day. One of ours
                  goals in DeDiabetes is to show that you can eat very well if
                  you know how to adjust the recipes to your palate and, more importantly, to the
                  your body's needs and limitations.`}
              </p>
            </MjmlText>
            {/*<MjmlText fontSize="16px" fontWeight={"bold"}>
              <h2 style={{ margin: 0, padding: 0 }}>
                {data.day_menu.data.menu}
              </h2>
                  </MjmlText>*/}

            <MjmlText
              fontSize={"16px"}
              fontWeight={"bold"}
              padding={0}
              margin={0}
            >
              {newsLang === "es-es" ? "Calorias" : "Calories"}:&nbsp;
              {data.day_menu.data.calories ? data.day_menu.data.calories : ""}
              &nbsp;&nbsp;&nbsp; {newsLang === "es-es" ? "Carbs" : "Carbs"}
              :&nbsp;
              {data.day_menu.data.carbs ? data.day_menu.data.carbs : ""}
            </MjmlText>
            <MjmlText color="red" font-size="16px">
              <p style={{ fontStyle: "italic", margin: 0, padding: 0 }}>
                {newsLang === "es-es"
                  ? "* Te Incluimos enlaces a las recetas"
                  : "* We include links to the recipes"}
              </p>
            </MjmlText>

            <MjmlText font-size="14px">
              <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                {newsLang === "es-es" ? "Desayuno" : "Breakfast"}
              </h3>
              {/*data.day_menu.data.breakfast_misc_items.map((item, index) => (
                <p key={index}>{prismicR.asText(item.item_breakfast)}</p>
              ))*/}

              {data.day_menu.data.breakfast_recipes.map((item, index) => (
                <p key={index}>
                  {item.text_breakfast.map((text_breakfast, i) => (
                    <span key={i}>{`${text_breakfast.text} `}</span>
                  ))}
                  <a
                    href={`https://dediabetes.com/recetas/${item.recipe_breakfast.uid}`}
                    style={{
                      color: "#38B2AC",
                      textTransform: "capitalize",
                      margin: "13px 0",
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.recipe_breakfast.slug?.replace(/-/g, " ")}
                  </a>
                </p>
              ))}
              {/*<a href="https://dediabetes.com/recetas/arepas-platano/?utm_source=newsletter&utm_medium=email&utm_campaign=2021-12-10">
                1 arepa de platano*
              </a>*/}

              <h3
                style={{
                  marginTop: "1em",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {newsLang === "es-es" ? " Almuerzo" : "Lunch"}
              </h3>
              {/*data.day_menu.data.lunch_misc_items.map((item, index) => (
                <p key={index}>{prismicR.asText(item.item_lunch)}</p>
              ))*/}

              {data.day_menu.data.lunch_recipes.map((item, index) => (
                <p key={index}>
                  {item.text_lunch.map((text_lunch, i) => (
                    <span key={i}>{`${text_lunch.text} `}</span>
                  ))}
                  <a
                    href={`https://dediabetes.com/recetas/${item.recipe_lunch.uid}`}
                    style={{
                      color: "#38B2AC",
                      textTransform: "capitalize",
                      margin: "13px 0",
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.recipe_lunch.slug?.replace(/-/g, " ")}
                  </a>
                </p>
              ))}

              <h3
                style={{
                  marginTop: "1em",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {newsLang === "es-es" ? "Cena" : "Dinner"}
              </h3>
              {/*data.day_menu.data.dinner_misc_items.map((item, index) => (
                <p key={index}>{prismicR.asText(item.item_dinner)}</p>
              ))*/}

              {data.day_menu.data.dinner_recipes.map((item, index) => (
                <p key={index}>
                  {item.text_dinner.map((text_dinner, i) => (
                    <span key={i}>{`${text_dinner.text} `}</span>
                  ))}
                  <a
                    href={`https://dediabetes.com/recetas/${item.recipe_dinner.uid}`}
                    style={{
                      color: "#38B2AC",
                      textTransform: "capitalize",
                      margin: "13px 0",
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.recipe_dinner.slug?.replace(/-/g, " ")}
                  </a>
                </p>
              ))}
              {data.day_menu.data.snacks.length && (
                <>           
                  <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {newsLang === "es-es" ? "Meriendas" : "Snacks"}
                  </h3>
                  {data.day_menu.data.snacks.map((item, index) => (
                    <p key={index}>
                      {item.textsnack.map((textsnack, i) => (
                        <span key={i}>{`${textsnack.text} `}</span>
                      ))}
                      <a
                        href={`https://dediabetes.com/${item.snack_link.uid}`}
                        style={{
                          color: "#38B2AC",
                          textTransform: "capitalize",
                          margin: "13px 0",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.snack_link.slug?.replace(/-/g, " ")}
                      </a>
                    </p>
                  ))}
                </>
              )}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSection background-color="white">
          <MjmlColumn>
            <MjmlSpacer height="1px" />
            <MjmlDivider
              border-width="1px"
              border-color="lightgrey"
            ></MjmlDivider>
          </MjmlColumn>
        </MjmlSection>
        <Footer newsLang={newsLang} />
      </MjmlBody>
    </Mjml>
  );
};

//Mjml,
//MjmlAccordion,
//MjmlAccordionElement,
//MjmlAccordionText,
//MjmlAccordionTitle,
//MjmlAll,
//MjmlAttributes,
//MjmlBody,
//MjmlBreakpoint,
//MjmlButton,
//MjmlCarousel,
//MjmlCarouselImage,
//MjmlClass,
//MjmlColumn,
//MjmlDivider,
//MjmlFont,
//MjmlGroup,
//MjmlHead,
//MjmlHero,
//MjmlHtmlAttributes,
//MjmlHtmlAttribute,
//MjmlImage,
//MjmlNavbar,
//MjmlNavbarLink,
//MjmlPreview,
//MjmlRaw,
//MjmlSection,
//MjmlSelector,
//MjmlSocial,
//MjmlSocialElement,
//MjmlSpacer,
//MjmlStyle,
//MjmlTable,
//MjmlText,
//MjmlTitle,
//MjmlWrapper,
