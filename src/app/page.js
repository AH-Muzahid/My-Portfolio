import HeroSection from "./Hero/HeroSection";
import About from "./About/AboutSection";
import Logomarquee from "@/Components/components/Logomarquee";
import Navber from "./Navber/Navber";
import WorkSection from './Work/WorkSection';
import Service from './Service/ServiceSection';
import Process from "./Process/ProcessSection";
import Contact from "./Contact/ContactSection";

export default function Home() {
  return (
    <div >
      <main >
        <Navber />
        <HeroSection />
        <About />
        <Logomarquee />
        <WorkSection />
        <Service />
        <Process />
        <Contact />
      </main>
    </div>
  );
}
