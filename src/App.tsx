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
import {MiamiBestVideoTrends, MusicVideoCompaniesPage, PackagesPage, PhantomCameraPage, RedDragonPage} from "@/pages/OldPages";
import { AllBudgetsWelcomed } from "@/pages/OldPages";
import { ColorGrading } from "@/pages/OldPages";
import { CorporateVideoProductionMiami } from "@/pages/OldPages";
import { FloridaVideoProductionCompany } from "@/pages/OldPages";
import MiamiVideoProductionMain from "@/pages/OldPages";
import { MoviesPage } from "@/pages/OldPages";
import { MusicVideoProductionMiami } from "@/pages/OldPages";

import NotFound from "@/pages/not-found";
import { MusicVideoProductionCompanyAtlanta, MusicVideoProductionCompanyLosAngeles, MusicVideoProductionCompanyNewYork, MiamiVideoProduction, MusicVideoProduction } from './pages/OldPages';

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
        <Route path="/all-budgets-welcomed" component={AllBudgetsWelcomed} />
        <Route path="/miami-best-music-video-production-company-trends" component={MiamiBestVideoTrends} />
        <Route path="/color-grading" component={ColorGrading} />
        <Route path="/corporate-video-production-miami" component={CorporateVideoProductionMiami} />
        <Route path="/florida-video-production-company" component={FloridaVideoProductionCompany} />
        <Route path="/miami-video-production" component={MiamiVideoProduction} />
        <Route path="/music-video-production" component={MusicVideoProduction} />
        <Route path="/music-video-production-company-atlanta" component={MusicVideoProductionCompanyAtlanta} />
        <Route path="/music-video-production-company-los-angeles" component={MusicVideoProductionCompanyLosAngeles} />
        <Route path="/music-video-production-company-new-york" component={MusicVideoProductionCompanyNewYork} />
        <Route path="/miami-video-production-company" component={MiamiVideoProductionMain} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/music-video-production-companies-in-miami" component={MusicVideoProductionMiami} />
        <Route path="/music-video-companies" component={MusicVideoCompaniesPage} />
        <Route path="/packages" component={PackagesPage} />
        <Route path="/phantom-camera" component={PhantomCameraPage} />
        <Route path="/red-dragon" component={RedDragonPage} />
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
