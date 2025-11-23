import { Navigation } from "@/components/shared/Navigation";
import { motion } from "framer-motion";
import { Heart, MapPin, Star } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import cafeInterior from "@/assets/cafe-interior.jpg";

const savedCafes = [
  { id: 1, name: "Mocha Dreams", image: cafeInterior },
  { id: 2, name: "Bean & Brew", image: cafeInterior },
  { id: 3, name: "Café Serenity", image: cafeInterior },
];

const Profile = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 px-6 pb-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <GlassCard className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-caramel/30">
                <AvatarFallback className="text-2xl font-bold gradient-coffee">JD</AvatarFallback>
              </Avatar>
              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <p className="text-muted-foreground mb-6">Coffee Enthusiast</p>

              <div className="flex justify-center gap-8 text-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">{savedCafes.length}</div>
                  <div className="text-muted-foreground">Saved Cafés</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">42</div>
                  <div className="text-muted-foreground">Reviews</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">128</div>
                  <div className="text-muted-foreground">Check-ins</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-caramel" />
              Saved Cafés
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {savedCafes.map((cafe, index) => (
                <motion.div
                  key={cafe.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <GlassCard hover className="cursor-pointer overflow-hidden p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={cafe.image}
                        alt={cafe.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Heart className="w-6 h-6 text-caramel fill-caramel drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{cafe.name}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-caramel fill-caramel" />
                          <span>4.8</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>1.2 km</span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
