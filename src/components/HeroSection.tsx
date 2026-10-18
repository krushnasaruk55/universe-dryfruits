import React from "react";
import { ArrowDownRight, Compass, Sparkles } from "lucide-react";
import { getAssetPath } from "../utils/assets";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        paddingTop: "clamp(2.5rem, 5vw, 4.5rem)",
        paddingBottom: "clamp(4.5rem, 8vw, 7.5rem)",
        backgroundColor: "var(--bg-ivory)",
        borderBottom: "1px solid var(--border-swiss)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Editorial Folio Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            paddingBottom: "1.25rem",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
            borderBottom: "1px solid var(--border-swiss)",
            fontSize: "0.6875rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-cocoa-muted)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ fontWeight: 700, color: "var(--brand-forest)" }}>
              [FOLIO 01 / EDITORIAL ISSUE]
            </span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>UPPER KHARADI MAIN ROAD, WAGHOLI</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <span style={{ fontFamily: "monospace", opacity: 0.8 }}>
              18.5793° N, 73.9824° E · PUNE
            </span>
            <span className="badge-concept" style={{ padding: "0.2rem 0.5rem" }}>
              <Sparkles size={11} />
              Editorial Concept
            </span>
          </div>
        </div>

        {/* Monumental Headline: Swiss Typography */}
        <div style={{ marginBottom: "clamp(2.5rem, 5vw, 4.25rem)" }}>
          <h1
            className="font-serif hero-headline"
            style={{
              fontSize: "var(--fs-hero)",
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              color: "var(--dark-espresso)",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            <span className="reveal-line">
              <span>A WORLD OF</span>
            </span>
            <span className="reveal-line">
              <span>
                <span
                  style={{
                    fontStyle: "italic",
                    color: "var(--brand-forest)",
                    marginRight: "0.3em",
                  }}
                >
                  NATURAL
                </span>
                INDULGENCE.
              </span>
            </span>
          </h1>
        </div>

        {/* Asymmetrical Magazine Spread Layout */}
        <div
          className="hero-magazine-spread"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2rem, 4vw, 3.5rem)",
            alignItems: "flex-start",
          }}
        >
          {/* Column A: Disciplined Editorial Column */}
          <div className="hero-editorial-col" style={{ maxWidth: "480px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <span className="swiss-numeral">[01.0 / PROLOGUE]</span>
              <span style={{ color: "var(--border-strong)" }}>—</span>
              <span className="eyebrow" style={{ color: "var(--brand-forest)" }}>
                Curated Nutrition
              </span>
            </div>

            <p
              style={{
                fontSize: "var(--fs-body-lg)",
                lineHeight: 1.65,
                color: "var(--text-cocoa)",
                marginBottom: "1.75rem",
                fontWeight: 400,
              }}
            >
              Discover dry fruits and everyday favourites at Universe Dryfruits,
              Upper Kharadi Main Road, Wagholi, Pune. Thoughtfully selected nuts,
              luscious dates, and wholesome staples for daily living.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              <a href="#products" className="btn-primary">
                <span>Explore Catalogue</span>
                <ArrowDownRight size={15} />
              </a>

              <a href="#location" className="btn-secondary">
                <Compass size={15} />
                <span>Store Wayfinding</span>
              </a>
            </div>

            {/* Swiss Spec Index Box */}
            <div
              style={{
                borderTop: "1px solid var(--border-swiss)",
                paddingTop: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  fontWeight: 700,
                  color: "var(--text-cocoa-light)",
                  marginBottom: "0.85rem",
                }}
              >
                Core Harvest Profile Index
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.65rem 1.25rem",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "0.3rem" }}>
                  <span style={{ color: "var(--text-cocoa)" }}>01 / Mamra Almonds</span>
                  <span style={{ color: "var(--brand-forest)", fontWeight: 700 }}>250g–1kg</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "0.3rem" }}>
                  <span style={{ color: "var(--text-cocoa)" }}>02 / Jumbo Cashews</span>
                  <span style={{ color: "var(--brand-forest)", fontWeight: 700 }}>W180</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "0.3rem" }}>
                  <span style={{ color: "var(--text-cocoa)" }}>03 / Iranian Pistachios</span>
                  <span style={{ color: "var(--brand-forest)", fontWeight: 700 }}>In-Shell</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "0.3rem" }}>
                  <span style={{ color: "var(--text-cocoa)" }}>04 / Royal Medjool</span>
                  <span style={{ color: "var(--brand-forest)", fontWeight: 700 }}>Plump</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column B: Dominant Panoramic Master Still Life + Overlapping Tactile Macro */}
          <div
            className="hero-visual-cluster"
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            {/* Dominant Master Photography */}
            <div
              className="editorial-img-frame reveal-mask is-revealed"
              style={{
                aspectRatio: "16 / 10",
                borderRadius: "2px",
                border: "1px solid var(--border-swiss)",
                boxShadow: "0 28px 65px rgba(52, 40, 32, 0.12)",
              }}
            >
              <img
                src={getAssetPath("/images/hero.jpg")}
                alt="Dominant still life composition of raw Mamra almonds, cashews, pistachios, walnuts and Medjool dates on artisanal ceramic plate"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Dominant Image Caption */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "0.75rem",
                fontSize: "0.6875rem",
                color: "var(--text-cocoa-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span>PLATE 01 · ARTFUL DRY-FRUIT COMPOSITION</span>
              <span style={{ opacity: 0.6 }}>STUDIO DIRECTED LIGHTING</span>
            </div>

            {/* Overlapping Inset Macro Specimen (Tactile Macro Texture) */}
            <div
              className="hero-inset-specimen float-subtle"
              style={{
                position: "absolute",
                bottom: "-3.5rem",
                left: "-3rem",
                width: "min(240px, 45%)",
                backgroundColor: "var(--bg-ivory)",
                padding: "0.5rem",
                border: "1px solid var(--border-strong)",
                boxShadow: "0 18px 40px rgba(52, 40, 32, 0.16)",
                borderRadius: "2px",
                zIndex: 2,
              }}
            >
              <div
                className="editorial-img-frame"
                style={{
                  aspectRatio: "3 / 4",
                  borderRadius: "1px",
                }}
              >
                <img
                  src={getAssetPath("/images/macro_shells.jpg")}
                  alt="Extreme close-up macro texture of cracked pistachio shells and walnut ridges on raw linen"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div style={{ marginTop: "0.5rem", padding: "0.2rem 0.3rem" }}>
                <p
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--brand-forest)",
                  }}
                >
                  FIG. 1A / SPECIMEN
                </p>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--text-cocoa-muted)",
                    lineHeight: 1.3,
                    marginTop: "0.15rem",
                  }}
                >
                  Tactile kernels &amp; natural shell textures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 980px) {
          .hero-magazine-spread {
            grid-template-columns: 1fr 1.35fr !important;
          }
        }
        @media (max-width: 979px) {
          .hero-inset-specimen {
            position: static !important;
            margin-top: 1.5rem !important;
            width: 100% !important;
            max-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};
