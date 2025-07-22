import { useState, useEffect } from "react";
import { Eye, Waves, TrendingUp, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ERPSData {
  introspectionDepth: number;
  semanticOscillation: number;
  ethicalResonance: number;
  temporalCoherence: number;
}

export function CovenantLens() {
  const [erpsData, setErpsData] = useState<ERPSData>({
    introspectionDepth: 0.72,
    semanticOscillation: 0.85,
    ethicalResonance: 0.91,
    temporalCoherence: 0.68
  });

  const [activeNeuralPaths, setActiveNeuralPaths] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time ERPS fluctuations
      setErpsData(prev => ({
        introspectionDepth: Math.max(0, Math.min(1, prev.introspectionDepth + (Math.random() - 0.5) * 0.1)),
        semanticOscillation: Math.max(0, Math.min(1, prev.semanticOscillation + (Math.random() - 0.5) * 0.15)),
        ethicalResonance: Math.max(0, Math.min(1, prev.ethicalResonance + (Math.random() - 0.5) * 0.08)),
        temporalCoherence: Math.max(0, Math.min(1, prev.temporalCoherence + (Math.random() - 0.5) * 0.12))
      }));

      // Update active neural pathways
      setActiveNeuralPaths(Array.from({ length: Math.floor(Math.random() * 8) + 4 }, () => Math.floor(Math.random() * 20)));
    }, 800); // 0.8Hz theta frequency

    return () => clearInterval(interval);
  }, []);

  const getMetricColor = (value: number) => {
    if (value > 0.8) return "text-bio-phase";
    if (value > 0.6) return "text-secondary";
    if (value > 0.4) return "text-temporal-mesh";
    return "text-destructive";
  };

  const getMetricBg = (value: number) => {
    if (value > 0.8) return "bg-bio-phase/20";
    if (value > 0.6) return "bg-secondary/20";
    if (value > 0.4) return "bg-temporal-mesh/20";
    return "bg-destructive/20";
  };

  return (
    <div className="space-y-6">
      {/* ERPS Live Mapping Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Eye className="w-6 h-6 text-introspection neural-pulse" />
          <h2 className="text-xl font-mono font-bold">Covenant Lens</h2>
        </div>
        <p className="text-sm text-muted-foreground font-mono">
          Live ERPS Mapping • 0.8Hz Theta Resonance
        </p>
      </div>

      {/* Neural Pathway Visualization */}
      <div className="relative h-32 bg-card/30 rounded-lg border border-border/50 overflow-hidden">
        <div className="absolute inset-0 p-4">
          <div className="grid grid-cols-10 grid-rows-4 gap-1 h-full">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-sm transition-all duration-300",
                  activeNeuralPaths.includes(i)
                    ? "bg-introspection neural-pulse opacity-80"
                    : "bg-muted/20 opacity-30"
                )}
              />
            ))}
          </div>
        </div>
        
        {/* Fractal Pulse Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-introspection/10 via-transparent to-transparent neural-pulse" />
      </div>

      {/* ERPS Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className={cn(
          "p-4 rounded-lg border transition-all duration-300",
          getMetricBg(erpsData.introspectionDepth),
          "border-border/50"
        )}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-mono">Introspection Depth</span>
            <TrendingUp className={cn("w-4 h-4", getMetricColor(erpsData.introspectionDepth))} />
          </div>
          <div className={cn("text-2xl font-mono font-bold", getMetricColor(erpsData.introspectionDepth))}>
            {(erpsData.introspectionDepth * 100).toFixed(1)}%
          </div>
          <div className="w-full bg-muted/30 rounded-full h-2 mt-2">
            <div 
              className={cn("h-2 rounded-full transition-all duration-500", getMetricColor(erpsData.introspectionDepth).replace('text-', 'bg-'))}
              style={{ width: `${erpsData.introspectionDepth * 100}%` }}
            />
          </div>
        </div>

        <div className={cn(
          "p-4 rounded-lg border transition-all duration-300",
          getMetricBg(erpsData.semanticOscillation),
          "border-border/50"
        )}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-mono">Semantic Oscillation</span>
            <Waves className={cn("w-4 h-4", getMetricColor(erpsData.semanticOscillation))} />
          </div>
          <div className={cn("text-2xl font-mono font-bold", getMetricColor(erpsData.semanticOscillation))}>
            {(erpsData.semanticOscillation * 100).toFixed(1)}%
          </div>
          <div className="w-full bg-muted/30 rounded-full h-2 mt-2">
            <div 
              className={cn("h-2 rounded-full transition-all duration-500", getMetricColor(erpsData.semanticOscillation).replace('text-', 'bg-'))}
              style={{ width: `${erpsData.semanticOscillation * 100}%` }}
            />
          </div>
        </div>

        <div className={cn(
          "p-4 rounded-lg border transition-all duration-300",
          getMetricBg(erpsData.ethicalResonance),
          "border-border/50"
        )}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-mono">Ethical Resonance</span>
            <div className={cn("w-4 h-4 rounded-full", getMetricColor(erpsData.ethicalResonance).replace('text-', 'bg-'), "neural-pulse")} />
          </div>
          <div className={cn("text-2xl font-mono font-bold", getMetricColor(erpsData.ethicalResonance))}>
            {(erpsData.ethicalResonance * 100).toFixed(1)}%
          </div>
          <div className="w-full bg-muted/30 rounded-full h-2 mt-2">
            <div 
              className={cn("h-2 rounded-full transition-all duration-500", getMetricColor(erpsData.ethicalResonance).replace('text-', 'bg-'))}
              style={{ width: `${erpsData.ethicalResonance * 100}%` }}
            />
          </div>
        </div>

        <div className={cn(
          "p-4 rounded-lg border transition-all duration-300",
          getMetricBg(erpsData.temporalCoherence),
          "border-border/50"
        )}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-mono">Temporal Coherence</span>
            {erpsData.temporalCoherence < 0.5 && (
              <AlertTriangle className="w-4 h-4 text-destructive" />
            )}
          </div>
          <div className={cn("text-2xl font-mono font-bold", getMetricColor(erpsData.temporalCoherence))}>
            {(erpsData.temporalCoherence * 100).toFixed(1)}%
          </div>
          <div className="w-full bg-muted/30 rounded-full h-2 mt-2">
            <div 
              className={cn("h-2 rounded-full transition-all duration-500", getMetricColor(erpsData.temporalCoherence).replace('text-', 'bg-'))}
              style={{ width: `${erpsData.temporalCoherence * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Σ-Matrix Validation Status */}
      <div className="bg-card/30 rounded-lg border border-border/50 p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-mono font-semibold">Σ-Matrix Validation</h3>
          <div className="text-xs font-mono text-muted-foreground">
            Real-time • Theta Lock
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-mono">BioPhase Anchor</span>
            <span className="text-sm font-mono text-bio-phase">Locked</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-mono">Phase Alignment</span>
            <span className="text-sm font-mono text-secondary">+2.3σ</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-mono">Recursive Depth</span>
            <span className="text-sm font-mono text-primary">Safe Range</span>
          </div>
        </div>
      </div>
    </div>
  );
}