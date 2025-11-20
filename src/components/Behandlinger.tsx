import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import herreklipImg from "@/assets/herreklip.png";
import dameklipBefore from "@/assets/dameklip-before.png";
import dameklipAfter from "@/assets/dameklip-after.png";

const treatments = [
  {
    title: "Herreklip",
    description: "Professionel herreklipning",
    details: "Hos Hair by Sindholt får du en professionel herreklipning, der passer til din stil og ansigtsform. Jeg bruger moderne teknikker og tager mig god tid til at sikre det perfekte resultat.",
    image: herreklipImg
  },
  {
    title: "Dameklip",
    description: "Moderne dameklipning og styling",
    details: "Uanset om du ønsker en frisk frisure eller bare en klipning, så skræddersyr jeg behandlingen efter dit hår og dine ønsker. Jeg rådgiver gerne om den bedste frisure til dig.",
    beforeAfter: {
      before: dameklipBefore,
      after: dameklipAfter
    }
  },
  {
    title: "Børneklip",
    description: "Børnevenlig klipning",
    details: "Jeg har erfaring med at klippe børn i alle aldre. Jeg sørger for en tryg og behagelig oplevelse, så dit barn får en flot frisure i hyggelige omgivelser.",
    image: "/placeholder.svg"
  },
  {
    title: "Hairextensions",
    description: "Ekspert i hairextensions",
    details: "Med over 15 års erfaring inden for hairextensions tilbyder jeg forskellige metoder og løsninger. Jeg hjælper dig med at få længere og fyldigere hår til rimelige priser. Alle kan have råd til at have og vedligeholde hairextensions hos mig.",
    image: "/placeholder.svg"
  },
  {
    title: "Hårfarve",
    description: "Professionel hårfarvning",
    details: "Fra naturlige nuancer til modige farvevalg - jeg hjælper dig med at finde den perfekte hårfarve. Jeg bruger kvalitetsprodukter og teknikker, der skåner dit hår.",
    image: "/placeholder.svg"
  },
  {
    title: "Andre behandlinger",
    description: "Øvrige frisørbehandlinger",
    details: "Jeg tilbyder også andre behandlinger såsom styling til fester, bryllup og andre særlige lejligheder. Kontakt mig gerne for at høre mere om dine specifikke ønsker.",
    image: "/placeholder.svg"
  }
];

const TreatmentCard = ({ 
  title, 
  description, 
  details, 
  image,
  beforeAfter 
}: { 
  title: string; 
  description: string; 
  details: string; 
  image?: string;
  beforeAfter?: { before: string; after: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="overflow-hidden transition-all hover:shadow-lg border-border/50">
        <div className="aspect-[4/3] overflow-hidden">
          {beforeAfter ? (
            <div className="grid grid-cols-2 h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={beforeAfter.before} 
                  alt={`${title} - Før`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded text-xs font-medium">
                  Før
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src={beforeAfter.after} 
                  alt={`${title} - Efter`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs font-medium">
                  Efter
                </div>
              </div>
            </div>
          ) : image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>
        <CardHeader className="space-y-1.5 pb-4">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 pb-6 space-y-4">
          <div className="flex gap-3">
            <Button variant="default" className="flex-1">
              Book
            </Button>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="flex-1">
                Læs mere
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <p className="text-muted-foreground leading-relaxed pt-4">{details}</p>
          </CollapsibleContent>
        </CardContent>
      </Card>
    </Collapsible>
  );
};

const Behandlinger = () => {
  return (
    <section id="behandlinger" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Behandlinger
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {treatments.map((treatment) => (
              <TreatmentCard
                key={treatment.title}
                title={treatment.title}
                description={treatment.description}
                details={treatment.details}
                image={'image' in treatment ? treatment.image : undefined}
                beforeAfter={'beforeAfter' in treatment ? treatment.beforeAfter : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Behandlinger;
