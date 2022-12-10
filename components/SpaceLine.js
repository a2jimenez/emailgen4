import React from "react";
import { MjmlColumn, MjmlDivider, MjmlSection } from "mjml-react";
export default function SpaceLine({ slice }) {
  return (
    <>
      {slice.primary.insert_line ? (
        <MjmlSection>
          <MjmlColumn>
            {slice.primary.insert_line ? (
              <MjmlDivider mjClass="customDivider" />
            ) : (
              <MjmlDivider mjClass="customSpace" />
            )}
          </MjmlColumn>
        </MjmlSection>
      ) : (
        <></>
      )}
    </>
  );
}
