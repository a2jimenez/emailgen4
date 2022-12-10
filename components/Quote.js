import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { MjmlColumn, MjmlText, MjmlSection, MjmlSpacer } from "mjml-react";

export default function Quote({ slice }) {
  return (
    <MjmlSection
      background-color={slice.primary.border_color ?? "#cc0000"}
      padding="2px"
      border-radius="10px"
    >
      <MjmlColumn border-radius="8px" background-color="#fff" padding="10px">
        <PrismicRichText
          field={slice.primary.quote}
          components={{
            paragraph: ({ children }) => <MjmlText>{children}</MjmlText>,
          }}
        />
      </MjmlColumn>
    </MjmlSection>
  );
}
