import React, { useState, useEffect } from "react";
import { X, Check, Copy, ShieldAlert, Sparkles } from "lucide-react";
import type { ProductItem } from "../data/storeData";
import type { CartItem } from "./CartDrawer";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: ProductItem | null;
  cartItems?: CartItem[];
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  product,
  cartItems = [],
}) => {
  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [enquiryType, setEnquiryType] = useState<"general" | "festive" | "bulk" | "order">("general");
  const [customMessage, setCustomMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSubmitted(false);
      setValidationError("");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build the textual summary of what the customer is asking about
  const itemsText = cartItems.length > 0
    ? cartItems
        .map(
          (item) =>
            `- ${item.product.name} (${item.packSize.weight}) × ${item.quantity} [Sample: ₹${item.packSize.samplePrice * item.quantity}]`
        )
        .join("\n")
    : product
    ? `- ${product.name} (Inquiry)`
    : "- General Dry Fruits inquiry";

  const generatedEnquiryText = `UNIVERSE DRYFRUITS — STORE VISIT / ENQUIRY NOTE
Store: 2/5, Upper Kharadi Main Road, Wagholi, Pune
Customer: ${customerName || "Patron"}
Contact: ${customerContact || "Not provided"}
Inquiry Nature: ${enquiryType.toUpperCase()}
Items of Interest:
${itemsText}
Customer Notes:
${customMessage || "Looking to confirm stock and current pricing at the store."}
---
[Created via Universe Dryfruits Digital Storefront Concept]`;

  const handleCopyNote = () => {
    navigator.clipboard.writeText(generatedEnquiryText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setValidationError("Please enter your name for the enquiry note.");
      return;
    }
    setValidationError("");
    setIsSubmitted(true);
  };

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
        aria-label="Product and Store Enquiry"
        style={{ maxWidth: "640px" }}
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
                  IN-STORE ENQUIRY ASSISTANT
                </span>
                <span className="badge-concept">Concept Demo</span>
              </div>
              <h3
                className="font-serif"
                style={{
                  fontSize: "1.65rem",
                  color: "var(--dark-espresso)",
                  marginTop: "0.25rem",
                  lineHeight: 1.15,
                }}
              >
                Storefront Enquiry Slip
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
              aria-label="Close enquiry modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Strict Accuracy Notice */}
          <div
            style={{
              padding: "0.75rem 1rem",
              backgroundColor: "var(--bg-pistachio)",
              borderRadius: "2px",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.6rem",
              fontSize: "0.75rem",
              color: "var(--text-cocoa-muted)",
              marginBottom: "1.5rem",
            }}
          >
            <ShieldAlert size={16} style={{ color: "var(--accent-gold-muted)", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <strong style={{ color: "var(--text-cocoa)" }}>Factual Transparency:</strong> Universe Dryfruits has not verified a direct public API, WhatsApp line, or payment gateway for this concept. This tool generates a clean inquiry slip for your in-person visit to 2/5, Upper Kharadi Main Road.
            </div>
          </div>

          {isSubmitted ? (
            <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  backgroundColor: "rgba(36, 71, 52, 0.1)",
                  color: "var(--brand-forest)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto",
                }}
              >
                <Check size={28} />
              </div>
              <h4 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--brand-forest)" }}>
                Enquiry Slip Generated
              </h4>
              <p style={{ fontSize: "0.875rem", color: "var(--text-cocoa-muted)", marginTop: "0.5rem", maxWidth: "460px", margin: "0.5rem auto 1.5rem auto" }}>
                Your items and notes have been assembled. Copy the text slip below or present it during your visit to the Wagholi shop!
              </p>

              <div
                style={{
                  backgroundColor: "var(--bg-pistachio)",
                  padding: "1rem",
                  borderRadius: "2px",
                  border: "1px solid var(--border-subtle)",
                  textAlign: "left",
                  fontSize: "0.75rem",
                  fontFamily: "monospace",
                  whiteSpace: "pre-wrap",
                  color: "var(--text-cocoa)",
                  maxHeight: "180px",
                  overflowY: "auto",
                  marginBottom: "1.5rem",
                }}
              >
                {generatedEnquiryText}
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <button onClick={handleCopyNote} className="btn-primary" style={{ padding: "0.75rem 1.5rem" }}>
                  {isCopied ? (
                    <>
                      <Check size={15} />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy Enquiry Slip</span>
                    </>
                  )}
                </button>

                <button onClick={onClose} className="btn-secondary" style={{ padding: "0.75rem 1.5rem" }}>
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {validationError && (
                <div
                  style={{
                    backgroundColor: "rgba(180, 40, 40, 0.1)",
                    color: "#9a1e1e",
                    padding: "0.6rem 0.85rem",
                    borderRadius: "2px",
                    fontSize: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  {validationError}
                </div>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.6875rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 700,
                      color: "var(--text-cocoa-muted)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Ramesh Kulkarni"
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "2px",
                      fontSize: "0.85rem",
                      backgroundColor: "var(--bg-ivory)",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.6875rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 700,
                      color: "var(--text-cocoa-muted)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Contact (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerContact}
                    onChange={(e) => setCustomerContact(e.target.value)}
                    placeholder="Phone or Email"
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "2px",
                      fontSize: "0.85rem",
                      backgroundColor: "var(--bg-ivory)",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
              </div>

              {/* Enquiry Type Selector */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.6875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 700,
                    color: "var(--text-cocoa-muted)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Inquiry Purpose
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem" }}>
                  {[
                    { id: "general", label: "General" },
                    { id: "order", label: "Store Visit" },
                    { id: "festive", label: "Festive Box" },
                    { id: "bulk", label: "Bulk Order" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setEnquiryType(t.id as any)}
                      style={{
                        padding: "0.5rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        borderRadius: "2px",
                        border: enquiryType === t.id
                          ? "1.5px solid var(--brand-forest)"
                          : "1px solid var(--border-subtle)",
                        backgroundColor: enquiryType === t.id
                          ? "rgba(36, 71, 52, 0.08)"
                          : "transparent",
                        color: enquiryType === t.id ? "var(--brand-forest)" : "var(--text-cocoa)",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Items Selected Preview */}
              <div
                style={{
                  padding: "0.75rem 0.95rem",
                  backgroundColor: "rgba(52, 40, 32, 0.04)",
                  borderRadius: "2px",
                  marginBottom: "1rem",
                  fontSize: "0.75rem",
                }}
              >
                <span style={{ fontWeight: 700, color: "var(--text-cocoa)" }}>Items In Slip:</span>
                <p style={{ color: "var(--brand-forest)", marginTop: "0.2rem", fontWeight: 600 }}>
                  {cartItems.length > 0
                    ? `${cartItems.length} items from your Bag`
                    : product
                    ? `${product.name} (Direct Enquiry)`
                    : "Browsing general dry-fruit catalogue"}
                </p>
              </div>

              {/* Custom message */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.6875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 700,
                    color: "var(--text-cocoa-muted)",
                    marginBottom: "0.35rem",
                  }}
                >
                  Questions or Notes
                </label>
                <textarea
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="e.g. Inquiring on fresh arrival of Mamra almonds or custom packaging for wedding gift."
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.85rem",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "2px",
                    fontSize: "0.85rem",
                    backgroundColor: "var(--bg-ivory)",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Actions */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem" }}>
                <button type="button" onClick={onClose} className="btn-secondary" style={{ padding: "0.75rem 1.25rem" }}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" style={{ padding: "0.75rem 1.5rem" }}>
                  <span>Create Store Slip</span>
                  <Sparkles size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
