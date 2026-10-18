import React, { useEffect } from "react";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldAlert } from "lucide-react";
import type { ProductItem, PackSize } from "../data/storeData";

export interface CartItem {
  id: string; // combination of product.id + packSize.weight
  product: ProductItem;
  packSize: PackSize;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onProceedToEnquiry: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToEnquiry,
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

  const subtotal = items.reduce(
    (sum, item) => sum + item.packSize.samplePrice * item.quantity,
    0
  );

  return (
    <div
      className={`drawer-backdrop ${isOpen ? "active" : ""}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className="drawer-panel"
        style={{
          width: "min(460px, 92vw)",
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart Bag"
      >
        {/* Drawer Header */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "1.25rem",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <ShoppingBag size={20} style={{ color: "var(--brand-forest)" }} />
              <h3 className="font-serif" style={{ fontSize: "1.35rem", color: "var(--dark-espresso)" }}>
                Your Dry Fruit Bag
              </h3>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-cocoa-light)",
                  backgroundColor: "var(--bg-pistachio)",
                  padding: "0.15rem 0.5rem",
                  borderRadius: "2px",
                }}
              >
                {items.length} {items.length === 1 ? "item" : "items"}
              </span>
            </div>

            <button
              onClick={onClose}
              style={{
                width: "2.25rem",
                height: "2.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "rgba(52, 40, 32, 0.05)",
                color: "var(--text-cocoa)",
              }}
              aria-label="Close bag"
            >
              <X size={18} />
            </button>
          </div>

          {/* Items List */}
          <div
            style={{
              maxHeight: "calc(100vh - 360px)",
              overflowY: "auto",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            {items.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3.5rem 1rem",
                  color: "var(--text-cocoa-muted)",
                }}
              >
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "50%",
                    backgroundColor: "var(--bg-pistachio)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem auto",
                    color: "var(--brand-forest)",
                  }}
                >
                  <ShoppingBag size={24} />
                </div>
                <p className="font-serif" style={{ fontSize: "1.25rem", color: "var(--text-cocoa)" }}>
                  Your bag is currently empty
                </p>
                <p style={{ fontSize: "0.85rem", marginTop: "0.5rem", maxWidth: "260px", margin: "0.5rem auto 0" }}>
                  Explore our sample catalogue to assemble your dry-fruit inquiry list.
                </p>
                <button
                  onClick={onClose}
                  className="btn-secondary"
                  style={{ marginTop: "1.5rem", padding: "0.65rem 1.25rem", fontSize: "0.75rem" }}
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "68px 1fr auto",
                      gap: "0.85rem",
                      alignItems: "center",
                      padding: "0.85rem",
                      backgroundColor: "var(--bg-ivory)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "2px",
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      style={{
                        width: "68px",
                        height: "68px",
                        borderRadius: "2px",
                        overflow: "hidden",
                        backgroundColor: "var(--bg-pistachio)",
                      }}
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>

                    {/* Details */}
                    <div>
                      <h4
                        className="font-serif"
                        style={{ fontSize: "1rem", color: "var(--dark-espresso)", lineHeight: 1.2 }}
                      >
                        {item.product.name}
                      </h4>
                      <p style={{ fontSize: "0.75rem", color: "var(--brand-forest)", fontWeight: 600 }}>
                        Portion: {item.packSize.weight} · ₹{item.packSize.samplePrice}
                      </p>

                      {/* Quantity Controls */}
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginTop: "0.4rem",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "2px",
                          padding: "0.15rem 0.35rem",
                          backgroundColor: "var(--bg-pistachio)",
                        }}
                      >
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          style={{
                            padding: "0.1rem 0.3rem",
                            color: "var(--text-cocoa)",
                            display: "flex",
                            alignItems: "center",
                          }}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, minWidth: "16px", textAlign: "center" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          style={{
                            padding: "0.1rem 0.3rem",
                            color: "var(--text-cocoa)",
                            display: "flex",
                            alignItems: "center",
                          }}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Remove and Item Total */}
                    <div style={{ textAlign: "right" }}>
                      <p
                        className="font-serif"
                        style={{ fontSize: "1.05rem", color: "var(--brand-forest)", fontWeight: 600 }}
                      >
                        ₹{item.packSize.samplePrice * item.quantity}
                      </p>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        style={{
                          color: "var(--text-cocoa-light)",
                          marginTop: "0.5rem",
                          display: "inline-flex",
                          alignItems: "center",
                        }}
                        aria-label={`Remove ${item.product.name} from bag`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}

                <div style={{ textAlign: "right", marginTop: "0.5rem" }}>
                  <button
                    onClick={onClearCart}
                    style={{
                      fontSize: "0.6875rem",
                      color: "var(--text-cocoa-light)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      textDecoration: "underline",
                    }}
                  >
                    Clear All Items
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Drawer Footer with Subtotal & Demo Checkout Action */}
        {items.length > 0 && (
          <div
            style={{
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--border-subtle)",
              backgroundColor: "var(--bg-ivory)",
            }}
          >
            {/* Notice pill */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
                padding: "0.65rem 0.85rem",
                backgroundColor: "var(--bg-pistachio)",
                borderRadius: "2px",
                fontSize: "0.75rem",
                color: "var(--text-cocoa-muted)",
                marginBottom: "1rem",
              }}
            >
              <ShieldAlert size={14} style={{ color: "var(--accent-gold-muted)", flexShrink: 0, marginTop: "2px" }} />
              <span>
                <strong>Demonstration Bag:</strong> This creates an in-store enquiry list. No real credit card or payment transaction is processed.
              </span>
            </div>

            {/* Subtotal */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "1.25rem",
              }}
            >
              <span className="eyebrow">Concept Subtotal (Sample)</span>
              <span className="font-serif" style={{ fontSize: "1.65rem", color: "var(--brand-forest)", fontWeight: 700 }}>
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToEnquiry();
              }}
              className="btn-primary"
              style={{ width: "100%", padding: "1rem" }}
            >
              <span>Generate Store Enquiry List</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
