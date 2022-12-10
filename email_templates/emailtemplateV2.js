import React from "react";
import * as prismicR from "@prismicio/richtext";
import { PrismicRichText } from "@prismicio/react";
import sliceRenderer from "../lib/sliceRenderer";

import {
  Mjml,
  MjmlAttributes,
  MjmlBody,
  MjmlClass,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlSection,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
  MjmlAll,
  MjmlWrapper,
} from "mjml-react";

export const TemplateGenerator = (data, newsLang, URLsMetadata) => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>
          {prismicR.asText(data.newsletter_title)} | Dediabetes
        </MjmlTitle>
        <MjmlAttributes>
          <MjmlText
            padding="0px"
            font-size="14px"
            line-height="25px"
          ></MjmlText>
          <MjmlSection padding="0px"></MjmlSection>
          <MjmlImage padding="0px"></MjmlImage>
          <MjmlAll
            font-family="helvetica"
            align="left"
            font-size="14px"
          ></MjmlAll>
          <MjmlClass name="mainHeading" font-weight="500" font-size="24px" />
          <MjmlClass name="subHeading" color="#cc0000" font-weight="600" />
          <MjmlClass name="customPara" padding="10px 30px" />
          <MjmlClass
            name="truncDescp"
            font-size="12px"
            color="#666666"
            line-clamp="2"
            box-orient="vertical"
            overflow="hidden"
            
          />
          <MjmlClass
            name="categoryHeading"
            font-weight="500"
            font-size="20px"
            padding-bottom="10px"
          />
          <MjmlClass
            name="customDivider"
            border-color="#cccccc"
            width="95%"
            align="center"
            padding="15px 0px"
            border-width="1px"
          />
          <MjmlClass
            name="customSpace"
            border-color="transparent"
            width="95%"
            align="center"
            padding="15px 0px"
            border-width="1px"
          />
        </MjmlAttributes>
        <MjmlStyle>
          {`
        @media (min-width:480px) {
        .customWrapper {
        padding: 20px;
        }
        }
        @media (max-width:479px) {
        .customWrapper {
        padding: 20px 10px;
        }
        .customParagraph {
        padding: 10px 0px !important;
        }
        }
        .truncate-line-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; 
          width: 250px;
          overflow: hidden;
        }
        `}
        </MjmlStyle>
      </MjmlHead>
      <MjmlBody>
        <MjmlWrapper cssClass="customWrapper">
          {/*     <!-- HERO SECTION -->*/}
          <MjmlSection padding-bottom="30px">
            <MjmlColumn width="100%" padding-bottom="20px">
              <PrismicRichText
                field={data.newsletter_title}
                components={{
                  heading1: ({ children }) => (
                    <MjmlText
                      align="center"
                      line-height="30px"
                      font-weight="500"
                      font-size="35px"
                    >
                      {children}
                    </MjmlText>
                  ),
                }}
              />
              <PrismicRichText
                field={data.subtitle}
                components={{
                  paragraph: ({ children }) => (
                    <MjmlText
                      align="center"
                      //line-height="30px"
                      //font-weight="500"
                      //font-size="35px"
                      //padding-bottom="30px"
                    >
                      {children}
                    </MjmlText>
                  ),
                }}
              />
            </MjmlColumn>
          </MjmlSection>

          {data.body.map((slice) => (
            <React.Fragment key={slice.id}>
              {sliceRenderer(slice, URLsMetadata)}
            </React.Fragment>
          ))}

          {/*     <!-- FOOTER -->*/}
          <MjmlSection>
            <MjmlColumn>
              <MjmlText align="center">
                <a
                  href="https://dediabetes.com/aviso-legal-politica-privacidad"
                  style={{ color: "#666666" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  {newsLang === "es-es" ? "Privacidad" : "Privacy"}
                </a>{" "}
                ||{" "}
                <a
                  href="[unsubscribe]"
                  target="_blank"
                  style={{ color: "#666666" }}
                >
                  Unsubscribe
                </a>
              </MjmlText>
              <MjmlText padding-top="10px">
                Copyright © 2022 Dediabetes. All rights reserved. 14781 Memorial
                Dr, Houston, TX 77079
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
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
