import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/damefriser-kolding" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Damefrisør
            </Link>
            <Link 
              to="/herrefriser-kolding" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Herrefrisør
            </Link>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90" 
              onClick={() => window.open('https://hairbysindholt.book.dk/', '_blank')}
            >
              Book tid
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <Link 
              to="/damefriser-kolding" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Damefrisør
            </Link>
            <Link 
              to="/herrefriser-kolding" 
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Herrefrisør
            </Link>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 w-full" 
              onClick={() => {
                window.open('https://hairbysindholt.book.dk/', '_blank');
                setIsMenuOpen(false);
              }}
            >
              Book tid
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;