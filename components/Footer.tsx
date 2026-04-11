import React from "react";
import Image from "next/image";
import logo from "@/assets/logo2.png";
import { footer1Links, footer2Links, footer3Links } from "@/lib/footerLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full z-10 py-12 px-4 md:px-16 bg-gray-900 text-white text-center">
      <Image
        src={logo}
        alt="Company logo"
        width={50}
        height={50}
        loading="eager"
        className="rounded-full shadow-sm"
      />
      <div className="grid grid-cols-3 my-4">
        <ul>
        {footer1Links.map((link) => (
            <li key={link.name} className="text-left">
                <Link href={link.href}className="hover:underline">{link.name}</Link>
            </li>
      ))}
      </ul>
      <ul>
        {footer2Links.map((link) => (
            <li key={link.name} className="text-left">
                <Link href={link.href}className="hover:underline">{link.name}</Link>
            </li>
      ))}
      </ul>
      <ul>
        {footer3Links.map((link) => (
            <li key={link.name} className="text-left">
                <Link href={link.href} className="hover:underline">{link.name}</Link>
            </li>
      ))}
      </ul>
      </div>
      <p>
        &copy; {new Date().getFullYear()} VeriSpace Real Estate Co. All Rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
