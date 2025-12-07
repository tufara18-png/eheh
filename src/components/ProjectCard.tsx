import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  index: number;
  link?: string;
}

const ProjectCard = ({ title, category, year, image, description, index, link }: ProjectCardProps) => {
  const content = (
    <>
      <motion.div 
        className="relative overflow-hidden border-2 border-foreground"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <motion.img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        
        <motion.div 
          className="absolute inset-0 bg-black/0 flex items-center justify-center"
          whileHover={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          transition={{ duration: 0.4 }}
        >
          <motion.div 
            className="text-center px-8"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <p className="text-white font-mono text-sm leading-relaxed max-w-xs mx-auto">
              {description}
            </p>
            <motion.span 
              className="mt-6 inline-flex items-center gap-2 text-white font-mono text-sm uppercase tracking-wider border-b border-white pb-1"
              whileHover={{ gap: "12px" }}
            >
              View Project <ArrowUpRight size={14} />
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-accent border-l-[40px] border-l-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      <div className="mt-4 flex items-start justify-between">
        <div>
          <motion.h3 
            className="font-display text-2xl group-hover:text-accent transition-colors"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-wider mt-1">
            {category}
          </p>
        </div>
        <span className="font-mono text-sm text-muted-foreground">{year}</span>
      </div>
    </>
  );

  return (
    <motion.article 
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {link ? (
        <Link to={link} className="block cursor-pointer">
          {content}
        </Link>
      ) : (
        <div className="block cursor-pointer">
          {content}
        </div>
      )}
    </motion.article>
  );
};

export default ProjectCard;
