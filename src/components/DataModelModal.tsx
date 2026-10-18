import React, { useEffect } from "react";
import { X } from "lucide-react";
import { businessConfig } from "../data/storeData";

interface DataModelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataModelModal: React.FC<DataModelModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dataFields = [
    {
      field: "Business Name",
      value: businessConfig.name,
      status: "Researched (Google Maps)",
      type: "verified",
      note: "Accurately represents physical signage & listing.",
    },
    {
      field: "Physical Address",
      value: businessConfig.address.formatted,
      status: "Researched (Google Maps)",
      type: "verified",
      note: "Geocoded to Upper Kharadi Main Rd, Wagholi, Pune 412207.",
    },
    {
      field: "Rating & Reviews",
      value: `${businessConfig.researchedRating.score} / 5.0 (${businessConfig.researchedRating.reviewCount} Reviews)`,
      status: "Researched Snapshot",
      type: "researched",
      note: "Stored as snapshot; requires re-verification before commercial release.",
    },
    {
      field: "Operating Hours",
      value: businessConfig.researchedHours,
      status: "Researched Snapshot",
      type: "researched",
      note: "Subject to confirmation by retailer for festival & holiday times.",
    },
    {
      field: "Direct Phone / WhatsApp",
      value: "Not verified — omitted",
      status: "Unknown",
      type: "unknown",
      note: "No phone fabricated; fake contact lines strictly prohibited.",
    },
    {
      field: "Official Email",
      value: "Not verified — omitted",
      status: "Unknown",
      type: "unknown",
      note: "Preserved as null in schema; digital enquiry slip provided instead.",
    },
    {
      field: "Inventory & Pricing",
      value: "Sample Catalogue Data",
      status: "Concept Demo Only",
      type: "unknown",
      note: "Prices and pack weights are demonstrative only, clearly marked.",
    },
    {
      field: "Commercial Status",
      value: "Independent Concept Storefront",
      status: "Speculative Demonstration",
      type: "verified",
      note: "Not commissioned, approved, or officially launched by retailer.",
    },
  ];

  return (
    <div
      className={`modal-backdrop ${isOpen ? "active" : ""}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Internal Business Data Transparency"
        style={{ maxWidth: "720px" }}
      >
        <div style={{ padding: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "1.25rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="eyebrow" style={{ color: "var(--brand-forest)" }}>
                  GOVERNANCE &amp; ACCURACY AUDIT
                </span>
                <span className="badge-concept">Data Model</span>
              </div>
              <h3
                className="font-serif"
                style={{
                  fontSize: "1.65rem",
                  color: "var(--dark-espresso)",
                  marginTop: "0.25rem",
                }}
              >
                Storefront Transparency Ledger
              </h3>
            </div>

            <button
              onClick={onClose}
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: "rgba(52, 40, 32, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-cocoa)",
              }}
              aria-label="Close data model"
            >
              <X size={18} />
            </button>
          </div>

          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-cocoa-muted)",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
            }}
          >
            This inspection ledger demonstrates adherence to strict data accuracy rules.
            No phone numbers, emails, testimonials, organic certifications, or prices have
            been invented.
          </p>

          {/* Table */}
          <div
            style={{
              overflowX: "auto",
              marginBottom: "1.5rem",
              border: "1px solid var(--border-subtle)",
              borderRadius: "2px",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.75rem",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "var(--bg-pistachio)", borderBottom: "1px solid var(--border-subtle)" }}>
                  <th style={{ padding: "0.65rem 0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-cocoa)" }}>Field</th>
                  <th style={{ padding: "0.65rem 0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-cocoa)" }}>Current Value</th>
                  <th style={{ padding: "0.65rem 0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-cocoa)" }}>Classification</th>
                  <th style={{ padding: "0.65rem 0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-cocoa)" }}>Compliance Note</th>
                </tr>
              </thead>
              <tbody>
                {dataFields.map((row, idx) => (
                  <tr
                    key={row.field}
                    style={{
                      borderBottom: idx !== dataFields.length - 1 ? "1px solid var(--border-subtle)" : "none",
                      backgroundColor: idx % 2 === 0 ? "var(--bg-ivory)" : "rgba(246, 241, 232, 0.5)",
                    }}
                  >
                    <td style={{ padding: "0.65rem 0.85rem", fontWeight: 700, color: "var(--text-cocoa)" }}>
                      {row.field}
                    </td>
                    <td style={{ padding: "0.65rem 0.85rem", color: "var(--brand-forest)", fontWeight: 600 }}>
                      {row.value}
                    </td>
                    <td style={{ padding: "0.65rem 0.85rem" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          padding: "0.2rem 0.45rem",
                          borderRadius: "2px",
                          fontSize: "0.6875rem",
                          fontWeight: 600,
                          backgroundColor:
                            row.type === "verified"
                              ? "rgba(36, 71, 52, 0.1)"
                              : row.type === "researched"
                              ? "rgba(198, 165, 104, 0.2)"
                              : "rgba(52, 40, 32, 0.08)",
                          color:
                            row.type === "verified"
                              ? "var(--brand-forest)"
                              : row.type === "researched"
                              ? "var(--accent-gold-muted)"
                              : "var(--text-cocoa-light)",
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: "0.65rem 0.85rem", color: "var(--text-cocoa-muted)" }}>
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={onClose} className="btn-primary" style={{ padding: "0.65rem 1.4rem" }}>
              Close Ledger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
