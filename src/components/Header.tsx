import { Instagram, Mail, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl tracking-tight hover:text-accent transition-colors">
          MMM
        </Link>
        
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wider">
          {!isHome && (
            <li>
              <Link to="/" className="hover:text-accent transition-colors flex items-center gap-2">
                <Home size={14} />
                {t("nav.home")}
              </Link>
            </li>
          )}
          <li>
            <a href={isHome ? "#work" : "/#work"} className="hover:text-accent transition-colors">
              {t("nav.work")}
            </a>
          </li>
          <li>
            <a href={isHome ? "#about" : "/#about"} className="hover:text-accent transition-colors">
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a href="mailto:contact@meganmorrissette.com" className="hover:text-accent transition-colors">
              {t("nav.contact")}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          {!isHome && (
            <Link 
              to="/"
              className="md:hidden p-2 border border-border hover:bg-foreground hover:text-background transition-colors"
              aria-label="Home"
            >
              <Home size={18} />
            </Link>
          )}
          <a 
            href="https://www.instagram.com/megan_morrissette_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-border hover:bg-foreground hover:text-background transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a 
            href="mailto:contact@meganmorrissette.com" 
            className="p-2 border border-border hover:bg-foreground hover:text-background transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
