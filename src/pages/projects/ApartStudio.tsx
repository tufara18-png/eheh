import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import apartStudio1 from "@/assets/apart-studio-1.jpg";
import apartStudio2 from "@/assets/apart-studio-2.jpg";
import behindScenes from "@/assets/behind-scenes.jpg";

const ApartStudio = () => {
  const { t } = useLanguage();

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
            {t("project.back")}
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent mb-4">
              {t("apart.location")}
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
              L Modular<br />
              <span className="text-accent">Benches</span>
            </h1>
            <div className="flex flex-wrap gap-4 font-mono text-sm text-muted-foreground">
              <span>{t("apart.date")}</span>
              <span>•</span>
              <span>{t("apart.type")}</span>
              <span>•</span>
              <a 
                href="https://apartstudio.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                Apart Studio <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <motion.div
            className="aspect-[16/9] overflow-hidden border-2 border-foreground"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={apartStudio2} 
              alt="L Modular Benches at Apart Studio"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                {t("apart.slogan")}
              </h2>
              <div className="space-y-4 font-mono text-sm text-muted-foreground leading-relaxed">
                <p className="text-foreground text-lg">
                  {t("apart.tagline")}
                </p>
                <p>
                  {t("apart.description.intro")}{" "}
                  <a 
                    href="https://apartstudio.co" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Apart Studio
                  </a>
                  {t("apart.description")}
                </p>
                <p>
                  {t("apart.material.description")}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-xl mb-4">{t("apart.details.title")}</h3>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  {t("apart.details.client")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  {t("apart.details.material")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  {t("apart.details.modules")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  {t("apart.details.function")}
                </li>
              </ul>
              
              <div className="pt-6">
                <a 
                  href="https://apartstudio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider border-2 border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-all"
                >
                  {t("apart.visit")} <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto">
          <motion.h2 
            className="font-display text-3xl md:text-4xl mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("apart.context")}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="aspect-square overflow-hidden border-2 border-foreground"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={apartStudio1}
                alt="L Benches detail"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            
            <motion.div
              className="aspect-square overflow-hidden border-2 border-foreground"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={apartStudio2}
                alt="L Benches in use"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="aspect-square overflow-hidden border-2 border-foreground shadow-brutal order-2 md:order-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={behindScenes}
                alt="L Benches construction process"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                {t("apart.process.label")}
              </p>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                {t("apart.process.title")}
              </h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {t("apart.process.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-6 border-t border-foreground/10">
        <div className="container mx-auto">
          <Link 
            to="/projects/jewelry"
            className="group block"
          >
            <p className="font-mono text-sm text-muted-foreground mb-2">{t("project.next")}</p>
            <motion.h3 
              className="font-display text-4xl md:text-5xl group-hover:text-accent transition-colors"
              whileHover={{ x: 20 }}
            >
              {t("apart.next")}
            </motion.h3>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ApartStudio;
