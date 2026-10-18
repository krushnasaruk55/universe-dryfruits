import React from "react";
import { Gift, ArrowRight } from "lucide-react";

interface GiftCollectionProps {
  onOpenEnquiry: () => void;
}

export const GiftCollection: React.FC<GiftCollectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section
      id="gifting"
      style={{
        backgroundColor: "var(--bg-ivory)",
        paddingTop: "clamp(5rem, 8vw, 8rem)",
        paddingBottom: "clamp(5rem, 8vw, 8rem)",
        borderBottom: "1px solid var(--border-swiss)",
      }}
    >
      <div className="container">
        {/* Folio Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--border-swiss)",
            paddingBottom: "0.85rem",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span className="swiss-numeral">[08.0 / BESPOKE]</span>
            <span style={{ color: "var(--border-strong)" }}>·</span>
            <span className="eyebrow" style={{ color: "var(--brand-forest)" }}>
              FESTIVE HAMPER CURATION
            </span>
          </div>

          <span className="badge-concept">
            <Gift size={11} />
            Proposed Collection Preview
          </span>
        </div>

        {/* Spread Layout */}
        <div
          className="gift-editorial-spread"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2.5rem, 5vw, 4.5rem)",
            alignItems: "center",
          }}
        >
          {/* Left: Gift Box Photography */}
          <div style={{ position: "relative", order: 2 }}>
            <div
              className="editorial-img-frame"
              style={{
                aspectRatio: "4 / 3",
                borderRadius: "2px",
                border: "1px solid var(--border-swiss)",
                boxShadow: "0 22px 55px rgba(52, 40, 32, 0.12)",
              }}
            >
              <img
                src="/images/gift_box.jpg"
                alt="Artisanal dry fruit wooden chest with whole almonds, pistachios, cashews, and Medjool dates tied with emerald ribbon"
                loading="eager"
                decoding="async"
              />
            </div>

            <div
              style={{
                marginTop: "0.85rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "0.75rem",
                color: "var(--text-cocoa-light)",
              }}
            >
              <span>Walnut chest with bespoke four-compartment dry fruit curation</span>
              <span style={{ fontStyle: "italic" }}>Concept Specimen</span>
            </div>
          </div>

          {/* Right: Editorial Typography */}
          <div style={{ maxWidth: "560px", order: 1 }}>
            <h2
              className="font-serif"
              style={{
                fontSize: "var(--fs-h1)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                color: "var(--dark-espresso)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                fontWeight: 400,
              }}
            >
              THOUGHTFULLY
              <br />
              <span style={{ fontStyle: "italic", color: "var(--brand-forest)" }}>
                CHOSEN.
              </span>
              <br />
              BEAUTIFULLY
              <br />
              PRESENTED.
            </h2>

            <p
              style={{
                fontSize: "var(--fs-body-lg)",
                lineHeight: 1.75,
                color: "var(--text-cocoa-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Gifting in Indian celebration carries heartfelt wishes of wellness,
              auspiciousness, and lasting bonds. We envision bespoke dry-fruit collections
              presented in handcrafted walnut partitions and sustainable emerald ribbons.
            </p>

            <div
              style={{
                padding: "0.85rem 1.15rem",
                backgroundColor: "var(--bg-pistachio)",
                borderLeft: "3px solid var(--accent-gold)",
                borderRadius: "2px",
                fontSize: "0.8125rem",
                color: "var(--text-cocoa-muted)",
                lineHeight: 1.55,
                marginBottom: "2rem",
              }}
            >
              <strong style={{ color: "var(--text-cocoa)" }}>Retail Status Note:</strong> Dedicated gift hamper assemblies are
              currently in concept preview and not yet confirmed as active shelf inventory.
              Enquiries help gauge neighborhood interest for Diwali and festive seasons.
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <button onClick={onOpenEnquiry} className="btn-primary">
                <span>Enquire About Festive Gifting</span>
                <ArrowRight size={15} />
              </button>

              <a href="#location" className="link-editorial" style={{ color: "var(--brand-forest)" }}>
                <span>Store Visit Details</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 920px) {
          .gift-editorial-spread {
            grid-template-columns: 1.1fr 1fr !important;
          }
          .gift-editorial-spread > div:first-child {
            order: 1 !important;
          }
          .gift-editorial-spread > div:last-child {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
};
