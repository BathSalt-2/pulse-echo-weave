import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LoadingScreen from "./pages/LoadingScreen";
import ChatInterface from "./pages/ChatInterface";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'loading' | 'dashboard' | 'chat'>('landing');

  const handleEnterApp = () => {
    setCurrentScreen('loading');
  };

  const handleLoadingComplete = () => {
    setCurrentScreen('dashboard');
  };

  const handleOpenChat = () => {
    setCurrentScreen('chat');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <Landing onEnterApp={handleEnterApp} />;
      case 'loading':
        return <LoadingScreen onComplete={handleLoadingComplete} />;
      case 'chat':
        return <ChatInterface onBack={handleBackToDashboard} />;
      case 'dashboard':
      default:
        return <Index onOpenChat={handleOpenChat} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={renderCurrentScreen()} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
