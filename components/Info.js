import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { MjmlColumn, MjmlText, MjmlSection } from "mjml-react";

import linkResolver from "../lib/linkResolver";

export default function Info({ slice }) {
  return (
    <MjmlSection
      background-color={slice.primary.border_color ?? "#A9A9A9"}
      padding="2px"
      border-radius="10px"
    >
      <MjmlColumn border-radius="8px" background-color="#fff" padding="10px">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => <MjmlText>{children}</MjmlText>,
          }}
        />
          <PrismicRichText
          field={slice.primary.text}
          components={{
            paragraph: ({ children }) => <MjmlText>{children}</MjmlText>,
            hyperlink: (props) => {
            
              return (
                <a
                  href={linkResolver(
                    props.node.data
                  )}
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
  );
}
