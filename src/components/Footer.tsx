import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-foreground text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-flex rounded-md bg-slate-100 p-2">
              <BrandLogo className="h-10 w-auto" compact />
            </div>
            <p className="text-sm opacity-70">
              Making coding joyful, accessible, and career-relevant for all ages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/enroll" className="hover:opacity-100 transition-opacity">Enroll Now</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 font-heading font-bold">Programs</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Junior Coders (7–10)</li>
              <li>Teen Developers (11–17)</li>
              <li>Adult & Career Track</li>
              <li>Holiday Bootcamps</li>
              <li>1-on-1 Tutoring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading font-bold">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>hello@codejoyacademy.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Code Joy Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
