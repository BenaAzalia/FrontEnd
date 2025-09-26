"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { FaShoppingCart, FaHeart, FaBell, FaUser } from "react-icons/fa";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex h-[var(--header-height)] shrink-0 items-center gap-2 border-b border-gray-200 bg-green-50 transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-2 px-4 lg:px-6">
        {/* Sidebar trigger */}
        <SidebarTrigger className="-ml-1 text-green-700 hover:text-green-800" />

        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-6"
        />

        <h1 className="text-lg font-semibold text-green-700">E-Commerce</h1>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-4 text-green-700">
          <Link href="/cart" className="hover:text-green-900">
            <FaShoppingCart size={18} />
          </Link>
          <Link href="/wishlist" className="hover:text-green-900">
            <FaHeart size={18} />
          </Link>
          <Link href="/notifications" className="hover:text-green-900">
            <FaBell size={18} />
          </Link>
          <Link href="/profile" className="hover:text-green-900">
            <FaUser size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
