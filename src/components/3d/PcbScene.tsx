import React from "react";

interface PcbSceneProps {
  hoveredService: number | null;
  onHoverService: (index: number | null) => void;
}

export const PcbScene: React.FC<PcbSceneProps> = ({ hoveredService, onHoverService }) => {
  const servicePositions = [
    { x: 80, y: 80, label: "DESIGN" },
    { x: 240, y: 80, label: "SUBSTATION" },
    { x: 400, y: 80, label: "HT/LT" },
    { x: 80, y: 220, label: "PANELS" },
    { x: 240, y: 220, label: "EMERGENCY" },
    { x: 400, y: 220, label: "COMMISSION" },
  ];

  return (
    <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center p-4">
      <svg
        viewBox="0 0 520 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-2xl"
        style={{ filter: "drop-shadow(0 0 20px rgba(232,119,34,0.15))" }}
      >
        <defs>
          <pattern id="pcb-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(232,119,34,0.06)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="520" height="320" fill="url(#pcb-grid)" />
        <rect x="20" y="20" width="480" height="280" rx="6"
          fill="none" stroke="rgba(232,119,34,0.3)" strokeWidth="1.5" strokeDasharray="4 2" />

        {servicePositions.map((pos, i) => (
          <line key={i}
            x1={pos.x + 30} y1={pos.y + 20}
            x2={260} y2={150}
            stroke={hoveredService === i ? "#f59e0b" : "rgba(0,212,255,0.2)"}
            strokeWidth={hoveredService === i ? 1.5 : 0.8}
            strokeDasharray="4 3"
            style={{ transition: "stroke 0.3s ease" }}
          />
        ))}

        <rect x="220" y="120" width="80" height="60" rx="4"
          fill="#0F3460" stroke="#f59e0b" strokeWidth="1.5" />
        <rect x="230" y="130" width="60" height="40" rx="2"
          fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
        <text x="260" y="155" textAnchor="middle"
          fill="#00D4FF" fontSize="7" fontFamily="monospace" letterSpacing="1">CPU</text>

        {[230,245,260,275,290].map((x, i) => (
          <circle key={i} cx={x} cy={118} r="2.5" fill="#f59e0b" opacity="0.7" />
        ))}
        {[230,245,260,275,290].map((x, i) => (
          <circle key={i} cx={x} cy={182} r="2.5" fill="#f59e0b" opacity="0.7" />
        ))}

        {servicePositions.map((pos, i) => (
          <g key={i} style={{ cursor: "pointer" }}
            onMouseEnter={() => onHoverService(i)}
            onMouseLeave={() => onHoverService(null)}
          >
            <rect x={pos.x - 10} y={pos.y} width="80" height="40" rx="4"
              fill={hoveredService === i ? "rgba(245,158,11,0.15)" : "rgba(15,52,96,0.6)"}
              stroke={hoveredService === i ? "#f59e0b" : "rgba(255,255,255,0.08)"}
              strokeWidth={hoveredService === i ? 1.5 : 1}
              style={{ transition: "all 0.3s ease" }}
            />
            {[0,12,24,36].map((offset, pi) => (
              <rect key={pi} x={pos.x - 10 + offset + 8} y={pos.y + 40}
                width="4" height="6" rx="1" fill="rgba(203,213,225,0.5)" />
            ))}
            <circle cx={pos.x + 58} cy={pos.y + 8} r="3"
              fill={hoveredService === i ? "#39FF14" : "#00D4FF"}
              style={{ transition: "fill 0.3s ease" }}
            />
            <text x={pos.x + 30} y={pos.y + 24} textAnchor="middle"
              fill={hoveredService === i ? "#f59e0b" : "rgba(255,255,255,0.5)"}
              fontSize="6.5" fontFamily="monospace" letterSpacing="0.5"
              style={{ transition: "fill 0.3s ease" }}>
              {pos.label}
            </text>
          </g>
        ))}

        <path d="M 30 30 L 30 45 M 30 30 L 45 30" stroke="rgba(232,119,34,0.4)" strokeWidth="1.5" fill="none" />
        <path d="M 490 30 L 490 45 M 490 30 L 475 30" stroke="rgba(232,119,34,0.4)" strokeWidth="1.5" fill="none" />
        <path d="M 30 290 L 30 275 M 30 290 L 45 290" stroke="rgba(232,119,34,0.4)" strokeWidth="1.5" fill="none" />
        <path d="M 490 290 L 490 275 M 490 290 L 475 290" stroke="rgba(232,119,34,0.4)" strokeWidth="1.5" fill="none" />
        <text x="30" y="15" fill="rgba(232,119,34,0.5)" fontSize="6" fontFamily="monospace" letterSpacing="2">
          PCB: DAS-EPC-CONTROL-v2.1
        </text>
      </svg>
    </div>
  );
};

export default PcbScene;
