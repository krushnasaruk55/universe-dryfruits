import React from "react";
import { ArrowUpRight } from "lucide-react";
import { productCategories } from "../data/storeData";

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section
      id="categories"
      style={{
        backgroundColor: "var(--bg-ivory)",
        paddingTop: "clamp(4.5rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(4.5rem, 8vw, 7.5rem)",
        borderBottom: "1px solid var(--border-swiss)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            marginBottom: "clamp(2.5rem, 5vw, 4rem)",
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
              <span className="swiss-numeral">[05.0 / ARCHITECTURE]</span>
              <span style={{ color: "var(--border-strong)" }}>·</span>
              <span className="eyebrow" style={{ color: "var(--brand-forest)" }}>
                SIX HARVEST PROFILES
              </span>
            </div>

            <span className="eyebrow" style={{ fontSize: "0.6875rem" }}>
              CLICK TO FILTER CATALOGUE
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "2rem",
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
                CATEGORIES &amp;
                <br />
                <span
                  style={{
                    fontStyle: "italic",
                    color: "var(--brand-forest)",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  HARVEST PROFILES.
                </span>
              </h2>
            </div>

            <p
              style={{
                maxWidth: "460px",
                fontSize: "0.9375rem",
                color: "var(--text-cocoa-muted)",
                lineHeight: 1.65,
              }}
            >
              Each dry fruit carries its own distinct density, natural moisture, and
              culinary character. Select any profile below to filter the live catalogue
              directory.
            </p>
          </div>
        </div>

        {/* Varied Editorial Rhythm Grid */}
        <div
          className="editorial-category-rhythm"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "clamp(1.25rem, 2.5vw, 2rem)",
          }}
        >
          {/* Item 01: Almonds (Tall Portrait 3:4 — Spans 7 cols on desktop) */}
          <div
            className="cat-editorial-card cat-card-almonds"
            style={{
              gridColumn: "span 7",
              cursor: "pointer",
            }}
            onClick={() => onSelectCategory("Almonds")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelectCategory("Almonds")}
            aria-label="Filter catalogue by Almonds"
          >
            <div
              className="editorial-img-frame"
              style={{
                aspectRatio: "16 / 11",
                borderRadius: "2px",
                border: "1px solid var(--border-swiss)",
              }}
            >
              <img
                src={productCategories[0].image}
                alt={productCategories[0].name}
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Swiss Typographic Legend Underneath */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: "0.85rem",
                borderBottom: "1px solid var(--border-subtle)",
                paddingBottom: "0.85rem",
              }}
            >
              <div>
                <span className="swiss-numeral">[PROFILE 01] · MAMRA &amp; CALIFORNIA</span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.75rem",
                    color: "var(--dark-espresso)",
                    marginTop: "0.2rem",
                  }}
                >
                  {productCategories[0].name}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-cocoa-muted)", maxWidth: "420px", marginTop: "0.25rem" }}>
                  {productCategories[0].description}
                </p>
              </div>

              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <span className="badge-concept" style={{ fontSize: "0.625rem" }}>
                  {productCategories[0].accentNote}
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    justifyContent: "flex-end",
                    marginTop: "0.4rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--brand-forest)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  <span>Filter</span>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </div>

          {/* Item 02: Cashews (Wide Landscape — Spans 5 cols on desktop) */}
          <div
            className="cat-editorial-card cat-card-cashews"
            style={{
              gridColumn: "span 5",
              cursor: "pointer",
            }}
            onClick={() => onSelectCategory("Cashews")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelectCategory("Cashews")}
            aria-label="Filter catalogue by Cashews"
          >
            <div
              className="editorial-img-frame"
              style={{
                aspectRatio: "16 / 11",
                borderRadius: "2px",
                border: "1px solid var(--border-swiss)",
              }}
            >
              <img
                src={productCategories[1].image}
                alt={productCategories[1].name}
                loading="eager"
                decoding="async"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: "0.85rem",
                borderBottom: "1px solid var(--border-subtle)",
                paddingBottom: "0.85rem",
              }}
            >
              <div>
                <span className="swiss-numeral">[PROFILE 02] · GRADE W180 WHOLE</span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.75rem",
                    color: "var(--dark-espresso)",
                    marginTop: "0.2rem",
                  }}
                >
                  {productCategories[1].name}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-cocoa-muted)", marginTop: "0.25rem" }}>
                  {productCategories[1].description}
                </p>
              </div>

              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <span className="badge-concept" style={{ fontSize: "0.625rem" }}>
                  {productCategories[1].accentNote}
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    justifyContent: "flex-end",
                    marginTop: "0.4rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--brand-forest)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  <span>Filter</span>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </div>

          {/* Item 03: Pistachios (Compact Macro Square — Spans 4 cols) */}
          <div
            className="cat-editorial-card"
            style={{
              gridColumn: "span 4",
              cursor: "pointer",
            }}
            onClick={() => onSelectCategory("Pistachios")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelectCategory("Pistachios")}
            aria-label="Filter catalogue by Pistachios"
          >
            <div
              className="editorial-img-frame"
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "2px",
                border: "1px solid var(--border-swiss)",
              }}
            >
              <img
                src={productCategories[2].image}
                alt={productCategories[2].name}
                loading="eager"
                decoding="async"
              />
            </div>

            <div
              style={{
                paddingTop: "0.75rem",
                borderBottom: "1px solid var(--border-subtle)",
                paddingBottom: "0.75rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="swiss-numeral">[PROFILE 03]</span>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--brand-forest)", textTransform: "uppercase" }}>Filter →</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--dark-espresso)", marginTop: "0.15rem" }}>
                {productCategories[2].name}
              </h3>
              <p style={{ fontSize: "0.75rem", color: "var(--text-cocoa-muted)", marginTop: "0.2rem" }}>
                Naturally cracked tree-roasted kernels.
              </p>
            </div>
          </div>

          {/* Item 04: Walnuts (Tactile 4 cols) */}
          <div
            className="cat-editorial-card"
            style={{
              gridColumn: "span 4",
              cursor: "pointer",
            }}
            onClick={() => onSelectCategory("Walnuts")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelectCategory("Walnuts")}
            aria-label="Filter catalogue by Walnuts"
          >
            <div
              className="editorial-img-frame"
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "2px",
                border: "1px solid var(--border-swiss)",
              }}
            >
              <img
                src={productCategories[3].image}
                alt={productCategories[3].name}
                loading="eager"
                decoding="async"
              />
            </div>

            <div
              style={{
                paddingTop: "0.75rem",
                borderBottom: "1px solid var(--border-subtle)",
                paddingBottom: "0.75rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="swiss-numeral">[PROFILE 04]</span>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--brand-forest)", textTransform: "uppercase" }}>Filter →</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--dark-espresso)", marginTop: "0.15rem" }}>
                {productCategories[3].name}
              </h3>
              <p style={{ fontSize: "0.75rem", color: "var(--text-cocoa-muted)", marginTop: "0.2rem" }}>
                Pristine light amber halved kernels.
              </p>
            </div>
          </div>

          {/* Item 05: Dates (Plump Medjool — Spans 4 cols) */}
          <div
            className="cat-editorial-card"
            style={{
              gridColumn: "span 4",
              cursor: "pointer",
            }}
            onClick={() => onSelectCategory("Dates")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onSelectCategory("Dates")}
            aria-label="Filter catalogue by Dates"
          >
            <div
              className="editorial-img-frame"
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "2px",
                border: "1px solid var(--border-swiss)",
              }}
            >
              <img
                src={productCategories[4].image}
                alt={productCategories[4].name}
                loading="eager"
                decoding="async"
              />
            </div>

            <div
              style={{
                paddingTop: "0.75rem",
                borderBottom: "1px solid var(--border-subtle)",
                paddingBottom: "0.75rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="swiss-numeral">[PROFILE 05]</span>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "var(--brand-forest)", textTransform: "uppercase" }}>Filter →</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: "1.45rem", color: "var(--dark-espresso)", marginTop: "0.15rem" }}>
                {productCategories[4].name}
              </h3>
              <p style={{ fontSize: "0.75rem", color: "var(--text-cocoa-muted)", marginTop: "0.2rem" }}>
                Plump, succulent caramel-rich fruit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cat-editorial-card {
          transition: transform 0.3s var(--ease-editorial);
        }
        .cat-editorial-card:hover {
          transform: translateY(-4px);
        }
        @media (max-width: 900px) {
          .cat-card-almonds {
            grid-column: span 12 !important;
          }
          .cat-card-cashews {
            grid-column: span 12 !important;
          }
          .cat-editorial-card {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 600px) {
          .cat-editorial-card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
