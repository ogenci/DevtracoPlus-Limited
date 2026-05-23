import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";

// Lazy load pages for dynamic code-splitting (reduces initial bundle size for <1s load)
const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const Buy = lazy(() => import("@/pages/Buy"));
const Rent = lazy(() => import("@/pages/Rent"));
const Sell = lazy(() => import("@/pages/Sell"));
const AffiliateProgram = lazy(() => import("@/pages/resources/AffiliateProgram"));
const TaxChanges = lazy(() => import("@/pages/resources/TaxChanges"));
const Insights = lazy(() => import("@/pages/resources/Insights"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

// Reset scroll position to top instantly on every route change
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

// Premium brand loading state during dynamic chunk loading
function PageLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4.5">
        <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        <span className="font-serif text-[11px] tracking-[0.25em] text-primary/80 uppercase animate-pulse">
          Devtraco Plus
        </span>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/buy" component={Buy} />
      <Route path="/rent" component={Rent} />
      <Route path="/sell" component={Sell} />
      <Route path="/resources/affiliate-program" component={AffiliateProgram} />
      <Route path="/resources/tax-changes" component={TaxChanges} />
      <Route path="/resources/insights" component={Insights} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Suspense fallback={<PageLoading />}>
            <Router />
          </Suspense>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
