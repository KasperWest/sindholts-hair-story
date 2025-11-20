import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Star, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import dameklipBefore from "@/assets/dameklip-before.png";
import dameklipAfter from "@/assets/dameklip-after.png";
import hairextensionsBefore from "@/assets/hairextensions-before.png";
import hairextensionsAfter from "@/assets/hairextensions-after.png";

const Damefriser = () => {
  return (
    <>
      <Helmet>
        <title>Damefrisør Kolding - Extensions & Klipning | Hair by Sindholt</title>
        <meta name="description" content="Damefrisør i Kolding specialiseret i hairextensions. 15 års erfaring med extensions siden 2008. Book dameklipning og extensions hos Hair by Sindholt - Ring 31 31 60 93" />
        <meta name="keywords" content="damefrisør kolding, extensions kolding, hairextensions kolding, dameklipning kolding, hair extensions kolding" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-salon-champagne via-salon-warm to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Damefrisør Kolding
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Specialist i hairextensions og professionel dameklipning
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                15+ års erfaring med extensions siden 2008 - Koldings førende ekspert i hairextensions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                  onClick={() => window.open('https://hairbysindholt.book.dk/', '_blank')}
                >
                  Book tid
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

        {/* Extensions Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Hairextensions i Kolding
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Længere, fyldigere hår med 15+ års erfaring - alle kan have råd til at have og vedligeholde hairextensions hos mig
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-bold text-foreground mb-4">15+ års erfaring med extensions</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-muted-foreground">
                              <span className="font-semibold text-foreground">Specialist siden 2008</span> - Arbejdet professionelt som extensionist i tre år
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-muted-foreground">
                              <span className="font-semibold text-foreground">Forskellige metoder</span> - Jeg tilbyder forskellige extensionsmetoder og løsninger
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-muted-foreground">
                              <span className="font-semibold text-foreground">For alle</span> - Alle kan have råd til hairextensions hos Hair by Sindholt
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-muted-foreground">
                              <span className="font-semibold text-foreground">Kvalitet og erfaring</span> - Deltaget i en række kurser og konstant faglig udvikling
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-center text-muted-foreground">FØR</p>
                    <img 
                      src={hairextensionsBefore} 
                      alt="Før hairextensions hos damefrisør i Kolding"
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-center text-muted-foreground">EFTER</p>
                    <img 
                      src={hairextensionsAfter} 
                      alt="Efter hairextensions hos damefrisør i Kolding"
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dameklipning Section */}
        <section className="py-20 bg-salon-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-center text-muted-foreground">FØR</p>
                    <img 
                      src={dameklipBefore} 
                      alt="Før dameklipning hos frisør i Kolding"
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-center text-muted-foreground">EFTER</p>
                    <img 
                      src={dameklipAfter} 
                      alt="Efter dameklipning hos frisør i Kolding"
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 md:order-2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Professionel dameklipning i Kolding
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Som <span className="font-semibold text-foreground">erfaren damefrisør i Kolding</span> skræddersyr jeg behandlingen efter dit hår og dine ønsker. Uanset om du ønsker en frisk frisure, en ny stil eller bare en klipning, rådgiver jeg gerne om den bedste frisure til dig.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Med den 4-årige frisøruddannelse og aktiv i faget siden 2010, sikrer jeg altid professionel rådgivning og kvalitetsbehandling i hyggelige omgivelser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gradient-to-b from-background to-salon-champagne">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Hvad kan jeg tilbyde som damefrisør i Kolding?
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">Hairextensions</h3>
                  <p className="text-muted-foreground">
                    Specialist i extensions med 15+ års erfaring. Forskellige metoder og løsninger
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">Dameklipning</h3>
                  <p className="text-muted-foreground">
                    Moderne frisurer og styling tilpasset dit hår og din personlighed
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">Personlig service</h3>
                  <p className="text-muted-foreground">
                    Samme frisør hver gang i hyggelige omgivelser centralt i Kolding
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-salon-champagne">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Book din behandling hos damefrisør i Kolding
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Extensions, dameklipning og hårfarve - oplev forskellen ved 15+ års erfaring hos Hair by Sindholt
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

export default Damefriser;
