"use client";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import logo from "@/assets/logo2.png";
import { navLinks } from "@/lib/navLinks";
import { useAuth } from "@/context/AuthContext";
import Logout from "@/components/auth/Logout";
import ProfileDropDown from "../ui/ProfileDropDown";
import Loader from "../ui/Loader";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropDown, setMobileDropDown] = useState<string | null>(null);
  const [openDropDown, setOpenDropDown] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const { user, loading } = useAuth();

  const pathname = usePathname();
  console.log("user", user);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropDown(null);
  }, [pathname]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        !profileRef.current ||
        !profileRef.current.contains(event.target as Node)
      ) {
        setOpenDropDown(null);
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const getInitials = (name: string = "") => {
    const parts = name.trim().split(" ");
    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || "";
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const initials = getInitials(user?.name);

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-md">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="cursor-pointer flex items-center gap-2">
            <Image
              src={logo}
              alt="Company logo"
              width={50}
              height={50}
              loading="eager"
              className="rounded-full shadow-sm"
            />
            <span className="hidden md:block text-sm font-bold text-primary">
              VeriSpace
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 md:gap-4">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.subLinks && setOpenDropDown(link.name)}
                onMouseLeave={() => setOpenDropDown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center rounded-xs text font-medium trasition-colors ${
                    isActive(link.href)
                      ? "text-primary font-semibold border-primary"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}{" "}
                  {openDropDown === link.name ? (
                    <ChevronUp size={10} />
                  ) : (
                    <ChevronDown size={10} />
                  )}
                </Link>

                {/* Destop DropDown */}
                {link.subLinks && (
                  <AnimatePresence>
                    {openDropDown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg z-10"
                      >
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={`${link.href}/${sub.href}`}
                            className={`block px-4 py-2 text-sm bg-white transition hover:bg-gray-100 ${
                              isActive(`${link.href}/${sub.href}`)
                                ? "text-primary font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* {!user && (
              
            )} */}
            {!user && !loading && (
              <Link
                href="/sign-in"
                className="px-4 py-2 bg-neutral-800 rounded-md text-white"
              >
                Login
              </Link>
            )}
            {loading && <Loader />}

            {user && (
              <ProfileDropDown
                profileRef={profileRef}
                initials={initials}
                user={user}
                profileOpen={profileOpen}
                setProfileOpen={setProfileOpen}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-15 w-full z-10 md:hidden overflow-hidden bg-white"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {/* DropDown Links Button */}
                  <div className="flex items-center justify-between">
                    <Link href={link.href}>{link.name}</Link>
                    <button
                      onClick={() =>
                        setMobileDropDown((prev) =>
                          prev === link.name ? null : link.name,
                        )
                      }
                      className="flex justify-between items-center py-2 font-medium text-gray-700"
                    >
                      {mobileDropDown === link.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>

                  {/* Sub Links */}
                  <AnimatePresence>
                    {mobileDropDown === link.name && (
                      <motion.div
                        layout
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 flex flex-col"
                      >
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={`${link.href}/${sub.href}`}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileDropDown(null);
                            }}
                            className="py-1 text-sm text-gray-600 hover:text-primary"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {user && <Logout />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
