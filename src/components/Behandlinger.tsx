import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const treatments = [
  {
    title: "Herreklip",
    description: "Professionel herreklipning",
    details: "Hos Hair by Sindholt får du en professionel herreklipning, der passer til din stil og ansigtsform. Jeg bruger moderne teknikker og tager mig god tid til at sikre det perfekte resultat."
  },
  {
    title: "Dameklip",
    description: "Moderne dameklipning og styling",
    details: "Uanset om du ønsker en frisk frisure eller bare en klipning, så skræddersyr jeg behandlingen efter dit hår og dine ønsker. Jeg rådgiver gerne om den bedste frisure til dig."
  },
  {
    title: "Børneklip",
    description: "Børnevenlig klipning",
    details: "Jeg har erfaring med at klippe børn i alle aldre. Jeg sørger for en tryg og behagelig oplevelse, så dit barn får en flot frisure i hyggelige omgivelser."
  },
  {
    title: "Hairextensions",
    description: "Ekspert i hairextensions",
    details: "Med over 15 års erfaring inden for hairextensions tilbyder jeg forskellige metoder og løsninger. Jeg hjælper dig med at få længere og fyldigere hår til rimelige priser. Alle kan have råd til at have og vedligeholde hairextensions hos mig."
  },
  {
    title: "Hårfarve",
    description: "Professionel hårfarvning",
    details: "Fra naturlige nuancer til modige farvevalg - jeg hjælper dig med at finde den perfekte hårfarve. Jeg bruger kvalitetsprodukter og teknikker, der skåner dit hår."
  },
  {
    title: "Andre behandlinger",
    description: "Øvrige frisørbehandlinger",
    details: "Jeg tilbyder også andre behandlinger såsom styling til fester, bryllup og andre særlige lejligheder. Kontakt mig gerne for at høre mere om dine specifikke ønsker."
  }
];

const TreatmentCard = ({ title, description, details }: { title: string; description: string; details: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="overflow-hidden transition-all hover:shadow-lg border-border/50">
        <CollapsibleTrigger className="w-full text-left">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div className="space-y-1.5">
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0 pb-6">
            <p className="text-muted-foreground leading-relaxed">{details}</p>
          </CardContent>
        </CollapsibleContent>
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Behandlinger;
