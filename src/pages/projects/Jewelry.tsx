import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import ring1 from "@/assets/ring-1.jpg";
import ring2 from "@/assets/ring-2.jpg";
import ring3 from "@/assets/ring-3.jpg";
import ring4 from "@/assets/ring-4.jpg";
import ring5 from "@/assets/ring-5.jpg";

const Jewelry = () => {
  const { t } = useLanguage();

  const rings = [
    { src: ring1, name: t("ring.1"), material: t("ring.material.silver") },
    { src: ring2, name: t("ring.2"), material: t("ring.material.steel") },
    { src: ring3, name: t("ring.3"), material: t("ring.material.silver") },
    { src: ring4, name: t("ring.4"), material: t("ring.material.silver") },
    { src: ring5, name: t("ring.5"), material: t("ring.material.silver") },
  ];

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
              {t("jewelry.location")}
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
              Silver<br />
              <span className="text-accent">Rings</span>
            </h1>
            <div className="flex flex-wrap gap-4 font-mono text-sm text-muted-foreground">
              <span>{t("jewelry.date")}</span>
              <span>•</span>
              <span>{t("jewelry.material")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Ring */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <motion.div
            className="aspect-square max-w-2xl mx-auto overflow-hidden border-2 border-foreground bg-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={ring3} 
              alt="Curved Band Ring"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              {t("jewelry.about.title")}
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              {t("jewelry.about.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto">
          <motion.h2 
            className="font-display text-3xl md:text-4xl mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t("jewelry.collection")}
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {rings.map((ring, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="aspect-square overflow-hidden border-2 border-foreground bg-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={ring.src}
                    alt={ring.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
                <div className="mt-3 text-center">
                  <h3 className="font-display text-sm">{ring.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground">{ring.material}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-display text-6xl text-accent/20">01</span>
              <h3 className="font-display text-xl mt-2 mb-3">{t("jewelry.process.1.title")}</h3>
              <p className="font-mono text-sm text-muted-foreground">
                {t("jewelry.process.1.description")}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-display text-6xl text-accent/20">02</span>
              <h3 className="font-display text-xl mt-2 mb-3">{t("jewelry.process.2.title")}</h3>
              <p className="font-mono text-sm text-muted-foreground">
                {t("jewelry.process.2.description")}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-display text-6xl text-accent/20">03</span>
              <h3 className="font-display text-xl mt-2 mb-3">{t("jewelry.process.3.title")}</h3>
              <p className="font-mono text-sm text-muted-foreground">
                {t("jewelry.process.3.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-foreground text-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              {t("jewelry.custom.title")}
            </h2>
            <p className="font-mono text-sm opacity-70 mb-8 max-w-md mx-auto">
              {t("jewelry.custom.description")}
            </p>
            <a 
              href="mailto:contact@meganmorrissette.com"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider border-2 border-background px-8 py-4 hover:bg-background hover:text-foreground transition-all"
            >
              {t("jewelry.custom.cta")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-6 border-t border-foreground/10">
        <div className="container mx-auto">
          <Link 
            to="/projects/master-of-brutality"
            className="group block"
          >
            <p className="font-mono text-sm text-muted-foreground mb-2">{t("project.next")}</p>
            <motion.h3 
              className="font-display text-4xl md:text-5xl group-hover:text-accent transition-colors"
              whileHover={{ x: 20 }}
            >
              {t("jewelry.next")}
            </motion.h3>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Jewelry;
