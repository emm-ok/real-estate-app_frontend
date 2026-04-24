// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-3">HomeFinders</h3>
          <p className="text-sm text-gray-400">
            Your trusted partner in finding homes.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Buy</li>
            <li>Rent</li>
            <li>Sell</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>About</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-400">
            info@homefinders.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// import React from "react";
// import Image from "next/image";
// import logo from "@/assets/logo2.png";
// import { footer1Links, footer2Links, footer3Links } from "@/lib/footerLinks";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="w-full z-10 py-12 px-4 md:px-16 bg-gray-900 text-white text-center">
//       <Image
//         src={logo}
//         alt="Company logo"
//         width={50}
//         height={50}
//         loading="eager"
//         className="rounded-full shadow-sm"
//       />
//       <div className="grid grid-cols-3 my-4">
//         <ul>
//         {footer1Links.map((link) => (
//             <li key={link.name} className="text-left">
//                 <Link href={link.href}className="hover:underline">{link.name}</Link>
//             </li>
//       ))}
//       </ul>
//       <ul>
//         {footer2Links.map((link) => (
//             <li key={link.name} className="text-left">
//                 <Link href={link.href}className="hover:underline">{link.name}</Link>
//             </li>
//       ))}
//       </ul>
//       <ul>
//         {footer3Links.map((link) => (
//             <li key={link.name} className="text-left">
//                 <Link href={link.href} className="hover:underline">{link.name}</Link>
//             </li>
//       ))}
//       </ul>
//       </div>
//       <p>
//         &copy; {new Date().getFullYear()} VeriSpace Real Estate Co. All Rights
//         reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
