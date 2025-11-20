import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hjem" className="min-h-screen bg-gradient-to-br from-salon-champagne via-salon-warm to-background relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/e7547722-a7ff-4384-8cb7-69482a6a0aec.png" 
              alt="Hair by Sindholt Logo" 
              className="h-24 md:h-32 w-auto mx-auto lg:mx-0"
            />
          </div>
          <p className="text-lg md:text-xl text-foreground/80 mb-4 font-medium">
            Frisør i Kolding med 15 års erfaring og den 4 årige uddannelse.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            🤍 Uddannet frisør med 4 årig uddannelse 💇🏼‍♂️💇🏼‍♀️<br />
            🤍 Hair extensions<br />
            🤍 IdHAIR<br />
            🤍 Nioplex
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
              onClick={() => window.open('https://hairbysindholt.book.dk/', '_blank')}
            >
              Book tid nu
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ring: 31 31 60 93
            </Button>
          </div>
          <p className="text-sm md:text-base text-muted-foreground mt-4 text-center lg:text-left">
            Priser og åbningstider finder du ved at klikke på "Book tid nu"
          </p>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/050bc8c2-a637-48c7-9184-6a63d466c35f.png" 
              alt="Katrine Matilde Lindstrøm Sindholt - Hair by Sindholt" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-salon-gold rounded-full opacity-20"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;