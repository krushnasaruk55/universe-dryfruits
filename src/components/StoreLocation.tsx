import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Compass,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { businessConfig } from "../data/storeData";

interface StoreLocationProps {
  onOpenEnquiry: () => void;
}

export const StoreLocation: React.FC<StoreLocationProps> = ({ onOpenEnquiry }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(businessConfig.address.formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="location"
      style={{
        backgroundColor: "var(--bg-ivory)",
        paddingTop: "clamp(5rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(5rem, 8vw, 7.5rem)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            marginBottom: "1.25rem",
          }}
        >
          <span className="eyebrow" style={{ color: "var(--brand-forest)" }}>
            10 · PHYSICAL STOREFRONT
          </span>
          <span style={{ color: "var(--border-strong)" }}>|</span>
          <span className="badge-concept">Wagholi, Pune</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2rem, 5vw, 4rem)",
          }}
          className="location-layout"
        >
          {/* Left Column: Details & Directions */}
          <div style={{ maxWidth: "600px" }}>
            <h2
              className="font-serif"
              style={{
                fontSize: "var(--fs-hero)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                color: "var(--dark-espresso)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                fontWeight: 400,
              }}
            >
              COME
              <br />
              <span style={{ fontStyle: "italic", color: "var(--brand-forest)" }}>
                FIND US.
              </span>
            </h2>

            <p
              style={{
                fontSize: "var(--fs-body-lg)",
                lineHeight: 1.65,
                color: "var(--text-cocoa)",
                marginBottom: "2rem",
              }}
            >
              Visit Universe Dryfruits on Upper Kharadi Main Road, Wagholi, Pune.
              Experience whole dry fruits, inquire about custom festive assortments, and
              hand-select your daily pantry staples.
            </p>

            {/* Address Card with Copy Action */}
            <div
              style={{
                backgroundColor: "var(--bg-pistachio)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "3px",
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.85rem" }}>
                  <MapPin
                    size={22}
                    style={{
                      color: "var(--brand-forest)",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.6875rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        fontWeight: 700,
                        color: "var(--brand-forest)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Store Address
                    </p>
                    <p
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: "var(--text-cocoa)",
                        lineHeight: 1.45,
                      }}
                    >
                      {businessConfig.address.line1}
                    </p>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-cocoa-muted)" }}>
                      {businessConfig.address.area}, {businessConfig.address.city} — {businessConfig.address.pincode}
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-cocoa-light)" }}>
                      {businessConfig.address.state}, {businessConfig.address.country}
                    </p>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyAddress}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.45rem 0.8rem",
                    backgroundColor: "var(--bg-ivory)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "2px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-cocoa)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    flexShrink: 0,
                  }}
                  title="Copy address to clipboard"
                  aria-label="Copy address"
                >
                  {copied ? (
                    <>
                      <Check size={13} style={{ color: "var(--brand-forest)" }} />
                      <span style={{ color: "var(--brand-forest)" }}>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Hours Box with research disclosure */}
            <div
              style={{
                backgroundColor: "var(--bg-ivory)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "3px",
                padding: "1.35rem 1.5rem",
                marginBottom: "2rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                <Clock
                  size={20}
                  style={{ color: "var(--brand-forest)", flexShrink: 0, marginTop: "2px" }}
                />
                <div>
                  <p
                    style={{
                      fontSize: "0.6875rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      fontWeight: 700,
                      color: "var(--brand-forest)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Researched Store Hours
                  </p>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-cocoa)" }}>
                    {businessConfig.researchedHours}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-cocoa-light)",
                      marginTop: "0.35rem",
                    }}
                  >
                    Hours reflect previously retrieved Google Maps records. Subject to owner
                    re-verification during holidays and festival periods.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={businessConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Compass size={16} />
                <span>Get Driving Directions</span>
                <ExternalLink size={13} />
              </a>

              <button onClick={onOpenEnquiry} className="btn-secondary">
                <MessageSquare size={15} />
                <span>Submit Digital Store Enquiry</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Map Representation & Quick Landmark Guide */}
          <div>
            <div
              style={{
                backgroundColor: "var(--bg-pistachio)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "3px",
                padding: "2rem",
                position: "relative",
              }}
            >
              {/* Map Illustration Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <div>
                  <span className="eyebrow" style={{ color: "var(--brand-forest)" }}>
                    MAP ROUTING CARD
                  </span>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.35rem",
                      color: "var(--dark-espresso)",
                      marginTop: "0.2rem",
                    }}
                  >
                    Upper Kharadi Corridor
                  </h3>
                </div>
                <span className="badge-concept">Wagholi Route</span>
              </div>

              {/* Wayfinding landmarks list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div
                  style={{
                    padding: "0.9rem 1.1rem",
                    backgroundColor: "var(--bg-ivory)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "2px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--brand-forest)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Arriving from Kharadi / EON IT Park
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-cocoa-muted)", marginTop: "0.2rem" }}>
                    Follow Upper Kharadi Main Road toward Wagholi. Located along commercial sector 2/5.
                  </p>
                </div>

                <div
                  style={{
                    padding: "0.9rem 1.1rem",
                    backgroundColor: "var(--bg-ivory)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "2px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--brand-forest)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Arriving from Nagar Road / Wagholi Center
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-cocoa-muted)", marginTop: "0.2rem" }}>
                    Turn onto Upper Kharadi connection; landmark shops and parking accessible along the main roadway.
                  </p>
                </div>

                <div
                  style={{
                    padding: "0.9rem 1.1rem",
                    backgroundColor: "var(--bg-ivory)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "2px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--brand-forest)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Parking &amp; Footfall
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--text-cocoa-muted)", marginTop: "0.2rem" }}>
                    Street parking available; convenient for quick curbside pickups and grocery rounds.
                  </p>
                </div>
              </div>

              {/* Direct Maps Action Container */}
              <div style={{ marginTop: "1.75rem", textAlign: "center" }}>
                <a
                  href={businessConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--brand-forest)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                  className="link-editorial"
                >
                  <span>Open UNIVERSE DRYFRUITS on Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .location-layout {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
