
"use client";

import { useEffect, useState } from "react";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-gray-800 py-4 text-white mt-12">
            <div className="container mx-auto text-center">
                <p>
                    Copyright © {currentYear ?? ""} | Erandy Ramirez | All rights reserved
                </p>
            </div>
        </footer>
    );
}
