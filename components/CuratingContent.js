import { PrismicRichText } from "@prismicio/react";
import { MjmlColumn, MjmlText, MjmlSection, MjmlImage } from "mjml-react";

import * as prismicH from "@prismicio/helpers";

export default function CuratingContent({ slice, URLsMetadata }) {

  return (
    <>
      {prismicH.isFilled.richText(slice?.primary?.title) && (
        <MjmlSection>
          <MjmlColumn width="100%">
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => (
                  <MjmlText mjClass="categoryHeading">{children}</MjmlText>
                ),
              }}
            />
          </MjmlColumn>
        </MjmlSection>
      )}
      {URLsMetadata.map((url, index) => (
        <MjmlSection key={index}>
          <MjmlColumn padding="20px 10px">
            <MjmlImage
              src={url.metadata?.banner ?? url.OGtags?.image}
              href={url.metadata?.website}
            />
          </MjmlColumn>
          <MjmlColumn padding="20px 0px">
            <MjmlText mjClass="categoryHeading" color={"red"}>
              {get_domain_from_url(url.metadata?.website)}
            </MjmlText>
            <MjmlText font-weight="600">{url.metadata?.title?? url.OGtags?.title}</MjmlText>
            <MjmlText mjClass="truncDescp"  cssClass="truncate-line-clamp" >
              {url.metadata?.description?? url.OGtags?.description}
              {/*url.metadata?.description?.length > 50 && "..."*/}
            </MjmlText>
            <MjmlText>
              <a
                href={url.metadata?.website}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Leer mas
              </a>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      ))}
    </>
  );
}

function get_domain_from_url(url) {
  let domain = new URL(url);
  return domain.hostname.replace("www.", "");
}
