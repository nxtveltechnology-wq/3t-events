import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Velvet & Vows" },
      { name: "description", content: "Begin your story with our atelier — a private consultation awaits." },
      { property: "og:title", content: "Contact — Velvet & Vows" },
      { property: "og:description", content: "A private consultation, beautifully held." },
    ],
  }),
  component: () => (
    <>
      <PageHeader eyebrow="Begin Your Story" title="Let's craft" italic="forever, together." />
      <Contact />
      <FAQ />
    </>
  ),
});
