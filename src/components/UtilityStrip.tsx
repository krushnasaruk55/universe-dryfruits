import React from "react";
import { MapPin, ShieldCheck } from "lucide-react";
import { businessConfig } from "../data/storeData";

interface UtilityStripProps {
  onOpenDataModel: () => void;
}

export const UtilityStrip: React.FC<UtilityStripProps> = ({ onOpenDataModel }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--brand-forest)",
        color: "var(--text-ivory)",
        borderBottom: "1px solid rgba(198, 165, 104, 0.25)",
        fontSize: "0.6875rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        padding: "0.45rem var(--container-pad)",
        fontWeight: 500,
        position: "relative",
        zIndex: 100,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Brand & Location */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ fontWeight: 700, letterSpacing: "0.18em", color: "var(--accent-gold)" }}>
            {businessConfig.name}
          </span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", opacity: 0.9 }}>
            <MapPin size={12} strokeWidth={2.2} style={{ color: "var(--accent-gold)" }} />
            UPPER KHARADI ROAD · WAGHOLI, PUNE
          </span>
        </div>

        {/* Right: Concept & Verification Transparency Link */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={onOpenDataModel}
            style={{
              color: "var(--accent-gold-soft)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              background: "rgba(255, 255, 255, 0.08)",
              padding: "0.2rem 0.55rem",
              borderRadius: "2px",
              border: "1px solid rgba(198, 165, 104, 0.2)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              transition: "all 0.2s ease",
            }}
            title="Inspect verified vs researched data in the internal model"
          >
            <ShieldCheck size={11} />
            INDEPENDENT STOREFRONT CONCEPT · DATA LOG
          </button>
        </div>
      </div>
    </div>
  );
};
