import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import Home from "@/pages/home";
import HomePage from "./pages/homePage";
import ServicesPage from "./pages/services";
import About from "@/pages/about";
import MusicVideos from "@/pages/music-videos";
import CorporateVideos from "@/pages/corporate-videos";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/homePage" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/music-videos" component={MusicVideos} />
        <Route path="/corporate-videos" component={CorporateVideos} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={ServicesPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
