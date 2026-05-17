import { useEffect } from "react";
import { Reveal } from "./Reveal";

import { REELS_URLS } from "@/data/index";
 
declare global {
  interface Window {
    instgrm?: any;
  }
}

export function Reels() {
  useEffect(() => {
    // Inject the Instagram embed script to auto-size the iframes correctly
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[color:var(--royal)]">
                — On The Socials
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-5xl font-light leading-tight text-[color:var(--navy)] md:text-6xl">
                Recent <em className="italic text-[color:var(--royal)]">Posts</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a 
              href="https://www.instagram.com/3t_events" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--navy)] px-8 py-3.5 font-sans text-[11px] uppercase tracking-[0.2em] text-[color:var(--ivory)] transition-all hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              View All Posts
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {REELS_URLS.map((url, i) => (
              <div
                key={i}
                className="mb-6 pb-4 break-inside-avoid relative overflow-hidden rounded-xl luxe-shadow bg-white transform transition-transform duration-500 hover:-translate-y-1"
              >
                {/* 
                  Negative margin crops out the bottom action bar 
                  (likes, comments, share buttons) from the embed.
                */}
                <div style={{ marginBottom: "-175px" }}>
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: 0,
                      margin: 0,
                      maxWidth: "100%",
                      width: "100%",
                      padding: 0,
                    }}
                  ></blockquote>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
