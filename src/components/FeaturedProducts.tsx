import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Info,
  Check,
  Eye,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { sampleProducts } from "../data/storeData";
import type { ProductItem, PackSize } from "../data/storeData";

interface FeaturedProductsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onAddToCart: (product: ProductItem, packSize: PackSize) => void;
  onOpenProductModal: (product: ProductItem) => void;
  onOpenEnquiry: (product?: ProductItem) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onOpenProductModal,
  onOpenEnquiry,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPackSizes, setSelectedPackSizes] = useState<{ [productId: string]: PackSize }>(
    () => {
      const initial: { [key: string]: PackSize } = {};
      sampleProducts.forEach((p) => {
        initial[p.id] = p.availableSizes[0];
      });
      return initial;
    }
  );
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const categories = ["All", "Almonds", "Cashews", "Pistachios", "Walnuts", "Dates", "Raisins"];

  const handlePackChange = (productId: string, pack: PackSize) => {
    setSelectedPackSizes((prev) => ({
      ...prev,
      [productId]: pack,
    }));
  };

  const handleAdd = (product: ProductItem) => {
    const pack = selectedPackSizes[product.id] || product.availableSizes[0];
    onAddToCart(product, pack);
    setAddedItemNotice(product.id);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 2000);
  };

  const filteredProducts = sampleProducts.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" ||
      p.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const spotlightProduct = filteredProducts[0] || sampleProducts[0];
  const spotlightPack = selectedPackSizes[spotlightProduct.id] || spotlightProduct.availableSizes[0];
  const isSpotlightAdded = addedItemNotice === spotlightProduct.id;

  return (
    <section
      id="products"
      style={{
        backgroundColor: "var(--bg-pistachio)",
        borderBottom: "1px solid var(--border-swiss)",
      }}
      className="section-pad"
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid var(--border-swiss)",
              paddingBottom: "0.85rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span className="swiss-numeral">[06.0 / DIRECTORY]</span>
              <span style={{ color: "var(--border-strong)" }}>·</span>
              <span className="eyebrow" style={{ color: "var(--brand-forest)" }}>
                WHOLE DRY-FRUIT CATALOGUE
              </span>
            </div>

            <span className="badge-concept">
              <Sparkles size={11} />
              Sample Concept Catalogue
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <h2
                className="font-serif"
                style={{
                  fontSize: "var(--fs-h1)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.02em",
                  color: "var(--dark-espresso)",
                  fontWeight: 400,
                }}
              >
                DRY FRUITS &amp;
                <br />
                <span
                  style={{
                    fontStyle: "italic",
                    color: "var(--brand-forest)",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  PANTRY SELECTION.
                </span>
              </h2>
            </div>

            {/* Concept Notice */}
            <div
              style={{
                maxWidth: "460px",
                padding: "0.85rem 1.15rem",
                backgroundColor: "rgba(246, 241, 232, 0.8)",
                border: "1px solid var(--border-swiss)",
                borderRadius: "2px",
                fontSize: "0.8125rem",
                color: "var(--text-cocoa-muted)",
                lineHeight: 1.5,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontWeight: 700, color: "var(--text-cocoa)", marginBottom: "0.2rem" }}>
                <Info size={14} style={{ color: "var(--accent-gold-muted)" }} />
                <span>Concept Catalogue Notice</span>
              </div>
              Prices and pack sizes shown are sample illustrative figures for this design concept. Contact the Wagholi storefront directly to confirm live inventory.
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.85rem 1.25rem",
            backgroundColor: "var(--bg-ivory)",
            border: "1px solid var(--border-swiss)",
            borderRadius: "2px",
            marginBottom: "2.5rem",
          }}
        >
          {/* Category Filter Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              overflowX: "auto",
              paddingBottom: "4px",
              maxWidth: "100%",
            }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    borderRadius: "2px",
                    border: isActive
                      ? "1px solid var(--brand-forest)"
                      : "1px solid var(--border-subtle)",
                    backgroundColor: isActive ? "var(--brand-forest)" : "transparent",
                    color: isActive ? "var(--bg-ivory)" : "var(--text-cocoa)",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.45rem 0.9rem",
              background: "var(--bg-pistachio)",
              borderRadius: "2px",
              border: "1px solid var(--border-subtle)",
              width: "min(300px, 100%)",
            }}
          >
            <Search size={16} style={{ color: "var(--text-cocoa-muted)" }} />
            <input
              type="text"
              placeholder="Search nuts, dates, notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
                fontFamily: "inherit",
                fontSize: "0.8125rem",
                color: "var(--text-cocoa)",
                width: "100%",
              }}
              aria-label="Filter products"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{ fontSize: "0.75rem", color: "var(--text-cocoa-muted)" }}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 1. CURATOR'S SPOTLIGHT: FEATURED HORIZONTAL SPREAD */}
        {filteredProducts.length > 0 && !searchQuery && (
          <div
            style={{
              marginBottom: "3.5rem",
              backgroundColor: "var(--bg-ivory)",
              border: "1px solid var(--border-swiss)",
              borderRadius: "3px",
              overflow: "hidden",
            }}
          >
            <div
              className="spotlight-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
              }}
            >
              {/* Left: Tactile Editorial Portrait Photo */}
              <div
                className="editorial-img-frame"
                style={{
                  aspectRatio: "4 / 3",
                  minHeight: "360px",
                  cursor: "pointer",
                }}
                onClick={() => onOpenProductModal(spotlightProduct)}
              >
                <img
                  src={spotlightProduct.image}
                  alt={spotlightProduct.name}
                  loading="eager"
                  decoding="async"
                />

                <span
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    backgroundColor: "rgba(33, 28, 24, 0.82)",
                    backdropFilter: "blur(4px)",
                    color: "var(--accent-gold-soft)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "2px",
                  }}
                >
                  CURATOR'S SPOTLIGHT · {spotlightProduct.category}
                </span>
              </div>

              {/* Right: Rich Swiss Spec Plate */}
              <div
                style={{
                  padding: "clamp(1.75rem, 4vw, 3rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span className="swiss-numeral">[FEATURE PROFILE]</span>
                    <span className="badge-concept">Sample Pricing</span>
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "clamp(1.85rem, 3.5vw, 2.5rem)",
                      color: "var(--dark-espresso)",
                      lineHeight: 1.1,
                      marginTop: "0.4rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {spotlightProduct.name}
                  </h3>

                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "1.25rem" }}>
                    <span
                      className="font-serif"
                      style={{ fontSize: "1.75rem", color: "var(--brand-forest)", fontWeight: 700 }}
                    >
                      ₹{spotlightPack.samplePrice}
                    </span>
                    <span style={{ fontSize: "0.8125rem", color: "var(--text-cocoa-light)" }}>
                      / {spotlightPack.weight} (Illustrative Figure)
                    </span>
                  </div>

                  <p style={{ fontSize: "0.9375rem", color: "var(--text-cocoa)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                    {spotlightProduct.description}
                  </p>

                  {/* Tasting Notes */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <p style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--text-cocoa-light)", marginBottom: "0.4rem" }}>
                      Tasting &amp; Sensory Notes
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {spotlightProduct.tastingNotes.map((note) => (
                        <span
                          key={note}
                          style={{
                            padding: "0.25rem 0.65rem",
                            backgroundColor: "var(--bg-pistachio)",
                            fontSize: "0.75rem",
                            color: "var(--brand-forest)",
                            fontWeight: 600,
                            borderRadius: "2px",
                          }}
                        >
                          ✦ {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Portion Selector */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <p style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--text-cocoa-light)", marginBottom: "0.4rem" }}>
                      Select Portion
                    </p>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {spotlightProduct.availableSizes.map((size) => {
                        const isSelected = spotlightPack.weight === size.weight;
                        return (
                          <button
                            key={size.weight}
                            onClick={() => handlePackChange(spotlightProduct.id, size)}
                            style={{
                              flex: 1,
                              padding: "0.6rem 0.75rem",
                              borderRadius: "2px",
                              border: isSelected ? "2px solid var(--brand-forest)" : "1px solid var(--border-swiss)",
                              backgroundColor: isSelected ? "rgba(36, 71, 52, 0.08)" : "transparent",
                              color: isSelected ? "var(--brand-forest)" : "var(--text-cocoa)",
                              fontWeight: 700,
                              fontSize: "0.8125rem",
                              transition: "all 0.15s ease",
                            }}
                          >
                            {size.weight} — ₹{size.samplePrice}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "0.75rem" }}>
                  <button
                    onClick={() => handleAdd(spotlightProduct)}
                    className="btn-primary"
                    style={{ padding: "0.95rem" }}
                  >
                    {isSpotlightAdded ? (
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
                    onClick={() => onOpenEnquiry(spotlightProduct)}
                    className="btn-secondary"
                    style={{ padding: "0.95rem" }}
                  >
                    <MessageSquare size={15} />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. ASYMMETRIC CATALOGUE DIRECTORY */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "clamp(1.5rem, 2.5vw, 2.25rem)",
          }}
        >
          {filteredProducts.map((product, idx) => {
            const activePack = selectedPackSizes[product.id] || product.availableSizes[0];
            const isAdded = addedItemNotice === product.id;

            return (
              <div
                key={product.id}
                className="catalogue-item-card"
                style={{
                  backgroundColor: "var(--bg-ivory)",
                  border: "1px solid var(--border-swiss)",
                  borderRadius: "2px",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "transform 0.3s var(--ease-editorial), box-shadow 0.3s var(--ease-editorial)",
                }}
              >
                {/* Photo frame */}
                <div
                  className="editorial-img-frame"
                  style={{
                    aspectRatio: idx % 2 === 0 ? "4 / 3" : "1 / 1",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onClick={() => onOpenProductModal(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="eager"
                    decoding="async"
                  />

                  <span
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      backgroundColor: "rgba(33, 28, 24, 0.8)",
                      color: "var(--text-ivory)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "2px",
                    }}
                  >
                    {product.category}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenProductModal(product);
                    }}
                    style={{
                      position: "absolute",
                      bottom: "0.75rem",
                      right: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      background: "rgba(246, 241, 232, 0.94)",
                      backdropFilter: "blur(4px)",
                      color: "var(--text-cocoa)",
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      padding: "0.35rem 0.65rem",
                      borderRadius: "2px",
                      border: "1px solid var(--border-subtle)",
                    }}
                    aria-label={`View details of ${product.name}`}
                  >
                    <Eye size={13} />
                    <span>Notes</span>
                  </button>
                </div>

                {/* Body */}
                <div
                  style={{
                    padding: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.35rem" }}>
                      <span className="swiss-numeral">[ITEM {idx + 1}]</span>
                      <div style={{ textAlign: "right" }}>
                        <span className="font-serif" style={{ fontSize: "1.25rem", color: "var(--brand-forest)", fontWeight: 700 }}>
                          ₹{activePack.samplePrice}
                        </span>
                        <span style={{ display: "block", fontSize: "0.625rem", color: "var(--text-cocoa-light)", textTransform: "uppercase" }}>
                          Sample
                        </span>
                      </div>
                    </div>

                    <h4
                      className="font-serif"
                      style={{
                        fontSize: "1.3rem",
                        lineHeight: 1.2,
                        color: "var(--dark-espresso)",
                        marginBottom: "0.45rem",
                      }}
                    >
                      {product.name}
                    </h4>

                    <p style={{ fontSize: "0.825rem", color: "var(--text-cocoa-muted)", lineHeight: 1.5, marginBottom: "1rem" }}>
                      {product.shortDescription}
                    </p>

                    {/* Portion Buttons */}
                    <div style={{ display: "flex", gap: "0.35rem", marginBottom: "1.25rem" }}>
                      {product.availableSizes.map((size) => {
                        const isSelected = activePack.weight === size.weight;
                        return (
                          <button
                            key={size.weight}
                            onClick={() => handlePackChange(product.id, size)}
                            style={{
                              flex: 1,
                              padding: "0.35rem 0.45rem",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              borderRadius: "2px",
                              border: isSelected ? "1.5px solid var(--brand-forest)" : "1px solid var(--border-swiss)",
                              backgroundColor: isSelected ? "rgba(36, 71, 52, 0.08)" : "transparent",
                              color: isSelected ? "var(--brand-forest)" : "var(--text-cocoa)",
                            }}
                          >
                            {size.weight}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "0.5rem",
                      paddingTop: "0.85rem",
                      borderTop: "1px solid var(--border-swiss)",
                    }}
                  >
                    <button
                      onClick={() => handleAdd(product)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.45rem",
                        padding: "0.7rem",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        borderRadius: "2px",
                        backgroundColor: "var(--brand-forest)",
                        color: "var(--bg-ivory)",
                        border: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isAdded ? (
                        <>
                          <Check size={14} />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={14} />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onOpenEnquiry(product)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.7rem 0.85rem",
                        borderRadius: "2px",
                        border: "1px solid var(--border-strong)",
                        color: "var(--text-cocoa)",
                      }}
                      title="Enquire directly"
                      aria-label={`Enquire about ${product.name}`}
                    >
                      <MessageSquare size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .spotlight-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
        .catalogue-item-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(52, 40, 32, 0.1);
        }
      `}</style>
    </section>
  );
};
