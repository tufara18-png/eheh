import { createClient, Asset } from "contentful";

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN;
const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || "master";

if (!space || !accessToken) {
  console.warn(
    "Missing Contentful environment variables. " +
      "Make sure VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_DELIVERY_TOKEN are defined."
  );
}

export const contentfulClient = createClient({
  space: space || "",
  accessToken: accessToken || "",
  environment,
});

export const getAssetUrl = (asset: any): string => {
  if (!asset || !asset.fields) return "";
  const file = (asset.fields as any).file;
  if (!file) return "";
  const url = (file.url || (file["en-US"] && file["en-US"].url)) as string | undefined;
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
};