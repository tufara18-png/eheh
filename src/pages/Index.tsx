import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import MarqueeText from "@/components/MarqueeText";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProjects } from "@/hooks/useProjects";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const siteSettings = useSiteSettings();
  const projects = useProjects();

  const vimeoUrl =
    siteSettings?.vimeoUrl ||
    "https://player.vimeo.com/video/839727011?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1";

const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  
  const aboutImageY = useTransform(aboutProgress, [0, 1], [100, -100]);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Video Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
        {/* Vimeo Background Video */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />
          <iframe
            src={vimeoUrl}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </motion.div>
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-20 h-full flex flex-col justify-end pb-20 px-6"
          style={{ opacity: heroOpacity }}
        >
          <div className="container mx-auto">
            <div className="max-w-5xl overflow-hidden">
              <motion.p 
                className="font-mono text-sm uppercase tracking-[0.3em] text-white/70 mb-6"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("hero.subtitle")}
              </motion.p>
              <div className="overflow-hidden">
                <motion.h1 
                  className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Megan
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Meredith
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-accent"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Morrissette
                </motion.h1>
              </div>
            </div>
            
            <motion.div 
              className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="font-mono text-sm text-white/60 max-w-md">
                {t("hero.tagline")}
              </p>
              <MagneticButton 
                href="#work"
                className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-wider border-2 border-white text-white bg-white/10 backdrop-blur-sm px-6 py-3 hover:bg-white hover:text-black transition-colors"
              >
                {t("hero.cta")}
                <motion.span 
                  className="inline-block"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </section>

      <MarqueeText />

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {t("about.label")}
              </motion.p>
              <motion.h2 
                className="font-display text-4xl md:text-5xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {t("about.title")}
              </motion.h2>
              <motion.div 
                className="space-y-4 font-mono text-sm text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p>
                  {t("about.p1")}
                </p>
                <p>
                  {t("about.p2")}{" "}
                  <Link to="/projects/master-of-brutality" className="text-accent hover:underline">
                    {t("about.p2.exhibition")}
                  </Link>{" "}
                  {t("about.p2.middle")}{" "}
                  <a href="https://apartstudio.co" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {t("about.p2.client")}
                  </a>{" "}
                  {t("about.p2.end")}
                </p>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              style={{ y: aboutImageY }}
            >
              <motion.div 
                className="aspect-square overflow-hidden border-2 border-foreground shadow-brutal-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img 
                  src={siteSettings?.btsImage || "/uploads/bts-default.jpg"} 
                  alt="Behind the scenes - work in progress"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              {/* Decorative element */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10"
                initial={{ opacity: 0, x: -20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6 bg-card">
        <div className="container mx-auto">
          <motion.div 
            className="flex items-end justify-between mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                {t("work.label")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl">
                {t("work.title")}
              </h2>
            </div>
            <motion.p 
              className="hidden md:block font-mono text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              2020 — 2024
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://apartstudio.co"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
            >
              <p className="font-mono text-sm text-muted-foreground group-hover:text-background/70 mb-2">{t("links.client")}</p>
              <h3 className="font-display text-2xl mb-2">Apart Studio</h3>
              <p className="font-mono text-sm text-muted-foreground group-hover:text-background/70">
                {t("links.apart.description")}
              </p>
            </a>
            
            <a 
              href="https://www.instagram.com/megan_morrissette_"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
            >
              <p className="font-mono text-sm text-muted-foreground group-hover:text-background/70 mb-2">{t("links.instagram.label")}</p>
              <h3 className="font-display text-2xl mb-2">Instagram</h3>
              <p className="font-mono text-sm text-muted-foreground group-hover:text-background/70">
                {t("links.instagram.description")}
              </p>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <motion.h2 
            className="font-display text-4xl md:text-6xl lg:text-7xl mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t("cta.title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <MagneticButton
              href="mailto:contact@meganmorrissette.com"
              className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-wider bg-foreground text-background px-8 py-4 hover:shadow-[8px_8px_0px_hsl(var(--accent))] transition-all duration-300"
            >
              {t("cta.button")}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
