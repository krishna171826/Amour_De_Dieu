
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroImage";
import { AboutSection } from "./components/AboutSection";
import { MissionDonateSection } from "./components/MissionDonate";
import { CalendarSection} from "./components/CalenderSection";
import { SocialMediaSection } from "./components/SocialMediaSection";
import { ClothingDonationSection } from "./components/ClothsDonationSection";

export default function Home() {
  return (
    <>
      <Navbar />  
      <main className="w-full h-125 relative">
    <HeroSection />
    <AboutSection />
    <MissionDonateSection  />
    <CalendarSection />
    <SocialMediaSection />
    <ClothingDonationSection />
</main>
    </>
  );
}