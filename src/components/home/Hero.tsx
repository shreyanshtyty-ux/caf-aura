import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroCoffee from "@/assets/hero-coffee.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-cream">
        <div className="absolute inset-0 bg-gradient-to-br from-mocha/5 via-transparent to-caramel/5" />
      </div>

      {/* Floating coffee image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/4 w-1/2 h-96 opacity-20 animate-float"
      >
        <img
          src={heroCoffee}
          alt=""
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-8xl font-bold mb-6 text-shadow-soft"
          >
            Find Your Perfect
            <span className="block gradient-coffee bg-clip-text text-transparent">
              Coffee Spot
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground mb-12"
          >
            Discover amazing cafés near you. Explore menus, reviews, and find your next favorite coffee experience.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass rounded-full p-2 flex items-center gap-2 max-w-2xl shadow-medium"
          >
            <Input
              type="text"
              placeholder="Search for cafés near you..."
              className="flex-1 bg-transparent border-none focus-visible:ring-0 text-lg px-6"
            />
            <Button size="lg" className="rounded-full gradient-coffee hover:opacity-90 transition-opacity">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full glass border-white/20"
            >
              <MapPin className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-8 mt-12"
          >
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Cafés Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50k+</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
