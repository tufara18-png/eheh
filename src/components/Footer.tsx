import { ArrowRight, Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-5xl md:text-6xl mb-6">
              Let's create<br />something together
            </h2>
            <p className="font-mono text-sm text-background/70 max-w-md">
              Available for commissions, collaborations, and exhibitions. 
              Based in Montreal, working internationally.
            </p>
          </div>
          
          <div className="flex flex-col justify-end">
            <div className="space-y-4">
              <a 
                href="mailto:contact@meganmorrissette.com" 
                className="group flex items-center gap-4 font-mono text-lg hover:text-accent transition-colors"
              >
                <Mail size={20} />
                <span>contact@meganmorrissette.com</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.instagram.com/megan_morrissette_" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 font-mono text-lg hover:text-accent transition-colors"
              >
                <Instagram size={20} />
                <span>@megan_morrissette_</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-background/50 uppercase tracking-wider">
            © 2024 Megan Meredith Morrissette. {t("footer.rights")}
          </p>
          <p className="font-mono text-xs text-background/50">
            Montreal, Canada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
