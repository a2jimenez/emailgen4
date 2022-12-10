import { PrismicRichText } from "@prismicio/react";
import { MjmlColumn, MjmlText, MjmlSection } from "mjml-react";
import { useEffect } from "react";

import linkResolver from "../lib/linkResolver";

export default function Text({ slice }) {
  return (
    <MjmlSection>
      <MjmlColumn width="100%" padding-bottom="20px">
        <PrismicRichText
          field={slice.primary.text}
          components={{
            paragraph: ({ children }) => <MjmlText>{children}</MjmlText>,
            hyperlink: (props) => {
              const url = linkResolver(props.node.data);
              return (
                <a
                  href={url}
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
