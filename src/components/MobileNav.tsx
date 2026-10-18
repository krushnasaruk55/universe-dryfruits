import React, { useEffect } from "react";
import { X, ArrowRight, MapPin, Search, ShoppingBag } from "lucide-react";
import { businessConfig } from "../data/storeData";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
  onOpenCart,
  cartCount,
}) => {
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

  return (
    <div
      className={`drawer-backdrop ${isOpen ? "active" : ""}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className="drawer-panel"
        style={{
          width: "min(380px, 86vw)",
          padding: "2rem 1.75rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Header */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <p
                className="font-serif"
                style={{
                  fontSize: "1.25rem",
                  color: "var(--brand-forest)",
                  lineHeight: 1.1,
                }}
              >
                UNIVERSE DRYFRUITS
              </p>
              <p className="eyebrow" style={{ fontSize: "0.625rem", marginTop: "0.2rem" }}>
                Wagholi · Pune
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "rgba(52, 40, 32, 0.05)",
                color: "var(--text-cocoa)",
              }}
              aria-label="Close navigation"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Actions */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <button
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.75rem",
                background: "var(--bg-pistachio)",
                borderRadius: "2px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--text-cocoa)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              <Search size={16} />
              Search
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenCart();
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.75rem",
                background: "var(--bg-pistachio)",
                borderRadius: "2px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--text-cocoa)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              <ShoppingBag size={16} />
              Bag ({cartCount})
            </button>
          </div>

          {/* Links */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {[
              { label: "Home", href: "#hero" },
              { label: "Categories", href: "#categories" },
              { label: "Product Catalogue", href: "#products" },
              { label: "Brand Story", href: "#story" },
              { label: "Gift Collection", href: "#gifting" },
              { label: "Customer Experience", href: "#feedback" },
              { label: "Store Location & Hours", href: "#location" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.85rem 0",
                  fontSize: "1.1rem",
                  color: "var(--text-cocoa)",
                  borderBottom: "1px solid rgba(52, 40, 32, 0.06)",
                  fontFamily: "var(--font-serif)",
                  transition: "all 0.2s ease",
                }}
              >
                <span>{item.label}</span>
                <ArrowRight size={15} style={{ opacity: 0.4 }} />
              </a>
            ))}
          </nav>
        </div>

        {/* Footer info in drawer */}
        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: "0.75rem",
            color: "var(--text-cocoa-muted)",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
            <MapPin size={15} style={{ color: "var(--accent-gold-muted)", flexShrink: 0, marginTop: "2px" }} />
            <p style={{ lineHeight: 1.4 }}>
              {businessConfig.address.formatted}
            </p>
          </div>
          <p style={{ marginTop: "0.6rem", fontSize: "0.6875rem", color: "var(--text-cocoa-light)" }}>
            Independent digital storefront concept.
          </p>
        </div>
      </div>
    </div>
  );
};
