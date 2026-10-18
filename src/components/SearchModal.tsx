import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { sampleProducts } from "../data/storeData";
import type { ProductItem } from "../data/storeData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProductModal: (product: ProductItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onOpenProductModal,
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = sampleProducts.filter((p) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tastingNotes.some((n) => n.toLowerCase().includes(q))
    );
  });

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
        aria-label="Catalogue Search"
        style={{ maxWidth: "600px" }}
      >
        <div style={{ padding: "1.75rem" }}>
          {/* Search Input Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              paddingBottom: "1.25rem",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <Search size={20} style={{ color: "var(--brand-forest)" }} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search almonds, cashews, pistachios, dates..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                background: "transparent",
                outline: "none",
                fontSize: "1.05rem",
                fontFamily: "inherit",
                color: "var(--dark-espresso)",
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{
                  color: "var(--text-cocoa-light)",
                  fontSize: "0.875rem",
                  padding: "0.2rem 0.5rem",
                }}
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                background: "rgba(52, 40, 32, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-cocoa)",
              }}
              aria-label="Close search"
            >
              <X size={16} />
            </button>
          </div>

          {/* Search Content */}
          <div style={{ maxHeight: "360px", overflowY: "auto", paddingTop: "1rem" }}>
            {!query.trim() ? (
              <div>
                <p className="eyebrow" style={{ marginBottom: "0.75rem", fontSize: "0.6875rem" }}>
                  Suggested Searches
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["Mamra", "Cashews", "Medjool", "Roasted Pistachios", "Walnuts", "Golden Raisins"].map(
                    (term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        style={{
                          padding: "0.4rem 0.75rem",
                          backgroundColor: "var(--bg-pistachio)",
                          borderRadius: "2px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--text-cocoa)",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        {term}
                      </button>
                    )
                  )}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div style={{ textAlign: "center", padding: "2.5rem 1rem", color: "var(--text-cocoa-muted)" }}>
                <p className="font-serif" style={{ fontSize: "1.15rem" }}>No matching dry fruits found</p>
                <p style={{ fontSize: "0.8125rem", marginTop: "0.35rem" }}>
                  Try searching for almonds, cashews, or dates.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {results.map((product) => (
                  <div
                    key={product.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "54px 1fr auto",
                      gap: "0.75rem",
                      alignItems: "center",
                      padding: "0.65rem 0.85rem",
                      backgroundColor: "var(--bg-ivory)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "2px",
                      cursor: "pointer",
                      transition: "background 0.2s ease",
                    }}
                    onClick={() => {
                      onClose();
                      onOpenProductModal(product);
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "54px", height: "54px", objectFit: "cover", borderRadius: "2px" }}
                    />
                    <div>
                      <h4 className="font-serif" style={{ fontSize: "1rem", color: "var(--dark-espresso)" }}>
                        {product.name}
                      </h4>
                      <p style={{ fontSize: "0.75rem", color: "var(--brand-forest)", fontWeight: 600 }}>
                        {product.category} · Starts ₹{product.price} ({product.availableSizes[0].weight})
                      </p>
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "var(--accent-gold-muted)" }}>
                      View →
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
