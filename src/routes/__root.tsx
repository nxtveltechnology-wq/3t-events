import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ReactLenis } from "lenis/react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--cream)] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-script text-8xl text-[color:var(--gold)]">404</h1>
        <h2 className="mt-4 font-serif text-3xl text-[color:var(--navy)]">Page not found</h2>
        <p className="mt-3 font-sans text-sm text-[color:var(--navy)]/60">
          This petal hasn't bloomed yet.
        </p>
        <Link to="/" className="mt-8 inline-block rounded-full bg-[color:var(--navy)] px-6 py-3 font-sans text-[11px] uppercase tracking-[0.3em] text-[color:var(--ivory)]">
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--cream)] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-[color:var(--navy)]">A petal fell out of place.</h1>
        <p className="mt-3 font-sans text-sm text-[color:var(--navy)]/60">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-8 rounded-full bg-[color:var(--navy)] px-6 py-3 font-sans text-[11px] uppercase tracking-[0.3em] text-[color:var(--ivory)]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});



function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
        <div className="relative min-h-screen overflow-x-clip">
          <Navbar />
          <main className="relative z-[2]">
            <Outlet />
          </main>
          <Footer />
          <Toaster position="bottom-center" theme="light" />
        </div>
      </ReactLenis>
    </QueryClientProvider>
  );
}
