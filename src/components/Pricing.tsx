import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Scissors, Sparkles, Baby, Palette, Sparkle } from "lucide-react";

const Pricing = () => {
  const treatments = [
    {
      id: "herreklip",
      title: "Herreklip",
      icon: Scissors,
      description: "Professionel klipning tilpasset din stil og ansigtsform. Inkluderer konsultation, vask, klipning og styling.",
      prices: "Fra 350 kr."
    },
    {
      id: "dameklip",
      title: "Dameklip",
      icon: Sparkles,
      description: "Skræddersyet klipning der fremhæver dit hår og personlighed. Inkluderer konsultation, vask, klipning og styling med professionelle produkter.",
      prices: "Fra 450 kr."
    },
    {
      id: "borneklip",
      title: "Børneklip",
      icon: Baby,
      description: "Børnevenlig klipning i rolige omgivelser. Vi tager os godt af de mindste og sikrer en positiv oplevelse.",
      prices: "Fra 250 kr."
    },
    {
      id: "extensions",
      title: "Hair Extensions",
      icon: Sparkle,
      description: "Forlængelser af høj kvalitet for ekstra længde og fylde. Inkluderer konsultation om den bedste metode til dit hår og ønsker.",
      prices: "Fra 2.500 kr. - Kontakt for præcis pris"
    },
    {
      id: "farve",
      title: "Hårfarve",
      icon: Palette,
      description: "Professionel hårfarvning med kvalitetsprodukter. Fra subtile highlights til dramatiske forandringer. Inkluderer farvekonsultation og pleje.",
      prices: "Fra 650 kr."
    }
  ];

  return (
    <section id="behandlinger" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Behandlinger</h2>
          <p className="text-muted-foreground text-lg">Vælg den behandling der passer til dig</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <AccordionItem 
                  key={treatment.id} 
                  value={treatment.id}
                  className="border rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4 text-left w-full">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground">{treatment.title}</h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-16 space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        {treatment.description}
                      </p>
                      <p className="text-lg font-semibold text-primary">
                        {treatment.prices}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Pricing;