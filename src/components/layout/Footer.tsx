import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'New Arrivals', path: '/products' },
    { name: 'Tops & Outerwear', path: '/products?category=tops' },
    { name: 'Bottoms', path: '/products?category=bottoms' },
    { name: 'Accessories', path: '/products?category=accessories' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Sustainability', path: '/about' },
  ],
  help: [
    { name: 'Shipping', path: '/contact' },
    { name: 'Returns', path: '/contact' },
    { name: 'Size Guide', path: '/products' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-elegant py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-heading text-2xl tracking-wide text-foreground">
              CHIC & MODERN
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">
              Curating timeless pieces for the modern wardrobe. Effortless elegance meets sustainable fashion.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4 tracking-wide uppercase text-sm">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4 tracking-wide uppercase text-sm">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4 tracking-wide uppercase text-sm">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Chic & Modern. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
