import { useLanguage } from "@/contexts/LanguageContext";
import { useProjects } from "./useProjects";

export const useProject = (slug: string) => {
  const { language } = useLanguage();
  const projects = useProjects();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    throw new Error(`Project with slug "${slug}" not found`);
  }

  return project;
};