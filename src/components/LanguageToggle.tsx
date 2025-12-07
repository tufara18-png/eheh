import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="relative p-2 border border-border hover:bg-foreground hover:text-background transition-colors font-mono text-xs uppercase tracking-wider min-w-[40px]"
      aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
    >
      <motion.span
        key={language}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {language === "en" ? "FR" : "EN"}
      </motion.span>
    </button>
  );
};

export default LanguageToggle;
