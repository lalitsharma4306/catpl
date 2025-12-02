export function AnimatedBackground() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 overflow-hidden">
      {/* Background with code and network effect */}
      <div className="fixed top-20 inset-0 z-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1a2e] to-[#16213e]"></div>

        {/* Code background - left side */}
        <div className="absolute left-0 top-0 w-1/3 h-full opacity-500 text-[#00d4ff] font-mono text-xs leading-relaxed overflow-hidden">
          <div className="whitespace-pre-wrap break-words p-8 animate-codeFlow">
            {`function buildFuture() {
  const innovation = createConnection();
  const network = establishLink(innovation);
  
  while(success) {
    iterate(process);
    enhance(quality);
    deploy(solution);
  }
  
  return transformWorld();
}

class Developer {
  constructor() {
    this.passion = Infinity;
    this.creativity = unlocked;
    this.impact = measurable;
  }
  
  build() {
    return this.createMagic();
  }
}

const network = {
  nodes: ['innovation', 'collaboration'],
  edges: ['trust', 'growth'],
  protocol: 'secure',
  scale: 'global'
};`}
          </div>
        </div>

        {/* Network visualization - right side */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-400">
          {/* Hexagonal network nodes with connections */}
          <svg
            className="w-full h-full"
            viewBox="0 0 600 600"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Connection lines */}
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff006e" stopOpacity="0.2" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Animated Network connections */}
            <line
              x1="150"
              y1="100"
              x2="350"
              y2="200"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              className="animate-lineFlow"
            />
            <line
              x1="350"
              y1="200"
              x2="450"
              y2="350"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              className="animate-lineFlow animation-delay-1000"
            />
            <line
              x1="450"
              y1="350"
              x2="300"
              y2="500"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              className="animate-lineFlow animation-delay-2000"
            />
            <line
              x1="300"
              y1="500"
              x2="150"
              y2="100"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              className="animate-lineFlow animation-delay-3000"
            />
            <line
              x1="150"
              y1="100"
              x2="450"
              y2="350"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              opacity="0.4"
              filter="url(#glow)"
              className="animate-lineFlow animation-delay-1500"
            />
            <line
              x1="350"
              y1="200"
              x2="300"
              y2="500"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              opacity="0.4"
              filter="url(#glow)"
              className="animate-lineFlow animation-delay-2500"
            />

            {/* Hexagonal nodes */}
            <g filter="url(#glow)">
              {/* Node 1 */}
              <circle
                cx="150"
                cy="100"
                r="8"
                fill="#00d4ff"
                opacity="30"
                className="animate-pulse"
              />
              <polygon
                points="150,65 180,80 180,120 150,135 120,120 120,80"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="2"
                opacity="30"
                className="animate-pulse animation-delay-500"
              />

              {/* Node 2 */}
              <circle
                cx="350"
                cy="200"
                r="8"
                fill="#00d4ff"
                opacity="30"
                className="animate-pulse animation-delay-700"
              />
              <polygon
                points="350,165 380,180 380,220 350,235 320,220 320,180"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="2"
                opacity="30"
                className="animate-pulse animation-delay-1200"
              />

              {/* Node 3 */}
              <circle
                cx="450"
                cy="350"
                r="8"
                fill="#ff006e"
                opacity="30"
                className="animate-pulse animation-delay-900"
              />
              <polygon
                points="450,315 480,330 480,370 450,385 420,370 420,330"
                fill="none"
                stroke="#ff006e"
                strokeWidth="2"
                opacity="30"
                className="animate-pulse animation-delay-1400"
              />

              {/* Node 4 */}
              <circle
                cx="300"
                cy="500"
                r="8"
                fill="#00d4ff"
                opacity="30"
                className="animate-pulse animation-delay-1100"
              />
              <polygon
                points="300,465 330,480 330,520 300,535 270,520 270,480"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="2"
                opacity="30"
                className="animate-pulse animation-delay-1600"
              />

              {/* Node 5 */}
              <circle
                cx="100"
                cy="400"
                r="8"
                fill="#00d4ff"
                opacity="0.8"
                className="animate-pulse animation-delay-600"
              />
              <polygon
                points="100,365 130,380 130,420 100,435 70,420 70,380"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="2"
                opacity="0.6"
                className="animate-pulse animation-delay-1100"
              />
            </g>

            {/* Glowing particles - animated */}
            <circle
              cx="200"
              cy="150"
              r="3"
              fill="#00d4ff"
              opacity="0.6"
              className="animate-bounce"
            />
            <circle
              cx="400"
              cy="250"
              r="3"
              fill="#00d4ff"
              opacity="0.6"
              className="animate-bounce animation-delay-300"
            />
            <circle
              cx="480"
              cy="420"
              r="3"
              fill="#ff006e"
              opacity="0.6"
              className="animate-bounce animation-delay-600"
            />
            <circle
              cx="280"
              cy="580"
              r="3"
              fill="#00d4ff"
              opacity="0.6"
              className="animate-bounce animation-delay-900"
            />
          </svg>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60"></div>
      </div>
    </div> 
  );
}
