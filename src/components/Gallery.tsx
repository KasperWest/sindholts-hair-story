const Gallery = () => {
  return (
    <section id="galleri" className="py-20 bg-gradient-to-b from-salon-warm to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Galleri - Frisør i Kolding
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Se eksempler på vores smukke hårarbejde fra frisørsalonen i Kolding
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/53af63df-b83a-4287-b6a3-e79178d00e86.png" 
              alt="Galleri af professionelt hårarbejde fra frisør i Kolding - Hair by Sindholt" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Eksempler på vores professionelle hårarbejde med extensions, balayage og styling fra frisørsalonen i Kolding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;