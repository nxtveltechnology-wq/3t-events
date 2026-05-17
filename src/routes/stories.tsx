import { createFileRoute } from "@tanstack/react-router";
import { Reels } from "@/components/site/Reels";
import { Gallery } from "@/components/site/Gallery";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Wedding Stories — Velvet & Vows" },
      { name: "description", content: "Cinematic films and editorial moments from the weddings we've held." },
      { property: "og:title", content: "Wedding Stories — Velvet & Vows" },
      { property: "og:description", content: "A reel of love stories, beautifully planned." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="The Reel" title="Love stories," italic="on film." subtitle="Vertical cinema from the celebrations we've quietly orchestrated." />
      <Reels />
      <Gallery />
    </>
  ),
});
