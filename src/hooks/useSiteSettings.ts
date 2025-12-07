import settings from "../../content/settings.json";

export type SiteSettings = {
  vimeoUrl?: string;
  btsImage?: string;
};

export const useSiteSettings = (): SiteSettings => {
  return (settings as SiteSettings) || {};
};