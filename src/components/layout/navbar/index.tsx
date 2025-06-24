"use client";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { MobileDropdown } from "@/components/ui/MobileDropdown";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={cn(
          "fixed top-5 inset-x-0 w-11/12 flex justify-between items-center mx-auto z-50 rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white text-black shadow-input px-6 py-3"
        )}
      >
        <div className=" font-bold cursor-pointer text-green-700">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-bold">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/">Home 1</HoveredLink>
                <HoveredLink href="/home2">Home 2</HoveredLink>
              </div>
            </MenuItem>
            <HoveredLink href="/pages/about">About Us</HoveredLink>
            <MenuItem setActive={setActive} active={active} item="Pages">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/pages/shop">Shop</HoveredLink>
                <HoveredLink href="/pages/shop/products">
                  All Products
                </HoveredLink>
                <HoveredLink href="/pages/shop/product/1">
                  Product Detail
                </HoveredLink>
                <HoveredLink href="/pages/services">All Services</HoveredLink>
                <HoveredLink href="/pages/service/1">
                  Service Detail
                </HoveredLink>
                <HoveredLink href="/pages/shop/cart">Cart</HoveredLink>
                <HoveredLink href="/pages/shop/checkout">Checkout</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Auth">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/auth/login">Login</HoveredLink>
                <HoveredLink href="/auth/signup">Register</HoveredLink>
                <HoveredLink href="/auth/forget">Forgot</HoveredLink>
                <HoveredLink href="/auth/reset">Reset</HoveredLink>
                <HoveredLink href="/auth/profile">Profile</HoveredLink>
              </div>
            </MenuItem>
            <HoveredLink href="/pages/contact">Contact</HoveredLink>
          </Menu>
        </div>

        {/* Mobile Search + Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSearch}
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <FaSearch className="text-green-700 text-xl" />
          </button>
          <button onClick={toggleMobileMenu} className="md:hidden p-2">
            {mobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-20 left-0 w-full bg-black text-white z-[60] md:hidden px-4 py-6 space-y-4 shadow-lg">
          <MobileDropdown
            title="Home"
            links={[
              { label: "Home 1", href: "/" },
              { label: "Home 2", href: "/home2" },
            ]}
          />

          <MobileDropdown
            title="Pages"
            links={[
              { label: "Shop", href: "/pages/shop" },
              { label: "All Products", href: "/pages/shop/products" },
              { label: "Product Detail", href: "/pages/shop/product/1" },
              { label: "All Services", href: "/pages/services" },
              { label: "Service Detail", href: "/pages/service/1" },
              { label: "Cart", href: "/pages/shop/cart" },
              { label: "Checkout", href: "/pages/shop/checkout" },
            ]}
          />
          <MobileDropdown
            title="Auth"
            links={[
              { label: "Login", href: "/auth/login" },
              { label: "Register", href: "/auth/signup" },
              { label: "Forgot", href: "/auth/forget" },
              { label: "Reset", href: "/auth/reset" },
              { label: "Profile", href: "/auth/profile" },
            ]}
          />
          <a
            href="/pages/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-white hover:text-green-400 transition border-b p-2"
          >
            About
          </a>
          <a
            href="/pages/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-bold text-white hover:text-green-400 transition border-b p-2"
          >
            Contact
          </a>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div
          className="w-full fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="rounded-lg bg-transparent p-6 w-full py-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="font-extrabold text-5xl text-green-400 text-center">
              ... SEARCH HERE ...
            </h1>
            <form
              onSubmit={handleSearchSubmit}
              className="w-11/12 mx-auto flex items-center gap-4 py-10"
            >
              <input
                type="text"
                autoFocus
                placeholder="Type keywords here ..."
                className="w-11/12 p-4 text-center bg-transparent outline-none border-b-2 text-xl border-green-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">
                <FaSearch className="text-green-500 text-3xl" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
