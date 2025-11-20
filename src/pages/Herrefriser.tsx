import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Clock, MapPin, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import herreklipImg from "@/assets/herreklip.png";

const Herrefriser = () => {
  return (
    <>
      <Helmet>
        <title>Herrefrisør Kolding - Professionel Herreklipning | Hair by Sindholt</title>
        <meta name="description" content="Professionel herrefrisør i Kolding. Book herreklipning hos Hair by Sindholt - 15 års erfaring, moderne teknikker og personlig service. Ring 31 31 60 93" />
        <meta name="keywords" content="herrefrisør kolding, herreklipning kolding, frisør mænd kolding, barbering kolding" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-salon-champagne via-salon-warm to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Herrefrisør i Kolding
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Professionel herreklipning med 15 års erfaring - Book din tid hos Hair by Sindholt
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                  onClick={() => window.open('https://hairbysindholt.book.dk/', '_blank')}
                >
                  Book herreklipning
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
                  onClick={() => window.location.href = 'tel:31316093'}
                >
                  Ring: 31 31 60 93
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={herreklipImg} 
                  alt="Professionel herreklipning hos herrefrisør i Kolding"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Din herrefrisør i Kolding
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hos <span className="font-semibold text-foreground">Hair by Sindholt</span> får du en professionel herreklipning tilpasset din stil og ansigtsform. Som erfaren <span className="font-semibold text-foreground">herrefrisør i Kolding</span> bruger jeg moderne teknikker og tager mig god tid til at sikre det perfekte resultat.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Med den 4-årige frisøruddannelse og 15 års erfaring siden 2010, leverer jeg altid kvalitetsklipning i hyggelige og professionelle rammer centralt i Kolding.
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Professionel klipning</h3>
                      <p className="text-muted-foreground">Skræddersyet til din stil og ansigtsform</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">15 års erfaring</h3>
                      <p className="text-muted-foreground">4-årig uddannelse og aktiv i faget siden 2010</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Personlig service</h3>
                      <p className="text-muted-foreground">Samme frisør hver gang - mig</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Central beliggenhed</h3>
                      <p className="text-muted-foreground">Parkering ved døren og let adgang med bus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-salon-warm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Herreklipning i Kolding
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Scissors className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">Moderne frisurer</h3>
                  <p className="text-muted-foreground">
                    Fra klassisk til moderne - jeg klipper efter de nyeste trends og din personlige stil
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">God tid</h3>
                  <p className="text-muted-foreground">
                    Jeg tager mig tid til en grundig klipning og hyggeligt snakken
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">Let adgang</h3>
                  <p className="text-muted-foreground">
                    Ndr. Ringvej 29 - parkering ved døren og busstation udenfor
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-salon-champagne">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Book din herreklipning i Kolding i dag
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Oplev forskellen ved professionel herreklipning hos Hair by Sindholt - din frisør i Kolding
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                  onClick={() => window.open('https://hairbysindholt.book.dk/', '_blank')}
                >
                  Book online nu
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
                  onClick={() => window.location.href = 'tel:31316093'}
                >
                  Ring 31 31 60 93
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Herrefriser;
