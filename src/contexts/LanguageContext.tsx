import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Hero
    "hero.subtitle": "Designer • Montreal",
    "hero.tagline": "Creating work somewhere between collectable art, furniture, and functional objects.",
    "hero.cta": "View Work",
    
    // About
    "about.label": "About",
    "about.title": "Design with raw honesty",
    "about.p1": "Megan Meredith Morrissette is a Montreal-based designer whose innovative vision bridges the gap between art and utility. Her work celebrates material honesty—raw metals, burned wood, concrete, and organic forms that speak to both brutalist tradition and contemporary sensibility.",
    "about.p2": "Featured in international exhibitions including",
    "about.p2.exhibition": "Master of Brutality",
    "about.p2.middle": "in Brooklyn, and commissioned by",
    "about.p2.client": "Apart Studio",
    "about.p2.end": "in Montreal.",
    
    // Work
    "work.label": "Selected Work",
    "work.title": "Featured Projects",
    
    // Projects
    "project.mob.title": "Master of Brutality",
    "project.mob.category": "Exhibition",
    "project.mob.description": "International group exhibition in Brooklyn, NY. Featuring the Zebra Table & sculptural furniture collection.",
    
    "project.benches.title": "L Benches",
    "project.benches.category": "Furniture",
    "project.benches.description": "Modular seating system for Apart Studio, Montreal. Tables, shelves, chairs—you decide.",
    
    "project.rings.title": "Silver Rings",
    "project.rings.category": "Jewelry",
    "project.rings.description": "Hand-forged sterling silver rings celebrating raw material honesty and imperfection.",
    
    // External Links
    "links.client": "Featured Client",
    "links.apart.description": "Creative space in Montreal featuring custom L Modular Benches →",
    "links.instagram.label": "Follow the Process",
    "links.instagram.description": "Behind the scenes, new work, and studio updates →",
    
    // CTA
    "cta.title": "Have a project in mind?",
    "cta.button": "Get in Touch",
    
    // Footer
    "footer.rights": "All rights reserved.",
    
    // Project Pages Common
    "project.back": "Back to Work",
    "project.next": "Next Project",
    
    // Master of Brutality Page
    "mob.location": "Exhibition • Brooklyn, NY",
    "mob.date": "March 2023",
    "mob.type": "Group Exhibition",
    "mob.instagram": "View on Instagram",
    "mob.about.title": "About the Exhibition",
    "mob.about.p1": '"Master of Brutality" was an international group exhibition held in Brooklyn, NY in March 2023, bringing together emerging brutalist designers and artists from around the world.',
    "mob.about.p2": "The exhibition featured the Zebra Table—a sculptural dining set with hand-burned wood featuring a distinctive zebra pattern—alongside concrete stools, metal sculptures, and various functional objects that blur the line between art and utility.",
    "mob.about.p3": "Each piece celebrates material honesty: raw metals, burned wood, and concrete forms that speak to both brutalist tradition and contemporary sensibility.",
    "mob.pieces.title": "Featured Pieces",
    "mob.pieces.1": "Zebra Table & Benches (Hand-burned plywood)",
    "mob.pieces.2": "Concrete Stools Series",
    "mob.pieces.3": "Grid Screen Room Divider",
    "mob.pieces.4": "Sculptural Metal Lamp",
    "mob.gallery": "Gallery",
    "mob.bts.label": "Behind the Scenes",
    "mob.bts.title": "The Making Process",
    "mob.bts.description": "Each piece begins as raw material—plywood boxes awaiting transformation. The burning process creates unique patterns, ensuring no two pieces are ever alike. This image captures the L Modular Benches before their finishing treatment.",
    "mob.next": "L Benches for Apart Studio →",
    
    // Apart Studio Page
    "apart.location": "Commission • Montreal, QC",
    "apart.date": "2024",
    "apart.type": "Custom Furniture",
    "apart.slogan": "Contrary to Popular Belief...",
    "apart.tagline": "You can sit on these ;)",
    "apart.description": ", a creative space in Montreal. The L-shaped modules can be arranged in countless configurations—use them as tables, shelves, chairs, or sculptural objects.",
    "apart.description.intro": "Custom modular seating system designed for",
    "apart.material.description": "Built from plywood with a textured blue-grey finish, each module weighs enough to feel substantial while remaining moveable for flexible space arrangements.",
    "apart.details.title": "Project Details",
    "apart.details.client": "Client: Apart Studio, Montreal",
    "apart.details.material": "Material: Plywood with textured finish",
    "apart.details.modules": "Modules: 8 L-shaped units",
    "apart.details.function": "Function: Seating, tables, shelving",
    "apart.visit": "Visit Apart Studio",
    "apart.context": "In Context",
    "apart.process.label": "The Process",
    "apart.process.title": "From Raw Material",
    "apart.process.description": "The modules start as simple plywood boxes, constructed outdoors before receiving their distinctive textured finish. This image captures them mid-process, awaiting their final treatment that transforms them into the sculptural pieces seen in the studio.",
    "apart.next": "Handcrafted Jewelry →",
    
    // Jewelry Page
    "jewelry.location": "Jewelry • Handcrafted",
    "jewelry.date": "2020 — Present",
    "jewelry.material": "Sterling Silver & Recycled Metals",
    "jewelry.about.title": "Raw Material Honesty",
    "jewelry.about.description": "Each ring is hand-forged from sterling silver or recycled metals, celebrating the beauty of imperfection. The pieces embrace raw, industrial aesthetics while maintaining a refined wearability. No two rings are identical—each carries the marks of its making.",
    "jewelry.collection": "Collection",
    "jewelry.process.1.title": "Material Selection",
    "jewelry.process.1.description": "Sourcing sterling silver and recycled metals with character and history.",
    "jewelry.process.2.title": "Hand Forging",
    "jewelry.process.2.description": "Each piece is shaped by hand, embracing the organic marks of the process.",
    "jewelry.process.3.title": "Finishing",
    "jewelry.process.3.description": "Minimal finishing preserves the raw beauty while ensuring comfortable wear.",
    "jewelry.custom.title": "Custom Orders Available",
    "jewelry.custom.description": "Interested in a custom piece? Each ring can be made to your specifications.",
    "jewelry.custom.cta": "Inquire About Custom Work →",
    "jewelry.next": "Master of Brutality →",
    
    // Ring names
    "ring.1": "Open Band Ring",
    "ring.2": "Wide Cuff Ring",
    "ring.3": "Curved Band",
    "ring.4": "Textured Wide Band",
    "ring.5": "Double Ring Set",
    "ring.material.silver": "Sterling Silver",
    "ring.material.steel": "Recycled Steel",
  },
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.work": "Projets",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    
    // Hero
    "hero.subtitle": "Designer • Montréal",
    "hero.tagline": "Créer des œuvres entre art de collection, mobilier et objets fonctionnels.",
    "hero.cta": "Voir les projets",
    
    // About
    "about.label": "À propos",
    "about.title": "Un design d'une honnêteté brute",
    "about.p1": "Megan Meredith Morrissette est une designer basée à Montréal dont la vision innovante fait le pont entre l'art et l'utilité. Son travail célèbre l'honnêteté des matériaux—métaux bruts, bois brûlé, béton et formes organiques qui parlent à la fois de tradition brutaliste et de sensibilité contemporaine.",
    "about.p2": "Présentée dans des expositions internationales dont",
    "about.p2.exhibition": "Master of Brutality",
    "about.p2.middle": "à Brooklyn, et mandatée par",
    "about.p2.client": "Apart Studio",
    "about.p2.end": "à Montréal.",
    
    // Work
    "work.label": "Travaux sélectionnés",
    "work.title": "Projets vedettes",
    
    // Projects
    "project.mob.title": "Master of Brutality",
    "project.mob.category": "Exposition",
    "project.mob.description": "Exposition collective internationale à Brooklyn, NY. Présentant la table Zebra et une collection de mobilier sculptural.",
    
    "project.benches.title": "Bancs L",
    "project.benches.category": "Mobilier",
    "project.benches.description": "Système d'assises modulaires pour Apart Studio, Montréal. Tables, étagères, chaises—à vous de décider.",
    
    "project.rings.title": "Bagues en argent",
    "project.rings.category": "Bijoux",
    "project.rings.description": "Bagues en argent sterling forgées à la main, célébrant l'honnêteté des matériaux bruts et l'imperfection.",
    
    // External Links
    "links.client": "Client vedette",
    "links.apart.description": "Espace créatif à Montréal avec des bancs modulaires L sur mesure →",
    "links.instagram.label": "Suivez le processus",
    "links.instagram.description": "Coulisses, nouveaux travaux et mises à jour de l'atelier →",
    
    // CTA
    "cta.title": "Un projet en tête?",
    "cta.button": "Me contacter",
    
    // Footer
    "footer.rights": "Tous droits réservés.",
    
    // Project Pages Common
    "project.back": "Retour aux projets",
    "project.next": "Projet suivant",
    
    // Master of Brutality Page
    "mob.location": "Exposition • Brooklyn, NY",
    "mob.date": "Mars 2023",
    "mob.type": "Exposition collective",
    "mob.instagram": "Voir sur Instagram",
    "mob.about.title": "À propos de l'exposition",
    "mob.about.p1": "« Master of Brutality » était une exposition collective internationale tenue à Brooklyn, NY en mars 2023, réunissant des designers et artistes brutalistes émergents du monde entier.",
    "mob.about.p2": "L'exposition présentait la table Zebra—un ensemble de salle à manger sculptural en bois brûlé à la main avec un motif zébré distinctif—aux côtés de tabourets en béton, de sculptures en métal et de divers objets fonctionnels qui brouillent la frontière entre l'art et l'utilité.",
    "mob.about.p3": "Chaque pièce célèbre l'honnêteté des matériaux: métaux bruts, bois brûlé et formes en béton qui parlent à la fois de tradition brutaliste et de sensibilité contemporaine.",
    "mob.pieces.title": "Pièces présentées",
    "mob.pieces.1": "Table et bancs Zebra (Contreplaqué brûlé à la main)",
    "mob.pieces.2": "Série de tabourets en béton",
    "mob.pieces.3": "Paravent à grille",
    "mob.pieces.4": "Lampe sculpturale en métal",
    "mob.gallery": "Galerie",
    "mob.bts.label": "Coulisses",
    "mob.bts.title": "Le processus de création",
    "mob.bts.description": "Chaque pièce commence comme matière brute—des boîtes de contreplaqué en attente de transformation. Le processus de brûlage crée des motifs uniques, assurant qu'aucune pièce n'est jamais identique. Cette image capture les bancs modulaires L avant leur traitement final.",
    "mob.next": "Bancs L pour Apart Studio →",
    
    // Apart Studio Page
    "apart.location": "Commande • Montréal, QC",
    "apart.date": "2024",
    "apart.type": "Mobilier sur mesure",
    "apart.slogan": "Contrairement aux croyances...",
    "apart.tagline": "On peut s'asseoir dessus ;)",
    "apart.description": ", un espace créatif à Montréal. Les modules en forme de L peuvent être arrangés en d'innombrables configurations—utilisez-les comme tables, étagères, chaises ou objets sculpturaux.",
    "apart.description.intro": "Système d'assises modulaires conçu pour",
    "apart.material.description": "Construits en contreplaqué avec une finition texturée bleu-gris, chaque module est assez lourd pour être substantiel tout en restant déplaçable pour des arrangements d'espace flexibles.",
    "apart.details.title": "Détails du projet",
    "apart.details.client": "Client: Apart Studio, Montréal",
    "apart.details.material": "Matériau: Contreplaqué avec finition texturée",
    "apart.details.modules": "Modules: 8 unités en forme de L",
    "apart.details.function": "Fonction: Assises, tables, étagères",
    "apart.visit": "Visiter Apart Studio",
    "apart.context": "En contexte",
    "apart.process.label": "Le processus",
    "apart.process.title": "De la matière brute",
    "apart.process.description": "Les modules commencent comme de simples boîtes de contreplaqué, construites à l'extérieur avant de recevoir leur finition texturée distinctive. Cette image les capture en cours de processus, en attente de leur traitement final qui les transforme en pièces sculpturales vues dans le studio.",
    "apart.next": "Bijoux artisanaux →",
    
    // Jewelry Page
    "jewelry.location": "Bijoux • Artisanal",
    "jewelry.date": "2020 — Présent",
    "jewelry.material": "Argent sterling et métaux recyclés",
    "jewelry.about.title": "Honnêteté des matériaux bruts",
    "jewelry.about.description": "Chaque bague est forgée à la main en argent sterling ou en métaux recyclés, célébrant la beauté de l'imperfection. Les pièces embrassent une esthétique brute et industrielle tout en maintenant un confort de port raffiné. Aucune bague n'est identique—chacune porte les marques de sa fabrication.",
    "jewelry.collection": "Collection",
    "jewelry.process.1.title": "Sélection des matériaux",
    "jewelry.process.1.description": "Approvisionnement en argent sterling et métaux recyclés avec caractère et histoire.",
    "jewelry.process.2.title": "Forge à la main",
    "jewelry.process.2.description": "Chaque pièce est façonnée à la main, embrassant les marques organiques du processus.",
    "jewelry.process.3.title": "Finition",
    "jewelry.process.3.description": "Une finition minimale préserve la beauté brute tout en assurant un port confortable.",
    "jewelry.custom.title": "Commandes sur mesure disponibles",
    "jewelry.custom.description": "Intéressé par une pièce personnalisée? Chaque bague peut être fabriquée selon vos spécifications.",
    "jewelry.custom.cta": "Demander un travail sur mesure →",
    "jewelry.next": "Master of Brutality →",
    
    // Ring names
    "ring.1": "Bague ouverte",
    "ring.2": "Bague large",
    "ring.3": "Bague courbée",
    "ring.4": "Bague large texturée",
    "ring.5": "Ensemble double bague",
    "ring.material.silver": "Argent sterling",
    "ring.material.steel": "Acier recyclé",
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
