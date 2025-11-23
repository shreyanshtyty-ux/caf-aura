import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/shared/GlassCard";
import coffeePattern from "@/assets/coffee-pattern.jpg";
import { Link } from "react-router-dom";

const OwnerLogin = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${coffeePattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 gradient-cream" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-caramel/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Login card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md mx-6"
      >
        <GlassCard className="p-8">
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Coffee className="w-16 h-16 text-caramel" />
            </motion.div>
            <h1 className="text-3xl font-bold mb-2">Owner Portal</h1>
            <p className="text-muted-foreground">
              Manage your café and reach more customers
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="owner@example.com"
                className="glass mt-2"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="glass mt-2"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-caramel hover:underline">
                Forgot password?
              </a>
            </div>

            <Button className="w-full gradient-coffee text-lg py-6">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a href="#" className="text-caramel hover:underline font-medium">
              Register your café
            </a>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to User App
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default OwnerLogin;
