import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProject } from "@/hooks/useProject";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  let project: any | undefined;
  let error: any = null;

  try {
    project = useProject(slug || "");
  } catch (e) {
    error = e;
  }

  if (error || !project) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto">
            <p className="font-mono text-sm text-destructive">
              {t("project.notFound") || "Project not found."}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-4 font-mono text-sm underline"
            >
              <ArrowLeft size={16} />
              {t("project.back") || "Back to projects"}
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const mainImage = project.thumbnail as string;
  const gallery: any[] = (project.gallery as any[]) || [];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t("project.back") || "Back to work"}
          </Link>

          <motion.div
            className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                {project.category}
              </p>
              <h1 className="font-display text-4xl md:text-5xl mb-4">
                {project.title}
              </h1>
              {project.year && (
                <p className="font-mono text-sm text-muted-foreground mb-6">
                  {project.year}
                </p>
              )}
              {project.shortDescription && (
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {project.shortDescription}
                </p>
              )}
            </div>

            {mainImage && (
              <div className="aspect-[4/3] overflow-hidden border-2 border-foreground shadow-brutal-lg">
                <img
                  src={mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="pb-24 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((asset: any, index: number) => {
                const url = getAssetUrl(asset);
                if (!url) return null;
                return (
                  <motion.div
                    key={asset.sys?.id || index}
                    className="aspect-[4/3] overflow-hidden border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <img
                      src={url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default ProjectDetail;