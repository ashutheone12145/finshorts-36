import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Index from "./pages/Index";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import MarketAnalysis from "./pages/MarketAnalysis";
import News from "./pages/News";
import Education from "./pages/Education";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-[76px]">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/market-analysis" element={<MarketAnalysis />} />
              <Route path="/news" element={<News />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;