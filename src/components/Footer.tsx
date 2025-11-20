import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <img 
            src="/lovable-uploads/e7547722-a7ff-4384-8cb7-69482a6a0aec.png" 
            alt="Hair by Sindholt Logo" 
            className="h-20 w-auto mx-auto filter invert"
          />
          
          <nav className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/damefriser-kolding" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Damefrisør Kolding
            </Link>
            <Link 
              to="/herrefriser-kolding" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Herrefrisør Kolding
            </Link>
          </nav>

          <p className="text-primary-foreground/80">CVR: 41725214</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;