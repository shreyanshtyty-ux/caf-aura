import { Coffee, MapPin, User, Home } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { motion } from "framer-motion";

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <Coffee className="w-8 h-8 text-caramel group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold text-primary-foreground">Cafè Finder</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
              activeClassName="text-caramel font-medium"
            >
              <Home className="w-4 h-4" />
              Home
            </NavLink>
            <NavLink
              to="/map"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
              activeClassName="text-caramel font-medium"
            >
              <MapPin className="w-4 h-4" />
              Map
            </NavLink>
            <NavLink
              to="/profile"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
              activeClassName="text-caramel font-medium"
            >
              <User className="w-4 h-4" />
              Profile
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <NavLink
              to="/owner/login"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Owner Login
            </NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
