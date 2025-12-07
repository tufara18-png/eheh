import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import exhibition1 from "@/assets/exhibition-1.jpg";
import exhibition2 from "@/assets/exhibition-2.jpg";
import exhibition3 from "@/assets/exhibition-3.jpg";
import exhibition4 from "@/assets/exhibition-4.jpg";
import behindScenes from "@/assets/behind-scenes.jpg";

const images = [exhibition1, exhibition2, exhibition3, exhibition4];

const MasterOfBrutality = () => {
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
              {t("mob.location")}
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
              Master of<br />
              <span className="text-accent">Brutality</span>
            </h1>
            <div className="flex flex-wrap gap-4 font-mono text-sm text-muted-foreground">
              <span>{t("mob.date")}</span>
              <span>•</span>
              <span>{t("mob.type")}</span>
              <span>•</span>
              <a 
                href="https://www.instagram.com/p/CpqGT8JO5h2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                {t("mob.instagram")} <ExternalLink size={12} />
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
              src={exhibition1} 
              alt="Master of Brutality Exhibition"
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
                {t("mob.about.title")}
              </h2>
              <div className="space-y-4 font-mono text-sm text-muted-foreground leading-relaxed">
                <p>{t("mob.about.p1")}</p>
                <p>{t("mob.about.p2")}</p>
                <p>{t("mob.about.p3")}</p>
              </div>
            </motion.div>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-xl mb-4">{t("mob.pieces.title")}</h3>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  {t("mob.pieces.1")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  {t("mob.pieces.2")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  {t("mob.pieces.3")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  {t("mob.pieces.4")}
                </li>
              </ul>
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
            {t("mob.gallery")}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden border-2 border-foreground"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img 
                  src={img}
                  alt={`Exhibition view ${index + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                {t("mob.bts.label")}
              </p>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                {t("mob.bts.title")}
              </h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {t("mob.bts.description")}
              </p>
            </motion.div>
            
            <motion.div
              className="aspect-square overflow-hidden border-2 border-foreground shadow-brutal"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={behindScenes}
                alt="Behind the scenes - work in progress"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-6 border-t border-foreground/10">
        <div className="container mx-auto">
          <Link 
            to="/projects/apart-studio"
            className="group block"
          >
            <p className="font-mono text-sm text-muted-foreground mb-2">{t("project.next")}</p>
            <motion.h3 
              className="font-display text-4xl md:text-5xl group-hover:text-accent transition-colors"
              whileHover={{ x: 20 }}
            >
              {t("mob.next")}
            </motion.h3>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MasterOfBrutality;
