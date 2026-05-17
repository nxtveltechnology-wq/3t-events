import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — 3T Events" },
      { name: "description", content: "Weddings, corporate galas, birthdays, destination events — fully designed and executed." },
      { property: "og:title", content: "Services — 3T Events" },
      { property: "og:description", content: "Every occasion, beautifully crafted." },
    ],
  }),
  component: () => (
    <>
      <Services />
      <Process />
    </>
  ),
});
