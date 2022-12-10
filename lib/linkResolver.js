const linkResolver = (data) => {
  const { type, lang, link_type, url, uid } = data;
  const urlLang = lang !== "es-es" ? `${lang?.split("-")[0]}/` : "";
  const recetas = lang === "es-es" ? "recetas" : "recipes";
  const consejos = lang === "es-es" ? "consejos" : "tips";

  switch (link_type) {
    case "Document":
      switch (type) {
        case "blog_post":
          return `https://dediabetes.com/${urlLang}${uid}/`;
        case "advice":
          return `https://dediabetes.com/${urlLang}${consejos}/${uid}/`;
        case "recipes":
          return `https://dediabetes.com/${urlLang}${recetas}/${uid}/`;
        default:
          console.log("unhadled url level 2");
          return `https://dediabetes.com/${urlLang}`;
      }

    case "Web":
      return url;
    default:
      console.log("unhadled url level 1");
      return "https://dediabetes.com/";
  }
};

export default linkResolver;
