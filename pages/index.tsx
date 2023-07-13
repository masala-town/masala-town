import About from "@/components/About";
import Special from "@/components/Special";
import Catering from "@/components/Catering";
import Buffet from "@/components/Buffet";
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";
const Herosection = dynamic(() => import("../components/Herosection"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("../components/Testimonials"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Herosection />
      <About />
      <Special />
      <Catering />
      <Buffet />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
