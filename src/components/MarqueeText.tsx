const MarqueeText = () => {
  const text = "FURNITURE • ART • OBJECTS • DESIGN • ";
  const repeatedText = text.repeat(6);

  return (
    <div className="overflow-hidden border-y-2 border-foreground py-4 bg-foreground text-background">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-mono text-sm uppercase tracking-[0.3em] mx-4">
          {repeatedText}
        </span>
        <span className="font-mono text-sm uppercase tracking-[0.3em] mx-4">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
