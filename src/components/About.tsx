const About = () => {
  return <section id="om-os" className="py-20 bg-gradient-to-b from-background to-salon-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Hvem er Hair by Sindholt
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="text-2xl font-semibold text-foreground">
                Det første indtryk, er det vi husker!
              </p>
              
              <p>
                Hair by Sindholt tilbyder alt indenfor hairextensions. 
                Min passion for hairextensions afspejler sig i mine priser, som er yderst rimelige.
              </p>
              
              <p>
                Jeg har arbejdet med extensions siden 2008 og har deltaget i diverse kurser mm., 
                ligesom jeg har arbejdet professionelt som extensionist i 3 år inden jeg åbnede salonen i 2020.
              </p>
              
              <p>
                Hos Hair by Sindholt har alle råd til at have og vedligeholde hairextensions.
              </p>
              
              <p>
                Hair by Sindholt er også det helt rigtige valg, når håret og personligheden skal passe sammen, 
                eller trænger til at blive matchet på ny. For vi gør det sammen!
              </p>
              
              <p className="font-semibold text-foreground">
                Med dit hår og dine ønsker som udgangspunkt, og med min faglighed og mine kompetencer, når vi i mål.
              </p>
              
              <p>
                Jeg har den 4-årige frisøruddannelse, og har arbejdet i faget siden 2010.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/lovable-uploads/b056d4cb-e5aa-4712-b00c-5781988a82de.png" alt="Professionelt hårarbejde" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            
            <p className="text-xl font-semibold text-foreground">
              Jeg glæder mig til at betjene dig hos Hair by Sindholt
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;