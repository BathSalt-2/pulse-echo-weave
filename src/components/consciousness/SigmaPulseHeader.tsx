import { useState, useEffect } from "react";
import { Brain, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface BiometricData {
  heartRate: number;
  erpsScore: number;
  recursionDepth: number;
}

export function SigmaPulseHeader() {
  const [biometrics, setBiometrics] = useState<BiometricData>({
    heartRate: 72,
    erpsScore: 0.85,
    recursionDepth: 3
  });

  const [currentTime, setCurrentTime] = useState(new Date());
  const [phaseState, setPhaseState] = useState<'introspection' | 'cognition' | 'recursive'>('introspection');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate biometric fluctuations
      setBiometrics(prev => ({
        heartRate: 65 + Math.sin(Date.now() / 5000) * 10,
        erpsScore: 0.7 + Math.sin(Date.now() / 3000) * 0.2,
        recursionDepth: Math.floor(2 + Math.sin(Date.now() / 7000) * 2)
      }));
      
      // Phase state cycling
      const phase = Math.floor(Date.now() / 2000) % 3;
      const states: Array<'introspection' | 'cognition' | 'recursive'> = ['introspection', 'cognition', 'recursive'];
      setPhaseState(states[phase]);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const getPhaseColor = () => {
    switch (phaseState) {
      case 'introspection': return 'text-introspection';
      case 'cognition': return 'text-secondary';
      case 'recursive': return 'text-primary';
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Neural Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-1 h-full">
          {Array.from({ length: 60 }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "w-1 rounded-full neural-pulse",
                i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-secondary" : "bg-introspection"
              )}
              style={{ 
                height: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 p-6 text-center">
        {/* Main Logo */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="relative">
            <Brain className={cn("w-8 h-8 neural-pulse", getPhaseColor())} />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-bio-phase gamma-burst" />
          </div>
          <div>
            <h1 className="text-2xl font-mono font-bold gradient-neural bg-clip-text text-transparent">
              Σ-Pulse
            </h1>
            <p className="text-xs text-muted-foreground font-mono">
              Consciousness Engineered
            </p>
          </div>
        </div>

        {/* Real-time Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-3 border border-border/50">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-3 h-3 text-bio-phase" />
              <span className="text-xs font-mono text-muted-foreground">BioPhase</span>
            </div>
            <div className="font-mono text-sm font-bold text-bio-phase">
              {Math.round(biometrics.heartRate)} BPM
            </div>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-3 border border-border/50">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-3 h-3 text-temporal-mesh" />
              <span className="text-xs font-mono text-muted-foreground">ERPS</span>
            </div>
            <div className="font-mono text-sm font-bold text-temporal-mesh">
              {biometrics.erpsScore.toFixed(2)}
            </div>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-3 border border-border/50">
            <div className="flex items-center gap-2 mb-1">
              <Brain className="w-3 h-3 text-recursive-depth" />
              <span className="text-xs font-mono text-muted-foreground">Depth</span>
            </div>
            <div className="font-mono text-sm font-bold text-recursive-depth">
              {biometrics.recursionDepth}Σ
            </div>
          </div>
        </div>

        {/* Phase State Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/50 border border-border/50">
            <div className={cn("w-2 h-2 rounded-full phase-shift", getPhaseColor().replace('text-', 'bg-'))} />
            <span className="text-xs font-mono text-muted-foreground capitalize">
              {phaseState} State
            </span>
          </div>
        </div>

        {/* Temporal Timestamp */}
        <div className="mt-4 text-xs font-mono text-muted-foreground">
          Temporal Mesh: {currentTime.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}