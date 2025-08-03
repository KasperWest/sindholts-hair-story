const Pricing = () => {
  return (
    <section id="priser" className="py-20 bg-salon-warm/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Priser</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rimelige priser på alle behandlinger - alle har råd til smukke hair extensions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/eda43d7d-3b44-4070-82a2-99b755c0c343.png" 
            alt="Prisliste - Hair by Sindholt" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default Pricing;