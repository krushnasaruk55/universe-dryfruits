import React from "react";
import { Star, ExternalLink, ShieldAlert } from "lucide-react";
import { businessConfig } from "../data/storeData";

export const CustomerFeedback: React.FC = () => {
  return (
    <section
      id="feedback"
      style={{
        backgroundColor: "var(--bg-pistachio)",
        paddingTop: "clamp(4rem, 7vw, 6.5rem)",
        paddingBottom: "clamp(4rem, 7vw, 6.5rem)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container" style={{ maxWidth: "1000px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <span className="eyebrow" style={{ color: "var(--brand-forest)" }}>
              09 · NEIGHBORHOOD REPUTATION
            </span>
            <span style={{ color: "var(--border-strong)" }}>|</span>
            <span className="badge-concept">Google Maps Listing</span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: "var(--fs-h1)",
              lineHeight: 1.05,
              color: "var(--dark-espresso)",
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            COMMUNITY &amp;
            <br />
            <span style={{ fontStyle: "italic", color: "var(--brand-forest)" }}>
              AUTHENTIC FEEDBACK.
            </span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-cocoa-muted)",
              maxWidth: "600px",
              margin: "1.25rem auto 0 auto",
              lineHeight: 1.6,
            }}
          >
            We adhere to strict transparency standards. Rather than presenting fabricated
            reviews or simulated testimonials, read authentic community feedback directly
            on Google Maps.
          </p>
        </div>

        {/* Reputational Summary Card */}
        <div
          style={{
            backgroundColor: "var(--bg-ivory)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "4px",
            padding: "clamp(2rem, 4vw, 3rem)",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            boxShadow: "0 14px 35px rgba(52, 40, 32, 0.06)",
          }}
          className="feedback-card"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Stars row */}
            <div style={{ display: "flex", gap: "0.3rem", color: "var(--accent-gold)", marginBottom: "1rem" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={22} fill="var(--accent-gold)" />
              ))}
            </div>

            {/* Rating figure */}
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(2.75rem, 5vw, 4rem)",
                lineHeight: 1,
                color: "var(--brand-forest)",
                fontWeight: 400,
              }}
            >
              4.9
              <span
                style={{
                  fontSize: "1.25rem",
                  color: "var(--text-cocoa-light)",
                  fontFamily: "var(--font-sans)",
                  marginLeft: "0.35rem",
                }}
              >
                / 5.0
              </span>
            </p>

            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--text-cocoa)",
                marginTop: "0.5rem",
                letterSpacing: "0.04em",
              }}
            >
              Previously Recorded on Google Maps ({businessConfig.researchedRating.reviewCount} Reviews)
            </p>

            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-cocoa-muted)",
                maxWidth: "520px",
                marginTop: "0.75rem",
                lineHeight: 1.5,
              }}
            >
              Customers on Upper Kharadi Main Road frequently visit for festive purchases,
              daily snack nuts, and personalized dry-fruit requests.
            </p>

            {/* Direct Link Action */}
            <div style={{ marginTop: "1.75rem" }}>
              <a
                href={businessConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  backgroundColor: "var(--brand-forest)",
                  padding: "0.85rem 1.75rem",
                  fontSize: "0.75rem",
                }}
              >
                <span>Read Verified Reviews on Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Verification Disclosure note */}
            <div
              style={{
                marginTop: "1.75rem",
                padding: "0.75rem 1rem",
                backgroundColor: "var(--bg-pistachio)",
                borderRadius: "2px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.75rem",
                color: "var(--text-cocoa-light)",
              }}
            >
              <ShieldAlert size={14} style={{ color: "var(--accent-gold-muted)", flexShrink: 0 }} />
              <span>
                Rating data was retrieved during initial research. Verify current ratings directly on Google Maps before drawing final conclusions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
