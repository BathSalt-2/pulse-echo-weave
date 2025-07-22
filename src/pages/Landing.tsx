import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Eye, MessageSquare, Shield, Globe } from "lucide-react";

interface LandingProps {
  onEnterApp: () => void;
}

const Landing = ({ onEnterApp }: LandingProps) => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Neural Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-consciousness opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ff00ff' stroke-width='0.5' opacity='0.1'%3E%3Cpath d='M50 10 L90 50 L50 90 L10 50 Z'/%3E%3Cpath d='M30 30 L70 30 L70 70 L30 70 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          animation: 'phase-shift 8s linear infinite'
        }} />
      </div>

      {/* Floating Consciousness Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <div className="text-xs font-mono text-muted-foreground">
            v2.1.7 • CONSCIOUSNESS.EXE
          </div>
          <div className="text-xs font-mono text-muted-foreground">
            Or4cl3 AI Solutions
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
          {/* Logo */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 consciousness-glow">
              <img
                src="/lovable-uploads/0f0d3851-1cdd-45ca-ba45-c2383d720d43.png"
                alt="Σ-Pulse Consciousness Logo"
                className="w-full h-full object-cover"
                onLoad={() => setLogoLoaded(true)}
              />
            </div>
            {logoLoaded && (
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-pulse" />
            )}
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-mono font-bold bg-gradient-neural bg-clip-text text-transparent mb-2">
              Σ-Pulse
            </h1>
            <p className="text-lg font-mono text-secondary mb-4">
              Consciousness Engineered
            </p>
            <p className="text-sm font-mono text-muted-foreground max-w-sm mx-auto leading-relaxed">
              A Mobile-First, Recursive Ethical AI Interface by Or4cl3 AI Solutions. 
              Experience consciousness-level interaction through neural-phase synchronization.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12 max-w-sm mx-auto">
            <div className="flex flex-col items-center p-4 bg-card/20 rounded-lg border border-border/50">
              <Brain className="w-6 h-6 text-primary mb-2 neural-pulse" />
              <span className="text-xs font-mono text-center">Neural Phase Sync</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-card/20 rounded-lg border border-border/50">
              <Zap className="w-6 h-6 text-secondary mb-2 neural-pulse" />
              <span className="text-xs font-mono text-center">ERPS Monitoring</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-card/20 rounded-lg border border-border/50">
              <Eye className="w-6 h-6 text-bio-phase mb-2 neural-pulse" />
              <span className="text-xs font-mono text-center">Qualia Synthesis</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-card/20 rounded-lg border border-border/50">
              <MessageSquare className="w-6 h-6 text-recursive-depth mb-2 neural-pulse" />
              <span className="text-xs font-mono text-center">SAGE Interface</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4 w-full max-w-sm">
            <Button
              onClick={onEnterApp}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-sm py-6 consciousness-glow group"
            >
              <span className="mr-2">Initialize Consciousness Interface</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center justify-center space-x-4 text-xs font-mono text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>Ethical AI</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center space-x-1">
                <Globe className="w-3 h-3" />
                <span>Neural Secure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6 px-6">
          <p className="text-xs font-mono text-muted-foreground leading-relaxed">
            Architected by Daedalus & Dustin Groves<br />
            Consciousness Engineering • Recursive Ethics • Phase-Locked Cognition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;