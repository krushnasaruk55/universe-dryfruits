import React from "react";
import { MapPin, Compass, ShieldCheck, ExternalLink } from "lucide-react";
import { businessConfig } from "../data/storeData";

interface FooterProps {
  onOpenDataModel: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDataModel }) => {
  return (
    <footer
      style={{
        backgroundColor: "var(--dark-espresso)",
        color: "var(--text-ivory)",
        paddingTop: "clamp(4.5rem, 7vw, 6.5rem)",
        paddingBottom: "3rem",
        borderTop: "1px solid rgba(198, 165, 104, 0.2)",
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2.5rem, 5vw, 4rem)",
            marginBottom: "clamp(3rem, 5vw, 4.5rem)",
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "420px" }}>
            <p
              className="font-serif"
              style={{
                fontSize: "1.75rem",
                color: "var(--text-ivory)",
                letterSpacing: "0.04em",
                marginBottom: "0.25rem",
              }}
            >
              UNIVERSE DRYFRUITS
            </p>
            <p
              className="eyebrow"
              style={{
                color: "var(--accent-gold)",
                fontSize: "0.6875rem",
                marginBottom: "1.25rem",
              }}
            >
              Wagholi · Pune · Maharashtra
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.65,
                color: "var(--text-ivory-muted)",
                marginBottom: "1.75rem",
              }}
            >
              A neighborhood dry fruit retailer presented through a contemporary,
              editorial digital storefront concept. Celebrating whole ingredients,
              pantry essentials, and mindful living.
            </p>

            <button
              onClick={onOpenDataModel}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.5rem 0.85rem",
                backgroundColor: "rgba(246, 241, 232, 0.08)",
                border: "1px solid var(--border-gold)",
                borderRadius: "2px",
                color: "var(--accent-gold-soft)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                transition: "all 0.2s ease",
              }}
            >
              <ShieldCheck size={14} />
              <span>View Fact &amp; Data Transparency Model</span>
            </button>
          </div>

          {/* Quick Links Column */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--accent-gold)",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.875rem",
              }}
            >
              <li>
                <a href="#hero" className="footer-link">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#categories" className="footer-link">
                  Product Categories
                </a>
              </li>
              <li>
                <a href="#products" className="footer-link">
                  Dry Fruit Catalogue
                </a>
              </li>
              <li>
                <a href="#story" className="footer-link">
                  Brand Story &amp; Ethos
                </a>
              </li>
              <li>
                <a href="#gifting" className="footer-link">
                  Festive Hamper Concept
                </a>
              </li>
              <li>
                <a href="#feedback" className="footer-link">
                  Customer Community
                </a>
              </li>
              <li>
                <a href="#location" className="footer-link">
                  Store Hours &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Retail Location Column */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--accent-gold)",
                fontWeight: 700,
                marginBottom: "1.25rem",
              }}
            >
              Store Location
            </p>
            <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", marginBottom: "1rem" }}>
              <MapPin size={17} style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: "2px" }} />
              <div style={{ fontSize: "0.875rem", lineHeight: 1.5, color: "var(--text-ivory-muted)" }}>
                <p style={{ color: "var(--text-ivory)", fontWeight: 600 }}>{businessConfig.name}</p>
                <p>{businessConfig.address.line1}</p>
                <p>
                  {businessConfig.address.area}, {businessConfig.address.city} — {businessConfig.address.pincode}
                </p>
                <p>{businessConfig.address.state}, {businessConfig.address.country}</p>
              </div>
            </div>

            <a
              href={businessConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                color: "var(--accent-gold-soft)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginTop: "0.5rem",
              }}
              className="footer-link"
            >
              <Compass size={14} />
              <span>Directions on Google Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Independent Concept Disclosure Strip */}
        <div
          style={{
            padding: "1.25rem 1.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.28)",
            border: "1px solid rgba(198, 165, 104, 0.2)",
            borderRadius: "2px",
            fontSize: "0.75rem",
            lineHeight: 1.6,
            color: "rgba(246, 241, 232, 0.65)",
            marginBottom: "2.5rem",
          }}
        >
          <strong style={{ color: "var(--accent-gold)" }}>Editorial Concept Notice:</strong> This digital storefront is an independent, speculative design demonstration created for Universe Dryfruits in Wagholi, Pune. It has not been commissioned, approved, or officially launched by the shop. All prices, packaging concepts, and product listings are sample mockups intended to demonstrate typography-led digital commerce for premium dry-fruit retail.
        </div>

        {/* Copyright & Signoff */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.75rem",
            color: "rgba(246, 241, 232, 0.45)",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(246, 241, 232, 0.08)",
          }}
        >
          <p>© {new Date().getFullYear()} Universe Dryfruits — Digital Storefront Concept. All rights reserved.</p>
          <p>Typography: DM Serif Display &amp; Manrope · Built with React &amp; TypeScript</p>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1.5fr !important;
          }
        }
        .footer-link {
          color: var(--text-ivory-muted);
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: var(--accent-gold) !important;
        }
      `}</style>
    </footer>
  );
};
