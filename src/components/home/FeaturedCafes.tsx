import { motion } from "framer-motion";
import { Star, MapPin, Clock } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";
import cafeInterior from "@/assets/cafe-interior.jpg";

const cafes = [
  {
    id: 1,
    name: "Mocha Dreams",
    rating: 4.8,
    distance: "0.5 km",
    status: "Open",
    image: cafeInterior,
  },
  {
    id: 2,
    name: "Bean & Brew",
    rating: 4.6,
    distance: "1.2 km",
    status: "Open",
    image: cafeInterior,
  },
  {
    id: 3,
    name: "Café Serenity",
    rating: 4.9,
    distance: "2.0 km",
    status: "Closes at 8 PM",
    image: cafeInterior,
  },
];

export const FeaturedCafes = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Top Picks Near You</h2>
          <p className="text-muted-foreground text-lg">
            Handpicked cafés based on your location and preferences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cafes.map((cafe, index) => (
            <motion.div
              key={cafe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover className="group cursor-pointer overflow-hidden p-0">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cafe.image}
                    alt={cafe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 glass-dark rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-caramel fill-caramel" />
                    <span className="text-sm font-medium text-white">{cafe.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{cafe.name}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-caramel" />
                      {cafe.distance} away
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-caramel" />
                      {cafe.status}
                    </div>
                  </div>

                  <Button className="w-full gradient-coffee">
                    View Details
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
