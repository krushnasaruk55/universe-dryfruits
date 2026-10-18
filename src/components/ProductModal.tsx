import React, { useState, useEffect } from "react";
import { X, Check, ShoppingBag, MessageSquare } from "lucide-react";
import type { ProductItem, PackSize } from "../data/storeData";

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem, packSize: PackSize) => void;
  onOpenEnquiry: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenEnquiry,
}) => {
  const [selectedPack, setSelectedPack] = useState<PackSize | null>(null);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedPack(product.availableSizes[0]);
      setJustAdded(false);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && product) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product || !selectedPack) return null;

  const handleAdd = () => {
    onAddToCart(product, selectedPack);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2200);
  };

  return (
    <div
      className={`modal-backdrop ${product ? "active" : ""}`}
      onClick={onClose}
      aria-hidden={!product}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        style={{
          maxWidth: "760px",
          display: "grid",
          gridTemplateColumns: "1fr",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
          }}
          className="modal-inner-grid"
        >
          {/* Top/Left: Image */}
          <div
            style={{
              position: "relative",
              backgroundColor: "var(--bg-pistachio)",
              minHeight: "320px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                backgroundColor: "rgba(33, 28, 24, 0.75)",
                color: "var(--text-ivory)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <span
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                backgroundColor: "rgba(33, 28, 24, 0.8)",
                color: "var(--accent-gold-soft)",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "0.3rem 0.7rem",
                borderRadius: "2px",
              }}
            >
              {product.category}
            </span>
          </div>

          {/* Bottom/Right: Product Story, Notes & Pack selector */}
          <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
              <span className="eyebrow" style={{ color: "var(--brand-forest)" }}>
                UNIVERSE DRYFRUITS · CATALOGUE ITEM
              </span>
              <span className="badge-concept">Sample Pricing</span>
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                color: "var(--dark-espresso)",
                lineHeight: 1.15,
                marginBottom: "0.5rem",
                fontWeight: 400,
              }}
            >
              {product.name}
            </h3>

            {/* Price line */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <span
                className="font-serif"
                style={{ fontSize: "1.75rem", color: "var(--brand-forest)", fontWeight: 700 }}
              >
                ₹{selectedPack.samplePrice}
              </span>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-cocoa-light)" }}>
                / {selectedPack.weight} (Illustrative Demo Price)
              </span>
            </div>

            <p style={{ fontSize: "0.9375rem", color: "var(--text-cocoa)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              {product.description}
            </p>

            {/* Tasting Notes Pills */}
            <div style={{ marginBottom: "1.25rem" }}>
              <p
                style={{
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  fontWeight: 700,
                  color: "var(--text-cocoa-light)",
                  marginBottom: "0.4rem",
                }}
              >
                Tasting Notes &amp; Character
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {product.tastingNotes.map((note) => (
                  <span
                    key={note}
                    style={{
                      padding: "0.25rem 0.65rem",
                      backgroundColor: "var(--bg-pistachio)",
                      fontSize: "0.75rem",
                      color: "var(--brand-forest)",
                      borderRadius: "2px",
                      fontWeight: 600,
                    }}
                  >
                    ✦ {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Texture & Storage */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.85rem",
                padding: "0.85rem",
                backgroundColor: "rgba(52, 40, 32, 0.04)",
                borderRadius: "2px",
                marginBottom: "1.5rem",
                fontSize: "0.75rem",
              }}
            >
              <div>
                <span style={{ fontWeight: 700, color: "var(--text-cocoa)" }}>Texture:</span>
                <p style={{ color: "var(--text-cocoa-muted)", marginTop: "0.15rem" }}>{product.texture}</p>
              </div>
              <div>
                <span style={{ fontWeight: 700, color: "var(--text-cocoa)" }}>Storage:</span>
                <p style={{ color: "var(--text-cocoa-muted)", marginTop: "0.15rem" }}>{product.storageRecommendation}</p>
              </div>
            </div>

            {/* Pack Size Buttons */}
            <div style={{ marginBottom: "1.75rem" }}>
              <p
                style={{
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  fontWeight: 700,
                  color: "var(--text-cocoa-light)",
                  marginBottom: "0.5rem",
                }}
              >
                Select Package Portion
              </p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {product.availableSizes.map((size) => {
                  const isSelected = selectedPack.weight === size.weight;
                  return (
                    <button
                      key={size.weight}
                      onClick={() => setSelectedPack(size)}
                      style={{
                        flex: 1,
                        padding: "0.65rem 0.75rem",
                        borderRadius: "2px",
                        border: isSelected
                          ? "2px solid var(--brand-forest)"
                          : "1px solid var(--border-subtle)",
                        backgroundColor: isSelected
                          ? "rgba(36, 71, 52, 0.08)"
                          : "transparent",
                        color: isSelected ? "var(--brand-forest)" : "var(--text-cocoa)",
                        fontWeight: 700,
                        fontSize: "0.8125rem",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {size.weight} — ₹{size.samplePrice}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "0.75rem" }}>
              <button
                onClick={handleAdd}
                className="btn-primary"
                style={{ padding: "0.85rem", width: "100%" }}
              >
                {justAdded ? (
                  <>
                    <Check size={16} />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} />
                    <span>Add Portion to Bag</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry(product);
                }}
                className="btn-secondary"
                style={{ padding: "0.85rem", width: "100%" }}
              >
                <MessageSquare size={15} />
                <span>Enquire</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 680px) {
          .modal-inner-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </div>
  );
};
