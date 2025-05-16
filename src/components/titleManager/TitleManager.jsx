import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const name = "Intat Tochirakul";

const metadata = {
    "/": {
        title: `Home | ${name}`,
        description: `${name}'s Personal Website.`
    },
    "/about": {
        title: `About | ${name}`,
        description: `About ${name}.`
    },
    "/projects": {
        title: `Projects | ${name}`,
        description: `${name}'s Projects.`
    },
}

export function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const meta = metadata[path] || {title: name, description: ""};

    document.title = meta.title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = meta.description;

  }, [location.pathname]);

  return null;
}
