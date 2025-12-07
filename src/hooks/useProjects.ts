import { useLanguage } from "@/contexts/LanguageContext";

type ProjectFile = {
  title_en: string;
  title_fr?: string;
  slug: string;
  category_en: string;
  category_fr?: string;
  year?: number | string;
  short_en?: string;
  short_fr?: string;
  long_en?: string;
  long_fr?: string;
  thumbnail: string;
  gallery?: { image: string }[] | string[];
};

const projectFiles = import.meta.glob("../../content/projects/*.json", {
  eager: true,
});

export type Project = {
  title: string;
  slug: string;
  category: string;
  year?: string;
  shortDescription?: string;
  longDescription?: string;
  thumbnail: string;
  gallery: string[];
};

export const useProjects = () => {
  const { language } = useLanguage();

  const projects: Project[] = Object.values(projectFiles).map((mod: any) => {
    const data = (mod.default || mod) as ProjectFile;
    const title =
      language === "fr" ? data.title_fr || data.title_en : data.title_en;
    const category =
      language === "fr"
        ? data.category_fr || data.category_en
        : data.category_en;
    const shortDescription =
      language === "fr" ? data.short_fr || data.short_en : data.short_en;

    const gallery: string[] = Array.isArray(data.gallery)
      ? data.gallery.map((g: any) =>
          typeof g === "string" ? g : (g.image as string)
        )
      : [];

    return {
      title,
      slug: data.slug,
      category,
      year: data.year ? String(data.year) : undefined,
      shortDescription,
      longDescription:
        language === "fr" ? data.long_fr || data.long_en : data.long_en,
      thumbnail: data.thumbnail,
      gallery,
    };
  });

  // Only keep projects that have a thumbnail
  return projects.filter((p) => !!p.thumbnail);
};