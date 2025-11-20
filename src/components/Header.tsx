import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/e7547722-a7ff-4384-8cb7-69482a6a0aec.png" 
              alt="Hair by Sindholt Logo" 
              className="h-12 w-auto" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90" 
            onClick={() => window.open('https://hairbysindholt.book.dk/', '_blank')}
          >
            Book tid
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;