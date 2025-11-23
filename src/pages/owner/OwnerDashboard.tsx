import { motion } from "framer-motion";
import { Eye, Heart, TrendingUp, Coffee, Plus, Image, BarChart3 } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Total Views", value: "2,847", icon: Eye, change: "+12%" },
  { label: "Saved", value: "423", icon: Heart, change: "+8%" },
  { label: "Reviews", value: "89", icon: TrendingUp, change: "+23%" },
];

const OwnerDashboard = () => {
  return (
    <div className="min-h-screen gradient-cream">
      {/* Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="glass-dark border-b border-white/10 sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-caramel" />
              <span className="text-2xl font-bold text-white">Owner Dashboard</span>
            </div>
            <Link to="/">
              <Button variant="outline" className="glass">
                View User App
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      <div className="container mx-auto px-6 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome back! ☕</h1>
          <p className="text-muted-foreground text-lg">
            Here's how your café is performing today
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover className="relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-caramel" />
                  <span className="text-sm font-medium text-green-600 glass-dark px-3 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>

                {/* Decorative gradient */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-gradient-to-br from-caramel/20 to-transparent rounded-full blur-2xl" />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard hover className="cursor-pointer group">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full gradient-coffee flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Add New Café</h3>
                <p className="text-sm text-muted-foreground">
                  Register a new location
                </p>
              </div>
            </GlassCard>

            <GlassCard hover className="cursor-pointer group">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-mocha to-mocha-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Manage Gallery</h3>
                <p className="text-sm text-muted-foreground">
                  Upload café photos
                </p>
              </div>
            </GlassCard>

            <GlassCard hover className="cursor-pointer group">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-caramel to-caramel-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">View Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Track performance
                </p>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
