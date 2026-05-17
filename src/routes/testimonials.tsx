import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — 3T Events" },
      { name: "description", content: "Words from the families and couples we've had the honour to serve." },
      { property: "og:title", content: "Testimonials — 3T Events" },
      { property: "og:description", content: "Whispered love from those we've held." },
    ],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Whispered Love"
        title="The families"
        italic="we've held."
        subtitle="Real words from real people — families who trusted us with their most precious moments."
      />
      <Testimonials />
      <WhyUs />
    </>
  ),
});
