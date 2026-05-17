import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Reels } from "@/components/site/Reels";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Reels />
      <Process />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
