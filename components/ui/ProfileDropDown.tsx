import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import { formatFullName } from "@/utils";
import {
  ChevronDown,
  FolderArchive,
  LayoutDashboard,
  Settings,
  User,
  UserCheck2Icon,
} from "lucide-react";
import Logout from "../Logout";
import { AnimatePresence, motion } from "framer-motion";

const ProfileDropDown = ({
  profileRef,
  initials,
  user,
  profileOpen,
  setProfileOpen,
}) => {
  console.log(user)
  return (
    <div className="relative" ref={profileRef}>
      <button 
      className="flex items-center"
        onClick={() => setProfileOpen((prev: boolean) => !prev)}>
        <Avatar className="w-12 h-12 font-bold shadow-lg">
          <AvatarImage
            src={user?.image ?? ""}
            alt={initials ?? ""}
            className="w-full h-full object-cover"
          />
          <AvatarFallback className="p-5">{initials}</AvatarFallback>
        </Avatar>
          <ChevronDown size={15} />
      </button>

      <AnimatePresence>
        {profileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 bg-white mt-2 shadow-lg rounded-bl-md rounded-br-md p-4 max-w-md overflow-hidden"
          >
            <Link
              href={`/dashboard/${user?.role}`}
              className="flex gap-2 items-center py-2 hover:bg-gray-100"
            >
              <button>
                <Avatar className="w-12 h-12 font-bold">
                  <AvatarImage
                    src={user?.image || ""}
                    alt={initials || ""}
                    className="w-full h-full object-cover"
                  />
                  <AvatarFallback className="p-2 border border-neutral-500">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </button>

              <div>
                <h2 className="font-bold text-sm">
                  {formatFullName(user?.name)}
                </h2>
                <h4 className="font-extralight text-xs">{user?.email}</h4>
              </div>
            </Link>
            <div className="w-full h-[.1px] bg-gray-300 mb-2" />
            <Link
              href={`/dashboard/${user?.role}/profile`}
              className="flex gap-1 items-center py-2 text-xs hover:bg-gray-100"
            >
              <User size={18} />
              Profile
            </Link>
            {user?.role === "user" && (
              <Link
                href={`${user?.role}/become-agent`}
                className="flex gap-1 items-center py-2 text-xs hover:bg-gray-100 rounded-full border border-gray-300"
              >
                <UserCheck2Icon size={18} />
                Become an Agent
              </Link>
            )}
            <Link
              href="/collection"
              className="flex gap-1 items-center py-2 text-xs hover:bg-gray-100"
            >
              <FolderArchive size={18} />
              Collections
            </Link>
            {/* <Help /> */}
            <Link
              href={`/dashboard/${user.role}`}
              className="flex gap-1 items-center py-2 text-xs hover:bg-gray-100"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
            <Link
              href={`/dashboard/${user?.role}/settings`}
              className="flex gap-1 items-center py-2 text-xs hover:bg-gray-100 mb-2"
            >
              <Settings size={18} />
              Settings
            </Link>
            <Logout />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropDown;
