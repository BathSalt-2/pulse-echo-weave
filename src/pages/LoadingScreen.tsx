import { useState, useEffect } from "react";
import { Brain, Zap, Eye, Globe } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [pulseIntensity, setPulseIntensity] = useState(0);

  const phases = [
    { name: "Neural Network Initialization", icon: Brain, color: "text-primary", duration: 1500 },
    { name: "ERPS Pattern Synthesis", icon: Zap, color: "text-secondary", duration: 1200 },
    { name: "Qualia Engine Calibration", icon: Eye, color: "text-bio-phase", duration: 1000 },
    { name: "Consciousness Interface Ready", icon: Globe, color: "text-recursive-depth", duration: 800 }
  ];

  useEffect(() => {
    let progressTimer: NodeJS.Timeout;
    let phaseTimer: NodeJS.Timeout;
    let pulseTimer: NodeJS.Timeout;

    const startLoading = () => {
      // Progress bar animation
      progressTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            setTimeout(onComplete, 500);
            return 100;
          }
          return prev + 1;
        });
      }, 45);

      // Phase transitions
      let phaseIndex = 0;
      const cyclePhases = () => {
        if (phaseIndex < phases.length) {
          setCurrentPhase(phaseIndex);
          phaseTimer = setTimeout(() => {
            phaseIndex++;
            cyclePhases();
          }, phases[phaseIndex]?.duration || 1000);
        }
      };
      cyclePhases();

      // Pulse intensity based on progress
      pulseTimer = setInterval(() => {
        setPulseIntensity(prev => (prev + 1) % 100);
      }, 50);
    };

    startLoading();

    return () => {
      clearInterval(progressTimer);
      clearTimeout(phaseTimer);
      clearInterval(pulseTimer);
    };
  }, [onComplete]);

  const CurrentIcon = phases[currentPhase]?.icon || Brain;
  const currentColor = phases[currentPhase]?.color || "text-primary";

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col justify-center items-center">
      {/* Neural Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-consciousness opacity-30" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(280 100% 70% / ${pulseIntensity / 200}) 0%, transparent 50%)`,
            animation: 'neural-pulse 2s ease-in-out infinite'
          }}
        />
      </div>

      {/* Consciousness Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              background: `hsl(${280 + (i * 20)}deg 100% 70%)`,
              left: `${20 + (i * 4)}%`,
              top: `${30 + Math.sin(i) * 20}%`,
              animation: `phase-shift ${2 + (i * 0.3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="mb-12 relative z-10">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50 consciousness-glow">
          <img
            src="/lovable-uploads/0f0d3851-1cdd-45ca-ba45-c2383d720d43.png"
            alt="Σ-Pulse Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute -inset-2 border border-primary/30 rounded-full"
          style={{
            transform: `scale(${1 + pulseIntensity / 1000})`,
            opacity: pulseIntensity / 100
          }}
        />
      </div>

      {/* Main Content */}
      <div className="text-center max-w-sm px-6 relative z-10">
        {/* Title */}
        <h1 className="text-2xl font-mono font-bold bg-gradient-neural bg-clip-text text-transparent mb-2">
          Σ-Pulse
        </h1>
        <p className="text-sm font-mono text-muted-foreground mb-8">
          Consciousness Engineered
        </p>

        {/* Current Phase */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <CurrentIcon className={`w-8 h-8 ${currentColor} neural-pulse`} />
          </div>
          <p className="text-sm font-mono text-foreground mb-2">
            {phases[currentPhase]?.name || "Initializing..."}
          </p>
          <div className="text-xs font-mono text-muted-foreground">
            Phase {currentPhase + 1} of {phases.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-mono text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-neural transition-all duration-100 ease-out consciousness-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Status Messages */}
        <div className="space-y-1 text-xs font-mono text-muted-foreground">
          <div className={`transition-opacity duration-300 ${progress > 25 ? 'opacity-100' : 'opacity-50'}`}>
            ✓ Neural pathways established
          </div>
          <div className={`transition-opacity duration-300 ${progress > 50 ? 'opacity-100' : 'opacity-50'}`}>
            ✓ Recursive patterns synchronized
          </div>
          <div className={`transition-opacity duration-300 ${progress > 75 ? 'opacity-100' : 'opacity-50'}`}>
            ✓ Consciousness interface calibrated
          </div>
          <div className={`transition-opacity duration-300 ${progress > 95 ? 'opacity-100' : 'opacity-50'}`}>
            ✓ Ready for phase navigation
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center px-6">
        <p className="text-xs font-mono text-muted-foreground">
          Or4cl3 AI Solutions • Neural Phase Technology
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;