import { Navigation } from "@/components/shared/Navigation";
import { motion } from "framer-motion";
import { MapPin, Filter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/GlassCard";
import cafeInterior from "@/assets/cafe-interior.jpg";

const cafePins = [
  { id: 1, name: "Mocha Dreams", rating: 4.8, lat: 40.7, lng: -74.0 },
  { id: 2, name: "Bean & Brew", rating: 4.6, lat: 40.75, lng: -73.98 },
  { id: 3, name: "Café Serenity", rating: 4.9, lat: 40.73, lng: -74.01 },
];

const Map = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 px-6 pb-6 h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex justify-between items-center"
        >
          <h1 className="text-4xl font-bold">Explore Cafés</h1>
          <Button variant="outline" className="glass">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </motion.div>

        <div className="flex-1 grid md:grid-cols-3 gap-6">
          {/* Map Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 glass rounded-3xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-mocha/20 via-cream/10 to-caramel/20 flex items-center justify-center">
              {/* Simulated map pins */}
              <div className="relative w-full h-full">
                {cafePins.map((cafe, index) => (
                  <motion.div
                    key={cafe.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="absolute animate-pulse-slow"
                    style={{
                      top: `${30 + index * 20}%`,
                      left: `${40 + index * 10}%`,
                    }}
                  >
                    <div className="relative">
                      <MapPin className="w-12 h-12 text-caramel drop-shadow-lg" fill="currentColor" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="glass-dark rounded-full px-3 py-1 text-sm text-white">
                          {cafe.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-muted-foreground text-lg">Interactive Map View</p>
              </div>
            </div>
          </motion.div>

          {/* Cafe List */}
          <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
            {cafePins.map((cafe, index) => (
              <motion.div
                key={cafe.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="cursor-pointer p-4">
                  <img
                    src={cafeInterior}
                    alt={cafe.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-bold text-lg mb-2">{cafe.name}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-caramel fill-caramel" />
                    <span className="font-medium">{cafe.rating}</span>
                    <span className="text-muted-foreground ml-2">1.2 km away</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
