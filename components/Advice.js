import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { MjmlColumn, MjmlText, MjmlSection } from "mjml-react";

import linkResolver from "../lib/linkResolver";

export default function Advice({ slice }) {
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
          <MjmlColumn padding-bottom="10px">
            <PrismicRichText
              field={item.advice.data?.cat_group[0]?.category.data.label}
              components={{
                heading1: ({ children }) => (
                  <MjmlText mjClass="subHeading" textTransform="uppercase">
                    {children}
                  </MjmlText>
                ),
              }}
            />
            <PrismicRichText
              field={item.advice.data?.title_advice}
              components={{
                heading1: ({ children }) => (
                  <MjmlText mjClass="categoryHeading">{children}</MjmlText>
                ),
                hyperlink: (props) => {
                  return (
                    <a
                      href={linkResolver(props.node.data)}
                      style={{ textDecoration: "none", color: "blue" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {props.children}
                    </a>
                  );
                },
              }}
            />
            <PrismicRichText
              field={item.advice.data?.description_advice}
              components={{
                paragraph: ({ children }) => <MjmlText>{children}</MjmlText>,
                hyperlink: (props) => {
                  return (
                    <a
                      href={linkResolver(props.node.data)}
                      style={{ textDecoration: "none", color: "blue" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {props.children}
                    </a>
                  );
                },
              }}
            />
          </MjmlColumn>
        </MjmlSection>
      ))}
    </>
  );
}
