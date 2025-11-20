import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/e7547722-a7ff-4384-8cb7-69482a6a0aec.png" 
              alt="Hair by Sindholt Logo" 
              className="h-20 w-auto mx-auto md:mx-0 filter invert"
            />
          </div>
          
          <nav className="text-center space-y-3">
            <h3 className="font-semibold text-lg mb-4">Vores Services</h3>
            <Link 
              to="/damefriser-kolding" 
              className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Damefrisør Kolding
            </Link>
            <Link 
              to="/herrefriser-kolding" 
              className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Herrefrisør Kolding
            </Link>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80">CVR: 41725214</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;