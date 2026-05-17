import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — 3T Events" },
      { name: "description", content: "An editorial gallery of weddings, galas, and destination celebrations." },
      { property: "og:title", content: "Gallery — 3T Events" },
      { property: "og:description", content: "Frames of forever." },
    ],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Editorial"
        title="Frames of"
        italic="forever."
        subtitle="A curated collection from our most cherished weddings, galas and private celebrations."
      />
      <Gallery />
      <Testimonials />
    </>
  ),
});
