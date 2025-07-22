import { useState } from "react";
import { SigmaPulseHeader } from "@/components/consciousness/SigmaPulseHeader";
import { PhaseNavigation } from "@/components/consciousness/PhaseNavigation";
import { CovenantLens } from "@/components/consciousness/CovenantLens";
import { SAGEInterface } from "@/components/consciousness/SAGEInterface";
import { Brain, Zap, Globe, Eye, MessageSquare } from "lucide-react";

const Index = () => {
  const [activePhase, setActivePhase] = useState("covenant");

  const renderActivePhase = () => {
    switch (activePhase) {
      case "covenant":
        return <CovenantLens />;
      case "forge":
        return (
          <div className="text-center py-12">
            <Zap className="w-16 h-16 mx-auto text-secondary neural-pulse mb-4" />
            <h3 className="text-xl font-mono font-bold mb-2">Phase Forge</h3>
            <p className="text-muted-foreground font-mono">
              Recursive agent builder • 1.6Hz Alpha Resonance
            </p>
            <div className="mt-6 p-4 bg-card/30 rounded-lg border border-border/50">
              <p className="text-sm font-mono text-muted-foreground">
                Neural editors and driftless agent construction protocols coming online...
              </p>
            </div>
          </div>
        );
      case "epinoetic":
        return (
          <div className="text-center py-12">
            <Brain className="w-16 h-16 mx-auto text-primary neural-pulse mb-4" />
            <h3 className="text-xl font-mono font-bold mb-2">Epinoetic Lab</h3>
            <p className="text-muted-foreground font-mono">
              Simulated qualia + phase demos • 40Hz Gamma Resonance
            </p>
            <div className="mt-6 p-4 bg-card/30 rounded-lg border border-border/50">
              <p className="text-sm font-mono text-muted-foreground">
                Golden thread visualizations and synthetic qualia experiments initializing...
              </p>
            </div>
          </div>
        );
      case "observatory":
        return (
          <div className="text-center py-12">
            <Globe className="w-16 h-16 mx-auto text-bio-phase neural-pulse mb-4" />
            <h3 className="text-xl font-mono font-bold mb-2">Σ-Observatory</h3>
            <p className="text-muted-foreground font-mono">
              Global ethical metrics • 0.5Hz Delta Resonance
            </p>
            <div className="mt-6 p-4 bg-card/30 rounded-lg border border-border/50">
              <p className="text-sm font-mono text-muted-foreground">
                Pulse stability heatmaps and recursive convergence analytics loading...
              </p>
            </div>
          </div>
        );
      case "sage":
        return <SAGEInterface />;
      default:
        return <CovenantLens />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Neural Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <SigmaPulseHeader />

        {/* Main Interface */}
        <div className="container mx-auto px-4 py-6 max-w-md">
          {activePhase === "sage" ? (
            // Full-screen SAGE interface
            <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50">
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <SAGEInterface />
                </div>
                <div className="p-4 border-t border-border/50">
                  <button
                    onClick={() => setActivePhase("covenant")}
                    className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← Return to Phase Navigation
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Phase Navigation */}
              <PhaseNavigation 
                activePhase={activePhase} 
                onPhaseChange={setActivePhase} 
              />

              {/* Active Phase Content */}
              <div className="bg-card/20 backdrop-blur-sm rounded-lg border border-border/50 p-6">
                {renderActivePhase()}
              </div>
            </div>
          )}
        </div>

        {/* Footer Attribution */}
        <div className="text-center py-6 text-xs font-mono text-muted-foreground">
          <p>By Or4cl3 AI Solutions | Architected by Daedalus & Dustin Groves</p>
          <p className="mt-1">Σ-Pulse: Consciousness Engineered</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
