import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { MjmlColumn, MjmlText, MjmlSection, MjmlImage } from "mjml-react";
export default function Post({ slice }) {
  return (
    <>
      <MjmlSection>
        <MjmlColumn width="100%" padding="20px 0px">
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
      {slice.items.map((item, index) => (
        <MjmlSection key={index}>
          <MjmlColumn width="100%" padding="20px 0px" >
            <MjmlImage
              src={item.post.data.featured_image.url}
              alt={item.post.data.featured_image.alt}
              href={`https://dediabetes.com/${
                item.post.lang !== "es-es"
                  ? `${item.post.lang.split("-")[0]}/`
                  : ""
              }${item.post.uid}`}
            ></MjmlImage>
          </MjmlColumn>
          <MjmlColumn width="100%">
            <PrismicRichText
              field={item.post.data.title}
              components={{
                heading1: ({ children }) => (
                  <MjmlText mjClass="mainHeading">
                    <a
                      href={`https://dediabetes.com/${
                        item.post.lang !== "es-es"
                          ? `${item.post.lang.split("-")[0]}/`
                          : ""
                      }${item.post.uid}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {children}
                    </a>
                  </MjmlText>
                ),
              }}
            />

            <PrismicRichText
              field={item.post.data.description}
              components={{
                paragraph: ({ children }) => (
                  <MjmlText font-size="12px" color="#666666" padding="10px 0px">
                    {children}
                  </MjmlText>
                ),
              }}
            />

            <MjmlText>
              <a
                href={`https://dediabetes.com/${
                  item.post.lang !== "es-es"
                    ? `${item.post.lang.split("-")[0]}/`
                    : ""
                }${item.post.uid}`}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "blue" }}
              >
                {item.post.lang === "es-es" ? "Leer mas" : "Read more"}
              </a>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      ))}
    </>
  );
}
