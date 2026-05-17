import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHeader } from "@/components/site/PageHeader";
import { Vision } from "@/components/site/Vision";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — 3T Events" },
      { name: "description", content: "A decade of crafting extraordinary weddings, galas and celebrations across the world." },
      { property: "og:title", content: "About — 3T Events" },
      { property: "og:description", content: "Meet the team behind India's most celebrated events." },
    ],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Built on passion,"
        italic="powered by craft."
        subtitle="A decade of extraordinary events — weddings, galas, celebrations — across five continents."
      />
      <About />
      <Vision />
      <Process />
      <WhyUs />
      <Testimonials />
    </>
  ),
});
