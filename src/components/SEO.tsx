import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  robots?: string;
};

const SITE_NAME = "Code Joy Academy";
const SITE_URL = "https://codejoyacademy.com";
const DEFAULT_IMAGE = "/code-joy-logo.svg";

const upsertMetaByName = (name: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name=\"${name}\"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property=\"${property}\"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const SEO = ({ title, description, path = "/", image = DEFAULT_IMAGE, robots = "index, follow" }: SEOProps) => {
  useEffect(() => {
    const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
    const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
    const fullTitle = `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    upsertMetaByName("description", description);
    upsertMetaByName("robots", robots);
    upsertMetaByName("twitter:title", fullTitle);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", fullImageUrl);

    upsertMetaByProperty("og:title", fullTitle);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:image", fullImageUrl);
    upsertMetaByProperty("og:url", canonical);
    upsertMetaByProperty("og:site_name", SITE_NAME);

    upsertCanonical(canonical);
  }, [title, description, path, image, robots]);

  return null;
};

export default SEO;
