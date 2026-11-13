
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

function NavLinksContent() {
    const pathname = usePathname();

    const isHomeActive = pathname === "/";
    const isMeetingsActive = pathname.startsWith("/meetings");

    return (
        <nav aria-label="Primary" className="flex space-x-4">
            <Link
                href="/"
                className={isHomeActive
                    ? "font-medium text-blue-700 underline"
                    : "font-medium text-gray-700 hover:text-blue-700"}
                aria-current={isHomeActive ? "page" : undefined}
            >
                Home
            </Link>

            <Link
                href="/meetings"
                className={isMeetingsActive
                    ? "font-medium text-blue-700 underline"
                    : "font-medium text-gray-700 hover:text-blue-700"}
                aria-current={isMeetingsActive ? "page" : undefined}
            >
                Meetings
            </Link>
        </nav>
    );
}

export default function NavLinks() {
    return (
        <Suspense fallback={<nav aria-label="Primary" className="h-6" />}>
            <NavLinksContent />
        </Suspense>
    );
}
