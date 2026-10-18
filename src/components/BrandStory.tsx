import React from "react";
import { MapPin, Sparkles } from "lucide-react";
import { getAssetPath } from "../utils/assets";

export const BrandStory: React.FC = () => {
  return (
    <section
      id="story"
      style={{
        backgroundColor: "var(--brand-forest)",
        color: "var(--text-ivory)",
        paddingTop: "clamp(5.5rem, 9vw, 9rem)",
        paddingBottom: "clamp(5.5rem, 9vw, 9rem)",
        position: "relative",
        borderBottom: "1px solid var(--border-dark-subtle)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Top Folio Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--border-dark-subtle)",
            paddingBottom: "1.25rem",
            marginBottom: "clamp(2.5rem, 5vw, 4.5rem)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontFamily: "monospace", color: "var(--accent-gold)", fontSize: "0.75rem" }}>
              [FOLIO 07 / MANIFESTO]
            </span>
            <span style={{ color: "rgba(246, 241, 232, 0.3)" }}>·</span>
            <span className="eyebrow eyebrow-gold">BRAND ETHOS &amp; CRAFT</span>
          </div>

          <span className="badge-concept badge-dark">
            <Sparkles size={11} />
            Creative Art Direction
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div
          className="story-magazine-spread"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2.5rem, 6vw, 5rem)",
            alignItems: "center",
          }}
        >
          {/* Left Column: Monumental Headline & Narrative */}
          <div style={{ maxWidth: "600px" }}>
            <h2
              className="font-serif"
              style={{
                fontSize: "var(--fs-hero)",
                lineHeight: 0.94,
                letterSpacing: "-0.025em",
                color: "var(--text-ivory)",
                textTransform: "uppercase",
                marginBottom: "2rem",
                fontWeight: 400,
              }}
            >
              GOOD THINGS
              <br />
              <span style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>
                DESERVE
              </span>
              <br />
              GOOD DESIGN.
            </h2>

            <p
              style={{
                fontSize: "var(--fs-body-lg)",
                lineHeight: 1.75,
                color: "var(--text-ivory-muted)",
                marginBottom: "1.5rem",
                fontWeight: 400,
              }}
            >
              Universe Dryfruits is rooted on Upper Kharadi Main Road in Wagholi,
              Pune — a neighborhood retailer committed to presenting essential dry fruits,
              nuts, and dates with care and quiet elegance.
            </p>

            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: "rgba(246, 241, 232, 0.75)",
                marginBottom: "2.5rem",
              }}
            >
              We believe everyday dry fruits are not merely shelf commodities; they are
              nourishing staples worthy of thoughtful grading, clean presentation, and
              respect for the customer who brings them home.
            </p>

            {/* Swiss Metadata Matrix */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                borderTop: "1px solid var(--border-dark-subtle)",
                paddingTop: "1.5rem",
                fontSize: "0.75rem",
              }}
            >
              <div>
                <p style={{ color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, fontSize: "0.6875rem" }}>
                  Location Corridors
                </p>
                <p style={{ color: "var(--text-ivory)", marginTop: "0.25rem" }}>
                  2/5, Upper Kharadi Main Road, Wagholi, Pune
                </p>
              </div>

              <div>
                <p style={{ color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, fontSize: "0.6875rem" }}>
                  Storefront Ethos
                </p>
                <p style={{ color: "var(--text-ivory)", marginTop: "0.25rem" }}>
                  Tactile curation, unhurried customer service
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Full-height Dark Slate Still Life with Overlapping Inset */}
          <div style={{ position: "relative" }}>
            <div
              className="editorial-img-frame"
              style={{
                aspectRatio: "4 / 3",
                borderRadius: "2px",
                border: "1px solid var(--border-gold)",
                boxShadow: "0 28px 70px rgba(0, 0, 0, 0.4)",
              }}
            >
              <img
                src={getAssetPath("/images/brand_story.jpg")}
                alt="Art-directed dark slate culinary still life with walnuts, pistachios, almonds, and burnished brass scoop"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Overlapping Specimen Badge */}
            <div
              className="float-subtle"
              style={{
                position: "absolute",
                bottom: "-2.5rem",
                left: "-2.5rem",
                backgroundColor: "var(--dark-espresso)",
                border: "1px solid var(--border-gold)",
                padding: "1rem 1.4rem",
                borderRadius: "2px",
                maxWidth: "280px",
                boxShadow: "0 18px 45px rgba(0, 0, 0, 0.35)",
              }}
            >
              <p
                style={{
                  fontSize: "0.6875rem",
                  color: "var(--accent-gold)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                STILL LIFE · DARK SLATE
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-ivory-muted)",
                  marginTop: "0.25rem",
                  lineHeight: 1.4,
                }}
              >
                Burnished brass, deep forest slate, and unadulterated whole nuts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .story-magazine-spread {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
        @media (max-width: 959px) {
          .story-magazine-spread > div:last-child > div:last-child {
            position: static !important;
            margin-top: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
