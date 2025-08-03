const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <img 
              src="/lovable-uploads/e7547722-a7ff-4384-8cb7-69482a6a0aec.png" 
              alt="Hair by Sindholt Logo" 
              className="h-20 w-auto mx-auto md:mx-0 mb-4 filter invert"
            />
            <p className="text-primary-foreground/80">
              Professionel frisør og extensionist med passion for dit hår
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Ndr. Ringvej 29, 6000 Kolding</p>
              <p>Tlf: 31 31 60 93</p>
              <p>CVR: 41725214</p>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Hair by Sindholt. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;