import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import image1 from "@/public/assets/elite-prop-hmlP-v0vJ5o-unsplash.jpg";
import image2 from "@/public/assets/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg";
import image3 from "@/public/assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg";
import image4 from "@/public/assets/lotus-design-n-print-wRzBarqn3hs-unsplash.jpg";
import image5 from "@/public/assets/real-estate-img3.jpg";
import image6 from "@/public/assets/vlad-kutepov-AjIRkHlJdTs-unsplash.jpg";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Settings,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Building2,
  MessageCircle,
  ArrowLeftRight,
  UserCircle,
  List,
  KeyRound,
  Receipt,
  Bell,
  BookmarkCheck,
  ListChecksIcon,
  User,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const inputClass =
  "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-black/10 focus:border-gray-400 outline-none transition";

export const listings = [
  {
    id: 1,
    image: image1,
    price: 850000,
    country: "Luton, England",
    title: "Brenton Hux",
    address: "Austin, TX",
    bedrooms: 4,
    listingType: "for rent",
    bathrooms: 3,
  },
  {
    id: 2,
    image: image2,
    price: 2800,
    country: "Luton, England",
    title: "Luxemborg House",
    address: "Seattle, WA",
    bedrooms: 3,
    bathrooms: 2,
    listingType: "for sale",
  },
  {
    id: 3,
    image: image3,
    price: 850000,
    country: "Luton, England",
    title: "Trenton Triag",
    address: "Austin, TX",
    bedrooms: 4,
    listingType: "for rent",
    bathrooms: 3,
  },
  {
    id: 4,
    image: image4,
    price: 2800,
    country: "Luton, England",
    title: "Wixtell Taram",
    address: "Seattle, WA",
    bedrooms: 3,
    bathrooms: 2,
    listingType: "for sale",
  },
  {
    id: 5,
    image: image5,
    price: 850000,
    country: "Luton, England",
    title: "Genger Genos",
    address: "Austin, TX",
    bedrooms: 4,
    listingType: "for rent",
    bathrooms: 3,
  },
  {
    id: 6,
    image: image6,
    price: 2800,
    country: "Luton, England",
    title: "Restion juin",
    address: "Seattle, WA",
    bedrooms: 3,
    bathrooms: 2,
    listingType: "for sale",
  },
];

export const SETTINGS_NAVS = [
  {
      id: "profile",
      label: "Profile",
      path: "/settings/profile",
      icon: User,
    },
    {
      id: "privacy",
      label: "Privacy",
      path: "/settings/privacy",
      icon: KeyRound,
    },
    {
      id: "security",
      label: "Security",
      path: "/settings/security",
      icon: Shield,
    },
    {
      id: "billings",
      label: "Billings",
      path: "/settings/billings",
      icon: Receipt,
    },
    {
      id: "notifications",
      label: "Notifications",
      path: "/settings/notifications",
      icon: Bell,
    },
]

export const SIDEBAR_NAVS = {
  USER: [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/dashboard/user",
      icon: LayoutDashboard,
    },
    {
      id: "bookmarks",
      label: "Bookmarks",
      path: "/dashboard/user/bookmarks",
      icon: BookmarkCheck,
    },
    {
      id: "messages",
      label: "Messages",
      path: "/dashboard/user/messages",
      icon: MessageSquare,
    },
  ],
  AGENT: [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/dashboard/agent",
      icon: LayoutDashboard,
    },
    {
      id: "clients",
      label: "Clients",
      path: "/dashboard/agent/clients",
      icon: Users,
    },
    {
      id: "create-listing",
      label: "Create Listing",
      path: "/dashboard/agent/create-listing",
      icon: ListChecksIcon,
    },
    {
      id: "deals",
      label: "Deals",
      path: "/dashboard/agent/deals",
      icon: Briefcase,
    },
    {
      id: "reports",
      label: "Reports",
      path: "/dashboard/agent/reports",
      icon: BarChart3,
    },
  ],
  ADMIN: [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      id: "users",
      label: "Users",
      path: "/dashboard/admin/users",
      icon: Users,
    },
    {
      id: "roles",
      label: "Roles & Permissions",
      path: "/dashboard/admin/roles",
      icon: Shield,
    },
    {
      id: "companies",
      label: "Companies",
      path: "/dashboard/admin/companies",
      icon: Building2,
    },
    {
      id: "logs",
      label: "System Logs",
      path: "/dashboard/admin/logs",
      icon: FileText,
    },
    {
      id: "agents",
      label: "Agents",
      path: "/dashboard/admin/agents",
      icon: UserCircle,
    },
    {
      id: "listings",
      label: "Listings",
      path: "/dashboard/admin/listings",
      icon: List,
    },
    {
      id: "transaction",
      label: "System Transaction",
      path: "/dashboard/admin/transaction",
      icon: ArrowLeftRight,
    },
    {
      id: "message",
      label: "Message",
      path: "/dashboard/admin/message",
      icon: MessageCircle,
    },
  ],
};

  // company_admin: [
  //   {
  //     id: "dashboard",
  //     label: "Dashboard",
  //     path: "/dashboard/company",
  //     icon: LayoutDashboard,
  //   },
  //   {
  //     id: "employees",
  //     label: "Employees",
  //     path: "/dashboard/company/employees",
  //     icon: Users,
  //   },
  //   {
  //     id: "departments",
  //     label: "Departments",
  //     path: "/dashboard/company/departments",
  //     icon: Building2,
  //   },
  //   {
  //     id: "billing",
  //     label: "Billing",
  //     path: "/dashboard/company/billing",
  //     icon: CreditCard,
  //   },
  //   {
  //     id: "reports",
  //     label: "Reports",
  //     path: "/dashboard/company/reports",
  //     icon: BarChart3,
  //   },
  //   {
  //     id: "settings",
  //     label: "Settings",
  //     path: "/dashboard/company/settings",
  //     icon: Settings,
  //   },
  // ],