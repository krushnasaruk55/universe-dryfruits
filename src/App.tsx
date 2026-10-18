import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileNav } from "./components/MobileNav";
import { HeroSection } from "./components/HeroSection";
import { BrandIntroduction } from "./components/BrandIntroduction";
import { CategoryGrid } from "./components/CategoryGrid";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { BrandStory } from "./components/BrandStory";
import { GiftCollection } from "./components/GiftCollection";
import { CustomerFeedback } from "./components/CustomerFeedback";
import { StoreLocation } from "./components/StoreLocation";
import { Footer } from "./components/Footer";
import { CartDrawer, type CartItem } from "./components/CartDrawer";
import { ProductModal } from "./components/ProductModal";
import { EnquiryModal } from "./components/EnquiryModal";
import { DataModelModal } from "./components/DataModelModal";
import { SearchModal } from "./components/SearchModal";
import type { ProductItem, PackSize } from "./data/storeData";
import { useScrollReveal } from "./hooks/useScrollReveal";

export const App: React.FC = () => {
  useScrollReveal();

  // Navigation & Drawer states
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDataModelOpen, setIsDataModelOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  // Selected states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<ProductItem | null>(null);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Cart operations
  const handleAddToCart = (product: ProductItem, packSize: PackSize) => {
    const cartItemId = `${product.id}-${packSize.weight}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          product,
          packSize,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleOpenEnquiryForProduct = (product?: ProductItem) => {
    setEnquiryProduct(product || null);
    setIsEnquiryOpen(true);
  };

  const handleCategorySelectFromGrid = (cat: string) => {
    setSelectedCategory(cat);
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="universe-dryfruits-app">
      {/* 01. Sleek Editorial Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileNav={() => setIsMobileNavOpen(true)}
      />

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Editorial Content */}
      <main>
        {/* 03. Editorial Hero */}
        <HeroSection />

        {/* 04. Brand Introduction */}
        <BrandIntroduction />

        {/* 05. Product Categories */}
        <CategoryGrid
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelectFromGrid}
        />

        {/* 06. Featured Products */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onOpenProductModal={(p) => setActiveModalProduct(p)}
          onOpenEnquiry={(p) => handleOpenEnquiryForProduct(p)}
        />

        {/* 07. Brand Story & Customer Experience */}
        <BrandStory />

        {/* 08. Optional Gift Collection */}
        <GiftCollection onOpenEnquiry={() => handleOpenEnquiryForProduct()} />

        {/* 09. Customer Feedback */}
        <CustomerFeedback />

        {/* 10. Store Location & Contact */}
        <StoreLocation onOpenEnquiry={() => handleOpenEnquiryForProduct()} />
      </main>

      {/* 11. Footer */}
      <Footer onOpenDataModel={() => setIsDataModelOpen(true)} />

      {/* Interactive Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onProceedToEnquiry={() => setIsEnquiryOpen(true)}
      />

      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenEnquiry={(p) => handleOpenEnquiryForProduct(p)}
      />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        product={enquiryProduct}
        cartItems={cartItems}
      />

      <DataModelModal
        isOpen={isDataModelOpen}
        onClose={() => setIsDataModelOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenProductModal={(p) => setActiveModalProduct(p)}
      />
    </div>
  );
};

export default App;
