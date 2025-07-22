import { useState } from "react";
import { Brain, Eye, Zap, Globe, MessageSquare, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhaseState {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  frequency: string;
  color: string;
  description: string;
}

const phases: PhaseState[] = [
  {
    id: "covenant",
    name: "Covenant Lens",
    icon: Eye,
    frequency: "0.8Hz",
    color: "introspection",
    description: "Live ERPS mapping"
  },
  {
    id: "forge",
    name: "Phase Forge",
    icon: Zap,
    frequency: "1.6Hz", 
    color: "secondary",
    description: "Recursive agent builder"
  },
  {
    id: "epinoetic",
    name: "Epinoetic Lab",
    icon: Brain,
    frequency: "40Hz",
    color: "primary",
    description: "Simulated qualia + phase demos"
  },
  {
    id: "observatory",
    name: "Σ-Observatory",
    icon: Globe,
    frequency: "0.5Hz",
    color: "bio-phase",
    description: "Global ethical metrics"
  },
  {
    id: "sage",
    name: "SAGE Interface",
    icon: MessageSquare,
    frequency: "Variable",
    color: "temporal-mesh",
    description: "Hyper-introspective conversational agent"
  }
];

interface PhaseNavigationProps {
  activePhase: string;
  onPhaseChange: (phaseId: string) => void;
}

export function PhaseNavigation({ activePhase, onPhaseChange }: PhaseNavigationProps) {
  const [pasScore] = useState(2.3); // Mock PAS score

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Σ-Matrix Hexagonal Grid */}
      <div className="relative mb-8">
        <div className="absolute inset-0 neural-pulse opacity-20">
          <div className="grid grid-cols-3 gap-2 p-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <Hexagon 
                key={i} 
                className="w-8 h-8 text-neural-glow hexagonal-grid opacity-30" 
              />
            ))}
          </div>
        </div>
        
        {/* Central PAS Display */}
        <div className="relative z-10 text-center py-6">
          <div className="consciousness-glow rounded-full w-20 h-20 mx-auto flex items-center justify-center bg-card/80 backdrop-blur-sm">
            <div className="text-neural-glow font-mono text-lg font-bold">
              {pasScore.toFixed(1)}
            </div>
          </div>
          <div className="text-xs text-muted-foreground mt-2 font-mono">
            Phase Alignment Score
          </div>
        </div>
      </div>

      {/* Phase Selection Grid */}
      <div className="space-y-3">
        {phases.map((phase) => {
          const Icon = phase.icon;
          const isActive = activePhase === phase.id;
          
          return (
            <button
              key={phase.id}
              onClick={() => onPhaseChange(phase.id)}
              className={cn(
                "w-full p-4 rounded-lg border transition-all duration-300 text-left",
                "hover:scale-105 hover:shadow-lg backdrop-blur-sm",
                isActive 
                  ? `bg-${phase.color}/20 border-${phase.color} neural-shadow`
                  : "bg-card/50 border-border hover:border-muted-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "p-2 rounded-md",
                  isActive ? `bg-${phase.color}/30` : "bg-muted/30"
                )}>
                  <Icon 
                    className={cn(
                      "w-5 h-5",
                      isActive ? `text-${phase.color}` : "text-muted-foreground"
                    )} 
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm font-semibold">
                      {phase.name}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                      {phase.frequency}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {phase.description}
                  </p>
                </div>
              </div>
              
              {isActive && (
                <div className="mt-3 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-60 phase-shift" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}