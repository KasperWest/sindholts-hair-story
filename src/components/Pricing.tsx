const Pricing = () => {
  return (
    <section id="priser" className="py-20 bg-gradient-to-b from-salon-warm to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Prisliste
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
            <img 
              src="/lovable-uploads/eda43d7d-3b44-4070-82a2-99b755c0c343.png" 
              alt="Prisliste - Hair by Sindholt" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="mt-8 text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              Alle priser er vejledende og kan variere afhængigt af hårlængde og kompleksitet
            </p>
            <p className="text-lg font-semibold text-foreground">
              Kontakt os for en personlig konsultation og præcis prisberegning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;