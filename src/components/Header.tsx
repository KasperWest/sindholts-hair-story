import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/e7547722-a7ff-4384-8cb7-69482a6a0aec.png" 
            alt="Hair by Sindholt Logo" 
            className="h-12 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#hjem" className="text-foreground hover:text-primary transition-colors">Hjem</a>
          <a href="#om-os" className="text-foreground hover:text-primary transition-colors">Om os</a>
          <a href="#galleri" className="text-foreground hover:text-primary transition-colors">Galleri</a>
          <a href="#priser" className="text-foreground hover:text-primary transition-colors">Priser</a>
          <a href="#kontakt" className="text-foreground hover:text-primary transition-colors">Kontakt</a>
        </nav>
        <Button 
          variant="default" 
          className="bg-primary hover:bg-primary/90"
          onClick={() => window.open('https://hairbysindholt.book.dk/', '_blank')}
        >
          Book tid
        </Button>
      </div>
    </header>
  );
};

export default Header;