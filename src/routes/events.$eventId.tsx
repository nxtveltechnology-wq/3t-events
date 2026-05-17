import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ALL_EVENTS } from "@/data/index";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    console.log("Loader running for eventId:", params.eventId);
    const event = ALL_EVENTS.find((e) => e.id === params.eventId);
    if (!event) throw notFound();
    return event;
  },
  notFoundComponent: () => <div style={{padding: '100px', color: 'red'}}>Event Route Hit but event not found! Param was missing or invalid.</div>,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? 'Event'} — 3T Events` },
      { name: "description", content: loaderData?.desc ?? 'Discover our exquisitely crafted events.' },
    ],
  }),
  component: EventPage,
});

function EventPage() {
  const event = Route.useLoaderData() as any;
  const Icon = event.icon;
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });

  return (
    <div className="min-h-screen bg-[color:var(--navy)] text-white pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Sidebar / Category List */}
        <aside className="w-full lg:w-[320px] shrink-0">
          <div className="sticky top-32">
            <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[color:var(--gold)] mb-10 transition-colors font-sans text-[11px] uppercase tracking-[0.2em]">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h2 className="font-serif text-3xl mb-8 text-white font-light">Event Categories</h2>
            
            <nav className="flex flex-row overflow-x-auto pb-4 lg:pb-0 lg:flex-col gap-3 lg:gap-2 snap-x scrollbar-hide">
              {ALL_EVENTS.map((item) => {
                const isActive = item.id === event.id;
                const ItemIcon = item.icon;
                
                return (
                  <Link
                    key={item.id}
                    to="/events/$eventId"
                    params={{ eventId: item.id }}
                    className={`shrink-0 snap-start group flex items-center justify-between p-3 lg:p-4 rounded-2xl transition-all duration-300 ${isActive ? 'bg-[color:var(--gold)]/10 border border-[color:var(--gold)]/20 shadow-lg' : 'hover:bg-white/5 border border-white/5 lg:border-transparent bg-white/[0.02] lg:bg-transparent'}`}
                  >
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className={`p-2 lg:p-2.5 rounded-xl transition-colors ${isActive ? 'bg-[color:var(--gold)]/20 text-[color:var(--gold)]' : 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white'}`}>
                        <ItemIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                      </div>
                      <span className={`font-sans text-[13px] lg:text-[14px] pr-2 lg:pr-0 tracking-wide transition-colors ${isActive ? 'text-[color:var(--gold)] font-medium' : 'text-white/70 group-hover:text-white'}`}>
                        {item.title}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div layoutId="activeIndicator" className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden relative mb-14 shadow-2xl"
          >
            <img src={event.bgImg} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-[color:var(--navy)]/30 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-14 w-full">
               <div className="mb-4 flex items-center gap-4">
                  <Icon className="h-6 w-6 text-[color:var(--gold)]" strokeWidth={1.5} />
                  <div className="h-px w-8 bg-[color:var(--gold)]/50" />
                  <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[color:var(--gold)] font-medium">
                    {event.label}
                  </span>
               </div>
               <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight text-white mb-2">
                 {event.title}
               </h1>
            </div>
          </motion.div>

          <motion.div 
            key={`${event.id}-content`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h3 className="font-sans text-[12px] text-[color:var(--gold)] mb-6 uppercase tracking-[0.3em]">Overview</h3>
            <p className="font-sans text-[16px] md:text-[18px] font-light leading-relaxed text-white/75 mb-14">
              {event.desc}
            </p>

            <h3 className="font-sans text-[12px] text-[color:var(--gold)] mt-16 mb-6 uppercase tracking-[0.3em]">Key Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {event.tags.map((tag: string, i: number) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  key={tag} 
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[color:var(--gold)]/30 hover:bg-white/[0.05] transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-[color:var(--gold)] shadow-[0_0_10px_var(--gold)]" />
                  <span className="font-sans text-[15px] font-light text-white/90 tracking-wide">{tag}</span>
                </motion.div>
              ))}
            </div>
            
            
            {/* Extended Content Sections */}
            {event.contentSections && (
              <div className="mt-20 space-y-16">
                {event.contentSections.map((sec: any, i: number) => (
                  <motion.div 
                    key={sec.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="font-serif text-3xl text-white mb-6 font-light">{sec.title}</h3>
                    <p className="font-sans text-[16px] md:text-[18px] font-light leading-relaxed text-white/75">
                      {sec.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Gallery Section */}
            {event.gallery && (
              <div className="mt-24">
                <h3 className="font-sans text-[12px] text-[color:var(--gold)] mb-8 uppercase tracking-[0.3em]">Curated Moments</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.gallery.map((img: string, i: number) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className={`overflow-hidden rounded-2xl relative group ${i === 0 ? 'sm:col-span-2 aspect-[21/9]' : 'aspect-square'}`}
                    >
                      <img src={img} alt="Gallery item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Instagram Carousel Section */}
            {event.instagramUrls && (
              <div className="mt-24">
                 <div className="flex items-center justify-between mb-8">
                   <h3 className="font-sans text-[12px] text-[color:var(--gold)] uppercase tracking-[0.3em] flex items-center gap-2">
                     <Instagram className="w-4 h-4" /> Live from the Gram
                   </h3>
                   <div className="flex gap-2">
                     <button onClick={() => emblaApi?.scrollPrev()} className="p-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                     <button onClick={() => emblaApi?.scrollNext()} className="p-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"><ChevronRight className="w-4 h-4" /></button>
                   </div>
                 </div>
                 
                 <div className="overflow-hidden" ref={emblaRef}>
                   <div className="flex gap-4">
                     {event.instagramUrls.map((url: string, i: number) => (
                       <div key={i} className="flex-[0_0_80%] sm:flex-[0_0_300px] min-w-0">
                          {/* Placeholder styling for Instagram embed */}
                          <div className="w-full aspect-[4/5] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                            <div className="text-center p-6 z-10">
                              <Instagram className="w-8 h-8 text-white/30 mx-auto mb-3 group-hover:text-[color:var(--gold)] transition-colors" />
                              <p className="font-sans text-xs text-white/40 mb-4">Instagram Embed Placeholder</p>
                              <a href={url} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-white/60 hover:text-white hover:border-white transition-colors">View Post</a>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/80 to-transparent pointer-events-none" />
                          </div>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            )}
            
          </motion.div>
        </main>
      </div>
      
      {/* Contact Section Appended at Bottom */}
      <div className="mt-32 pt-20 bg-[color:var(--cream)] rounded-t-[3rem] text-black">
        <Contact />
      </div>
    </div>
  );
}
