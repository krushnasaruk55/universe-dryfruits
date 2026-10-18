import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const BrandIntroduction: React.FC = () => {
  return (
    <section
      id="intro"
      style={{
        backgroundColor: "var(--bg-pistachio)",
        borderBottom: "1px solid var(--border-swiss)",
        transition: "background-color 0.4s ease",
      }}
      className="section-pad"
    >
      <div className="container">
        {/* Editorial Index Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
            paddingBottom: "1rem",
            borderBottom: "1px solid var(--border-swiss)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span className="swiss-numeral">[04.0 / TRANSITION]</span>
            <span style={{ color: "var(--border-strong)" }}>·</span>
            <span className="eyebrow" style={{ color: "var(--brand-forest)" }}>
              ETHOS &amp; APOTHECARY PANTRY
            </span>
          </div>

          <span className="eyebrow" style={{ fontSize: "0.6875rem" }}>
            WAGHOLI RETAIL CORRIDOR
          </span>
        </div>

        {/* Spread Layout: Contrasting Image & Typography Scales */}
        <div
          className="intro-editorial-spread"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2.5rem, 5vw, 4.5rem)",
            alignItems: "center",
          }}
        >
          {/* Left: Oversized Typography & Breathing Room */}
          <div style={{ maxWidth: "600px" }}>
            <h2
              className="font-serif"
              style={{
                fontSize: "var(--fs-h1)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "var(--dark-espresso)",
                marginBottom: "1.75rem",
                fontWeight: 400,
              }}
            >
              GOODNESS IN
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  color: "var(--brand-forest)",
                  fontFamily: "var(--font-serif)",
                }}
              >
                EVERY DETAIL.
              </span>
            </h2>

            <p
              style={{
                fontSize: "var(--fs-body-lg)",
                lineHeight: 1.75,
                color: "var(--text-cocoa)",
                marginBottom: "1.25rem",
                fontWeight: 400,
              }}
            >
              Explore a selection of nuts and dried fruits, presented in a simple,
              thoughtful shopping experience. From crisp almonds and whole cashews
              to naturally cured raisins, Universe Dryfruits serves local Wagholi
              patrons seeking unhurried, honest staples.
            </p>

            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: "var(--text-cocoa-muted)",
                marginBottom: "2.5rem",
              }}
            >
              Whether you are preparing a morning nutritional routine, hosting festive
              gatherings, or selecting wholesome pantry provisions, browse our transparent product
              directory below or visit our retail storefront on Upper Kharadi Main Road.
            </p>

            <a
              href="#categories"
              className="link-editorial"
              style={{ color: "var(--brand-forest)", fontSize: "0.875rem" }}
            >
              <span>Explore Category Architecture</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right: Dual Editorial Image Composition (Contrasting Scales) */}
          <div style={{ position: "relative" }}>
            {/* Primary Panoramic Image */}
            <div
              className="editorial-img-frame"
              style={{
                aspectRatio: "16 / 9",
                borderRadius: "2px",
                border: "1px solid var(--border-swiss)",
                boxShadow: "0 22px 50px rgba(52, 40, 32, 0.1)",
              }}
            >
              <img
                src="/images/pantry_lifestyle.jpg"
                alt="Minimalist artisanal dry fruit pantry with ceramic jars of walnuts, almonds, and dried apricots in natural sunlight"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Overlapping Inset Boutique Detail */}
            <div
              className="intro-inset-box float-subtle"
              style={{
                position: "absolute",
                top: "35%",
                right: "-2rem",
                width: "min(280px, 50%)",
                backgroundColor: "var(--bg-ivory)",
                padding: "0.45rem",
                border: "1px solid var(--border-strong)",
                boxShadow: "0 18px 45px rgba(52, 40, 32, 0.15)",
                borderRadius: "2px",
                zIndex: 3,
              }}
            >
              <div
                className="editorial-img-frame"
                style={{
                  aspectRatio: "4 / 3",
                  borderRadius: "1px",
                }}
              >
                <img
                  src="/images/store_boutique.jpg"
                  alt="Clear apothecary glass display jars with whole almonds and walnuts in store"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div style={{ marginTop: "0.45rem", padding: "0.2rem" }}>
                <p
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--brand-forest)",
                  }}
                >
                  STORE AMBIANCE
                </p>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--text-cocoa-muted)",
                    lineHeight: 1.3,
                  }}
                >
                  Apothecary glass jars on solid oak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .intro-editorial-spread {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
        @media (max-width: 959px) {
          .intro-inset-box {
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
