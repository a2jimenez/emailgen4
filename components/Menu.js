import React, { useEffect, useState } from "react";
import { MjmlColumn, MjmlText, MjmlSection } from "mjml-react";
/*     <!-- MENU SECTION -->*/

export default function Menu({ slice }) {
  const [urlLang, setUrlLang] = useState(
    slice.primary.menu.lang !== "es-es"
      ? `${slice.primary.menu.lang.split("-")[0]}/`
      : ""
  );
  const [recetas, setRecetas] = useState(
    slice.primary.menu.lang === "es-es" ? "recetas" : "recipes"
  );

  useEffect(() => {
    setUrlLang(
      slice.primary.menu.lang !== "es-es"
        ? `${slice.primary.menu.lang.split("-")[0]}/`
        : ""
    );
    setRecetas(slice.primary.menu.lang === "es-es" ? "recetas" : "recipes");
  }, [slice.primary.menu.lang]);
  return (
    <MjmlSection
      background-color={slice.primary.border_color ?? "#3d85c6"}
      padding="2px"
      border-radius="10px"
     
    >
      <MjmlColumn border-radius="8px" background-color="#fff" padding="10px">
        <MjmlText mjClass="subHeading">MENU DE LA SEMANA</MjmlText>
        <MjmlText>
          Calorías:{" "}
          <strong>
            {slice.primary.menu.data.calories
              ? slice.primary.menu.data.calories
              : ""}
          </strong>{" "}
          Carbs:{" "}
          <strong>
            {slice.primary.menu.data.carbs ? slice.primary.menu.data.carbs : ""}
          </strong>
        </MjmlText>
        <MjmlText padding-top="20px" line-height="21px">
          {/*  <!-- DESAYUNO -->*/}
          <strong style={{ fontSize: "16px" }}>Desayuno</strong>

          {slice.primary.menu.data.breakfast_recipes.map((item, index) => (
            <p key={index}>
              {item.text_breakfast.map((text_breakfast, i) => (
                <span key={i}>{`${text_breakfast.text} `}</span>
              ))}
              <a
                href={`https://dediabetes.com/${urlLang}${recetas}/${item.recipe_breakfast.uid}`}
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
        </MjmlText>

        {/*   <!-- ALUMUERZO -->*/}
        <MjmlText padding-top="20px" line-height="21px">
          <strong style={{ fontSize: "16px" }}>Almuerzo</strong>
          {slice.primary.menu.data.lunch_recipes.map((item, index) => (
            <p key={index}>
              {item.text_lunch.map((text_lunch, i) => (
                <span key={i}>{`${text_lunch.text} `}</span>
              ))}
              <a
                href={`https://dediabetes.com/${urlLang}${recetas}/${item.recipe_lunch.uid}`}
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
        </MjmlText>

        {/*            <!-- CENA -->*/}
        <MjmlText padding-top="20px" line-height="21px">
          <strong style={{ fontSize: "16px" }}>Cena</strong>
          {slice.primary.menu.data.dinner_recipes.map((item, index) => (
            <p key={index}>
              {item.text_dinner.map((text_dinner, i) => (
                <span key={i}>{`${text_dinner.text} `}</span>
              ))}
              <a
                href={`https://dediabetes.com/${urlLang}${recetas}/${item.recipe_dinner.uid}`}
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
        </MjmlText>
        {/*   <!-- Snacks -->*/}
        {slice.primary.menu.data.snacks?.length && (
          <MjmlText padding-top="20px" line-height="21px">
            <strong style={{ fontSize: "16px" }}>Snacks</strong>
            {slice.primary.menu.data.snacks.map((item, index) => (
              <p key={index}>
                {item.textsnack.map((textsnack, i) => (
                  <span key={i}>{`${textsnack.text} `}</span>
                ))}
                <a
                  href={`https://dediabetes.com/${urlLang}${item.snack_link.uid}`}
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
          </MjmlText>
        )}

        <MjmlText padding-top="20px" line-height="21px" font-style="italic">
          {urlLang === ""
            ? `Nota: Incluimos semanalmente un menú para un día. Uno de nuestros
          objetivos en DeDiabetes es mostrar que puedes comer muy bien si sabes
          ajustar las recetas a tu paladar y, más importante, a las necesidades
          de tu cuerpo y sus limitaciones.`
            : `Note: We include a weekly menu for one day. One of ours
              goals in DeDiabetes is to show that you can eat very well if you know
              adjust the recipes to your palate and, more importantly, to the needs
              of your body and its limitations.`}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
}
