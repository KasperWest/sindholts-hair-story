import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
const Contact = () => {
  return <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Kontakt & Find vej
        </h2>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-salon-warm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Hair by Sindholt</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Adresse:</p>
                      <p className="text-muted-foreground">Ndr. Ringvej 29</p>
                      <p className="text-muted-foreground">6000 Kolding</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Telefon:</p>
                      <a href="tel:31316093" className="text-primary hover:underline text-lg">
                        31 31 60 93
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Beliggenhed:</p>
                      <p className="text-muted-foreground">
                        Tæt på Slotssøbadet, i gå afstand fra Koldings latinerkvarter
                      </p>
                      <p className="text-muted-foreground text-sm mt-2">
                        Bybus nr. 2 (Ankerhus – Agtrupvej – Busterminalen – Munkevænget) 
                        lige udenfor døren to gange i timen
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground text-center">
                    CVR nr.: 41725214
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0 bg-card">
              
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="bg-salon-champagne rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Lad os skabe dit drømmehår sammen!
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Book en tid i dag og oplev forskellen ved professionel hårpleje 
                og extensions af højeste kvalitet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.location.href = 'tel:31316093'}>
                  Ring nu
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={() => window.open('https://hairbysindholt.book.dk/', '_blank')}>
                  Book online
                </Button>
              </div>
            </div>
            
            <div className="bg-muted rounded-xl p-6">
              <p className="text-center text-muted-foreground">
                "Hair by Sindholt er også det helt rigtige valg, når håret og personligheden 
                skal passe sammen, eller trænger til at blive matchet på ny. For vi gør det sammen!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;