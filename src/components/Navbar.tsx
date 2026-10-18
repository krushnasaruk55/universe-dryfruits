import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenMobileNav: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenMobileNav,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? "rgba(246, 241, 232, 0.96)" : "rgba(246, 241, 232, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-swiss)",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "3.5rem", // Sleek 56px height
        }}
      >
        {/* Left: Refined Typographic Wordmark */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.5rem",
            textDecoration: "none",
            color: "var(--brand-forest)",
          }}
          aria-label="Universe Dryfruits Homepage"
        >
          <span
            className="font-serif"
            style={{
              fontSize: "1.15rem",
              letterSpacing: "0.06em",
              lineHeight: 1,
              fontWeight: 400,
            }}
          >
            UNIVERSE DRYFRUITS
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.5625rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-cocoa-light)",
              fontWeight: 600,
            }}
          >
            Wagholi · Pune
          </span>
        </a>

        {/* Center: Sleek Swiss Navigation Links */}
        <nav
          style={{
            display: "none",
            gap: "1.75rem",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          <a
            href="#hero"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--text-cocoa)",
              transition: "color 0.2s ease",
            }}
            className="nav-link"
          >
            Home
          </a>
          <a
            href="#categories"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--text-cocoa)",
              transition: "color 0.2s ease",
            }}
            className="nav-link"
          >
            Categories
          </a>
          <a
            href="#products"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--text-cocoa)",
              transition: "color 0.2s ease",
            }}
            className="nav-link"
          >
            Catalogue
          </a>
          <a
            href="#story"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--text-cocoa)",
              transition: "color 0.2s ease",
            }}
            className="nav-link"
          >
            Our Story
          </a>
          <a
            href="#location"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--text-cocoa)",
              transition: "color 0.2s ease",
            }}
            className="nav-link"
          >
            Visit Us
          </a>
        </nav>

        {/* Right: Compact Controls & CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              color: "var(--text-cocoa)",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            aria-label="Search dry fruit catalogue"
            className="icon-hover"
          >
            <Search size={15} strokeWidth={1.8} />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              color: "var(--text-cocoa)",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            aria-label={`View bag with ${cartCount} items`}
            className="icon-hover"
          >
            <ShoppingBag size={15} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "1px",
                  right: "1px",
                  backgroundColor: "var(--brand-forest)",
                  color: "var(--bg-ivory)",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  width: "1rem",
                  height: "1rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--bg-ivory)",
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Compact Primary CTA Button (Desktop) */}
          <a
            href="#products"
            className="btn-primary desktop-cta"
            style={{
              padding: "0.45rem 1rem",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              gap: "0.4rem",
              marginLeft: "0.35rem",
            }}
          >
            <span>Explore</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={onOpenMobileNav}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
              color: "var(--text-cocoa)",
            }}
            className="mobile-menu-btn"
            aria-label="Open mobile menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-cta {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--brand-forest) !important;
        }
        .icon-hover:hover {
          background: rgba(52, 40, 32, 0.05);
          color: var(--brand-forest);
        }
      `}</style>
    </header>
  );
};
