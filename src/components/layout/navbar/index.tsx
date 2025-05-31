"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    setIsSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <>
      {/* Navbar chính */}
      <div
        className={cn(
          "fixed top-10 inset-x-0 w-11/12 flex justify-between items-center mx-auto z-50 rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input px-8 py-4"
        )}
      >
        <div className="">
          <p className="text-black font-bold cursor-pointer">logo</p>
        </div>

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
              <HoveredLink href="/pages/shop/products">All product</HoveredLink>
              <HoveredLink href="/pages/shop/product/1">
                Product Detail
              </HoveredLink>
              <HoveredLink href="/pages/services">All Services</HoveredLink>
              <HoveredLink href="/pages/service/1">Service Detail</HoveredLink>
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
          <MenuItem setActive={setActive} active={active} item="News">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/pages/news">Our Blog</HoveredLink>
              <HoveredLink href="/pages/news/sample-news">
                Blog Details
              </HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/pages/contact">Contact</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
        </Menu>

        {/* Icon tìm kiếm bên phải */}
        <button
          onClick={toggleSearch}
          aria-label="Open search"
          className="p-2 rounded-full hover:bg-gray-200 transition"
          title="Search"
        >
          <FaSearch className="text-green-500 text-xl" />
        </button>

        {/* <div>
          <p className="text-black font-bold">user</p>
        </div> */}
      </div>

      {/* Modal tìm kiếm */}
      {isSearchOpen && (
        <div
          className="w-full fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className=" rounded-lg bg-transparent p-6 w-full py-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="font-extrabold font-sans text-5xl text-green-400 text-center">
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
              <button type="submit" className="">
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
