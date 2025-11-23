import { Navigation } from "@/components/shared/Navigation";
import { Hero } from "@/components/home/Hero";
import { FeaturedCafes } from "@/components/home/FeaturedCafes";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedCafes />
    </div>
  );
};

export default Home;
