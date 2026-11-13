"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();

    const isHomeActive = pathname === "/";
    const isMeetingsActive = pathname.startsWith("/meetings");

    return (
        <nav aria-label="Primary" className="flex space-x-4">
            <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium ${isHomeActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                aria-current={isHomeActive ? "page" : undefined}
            >
                Home
            </Link>

            <Link
                href="/meetings"
                className={`px-3 py-2 rounded-md text-sm font-medium ${isMeetingsActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                aria-current={isMeetingsActive ? "page" : undefined}
            >
                Meetings
            </Link>
        </nav>
    );
}