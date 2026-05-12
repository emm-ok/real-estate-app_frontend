"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo1.png";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Role } from "@/types";
import { SIDEBAR_NAVS } from "@/lib/utils";
import Logout from "../auth/Logout";
import { LogOut } from "lucide-react";

interface SidebarProps {
  role: Role;
  children: ReactNode;
}

export default function Sidebar({ role, children }: SidebarProps) {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  const navItems = SIDEBAR_NAVS[role] || [];

  const isActive = (href: string) => pathname === href;

  return (
    <div>
      <motion.aside
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        //   onClick={() => setExpanded(!expanded)}
        animate={{ width: expanded ? 260 : 64 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="fixed h-screen z-50 bg-gray-100 shadow-lg flex flex-col gap-8 p-4 pointer-events-auto"
      >
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            {expanded && <span className="font-bold">VeriSpace</span>}
          </Link>
        </div>

        <nav className="flex flex-col gap-2 pointer-events-auto">
          {navItems.map((nav) => {
            const Icon = nav.icon;
            return (
              <Link
                key={nav.id}
                href={nav.path}
                className={`flex items-center text-xs rounded-md transition-colors duration-200 p-2 cursor-pointer
                  ${
                    isActive(nav.path)
                      ? "bg-neutral-800 text-white"
                      : "hover:bg-gray-200"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <Icon size={18} />
                  {expanded && nav.label}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="gap-4 p-3">
          {!user && (expanded ? <Logout /> : <LogOut size={18} />)}
        </div>
      </motion.aside>
      <div className="flex justify-center items-center mt-10">{children}</div>
    </div>
  );
}
