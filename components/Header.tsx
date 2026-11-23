
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div id="header-title" className="text-2xl font-bold text-center">
                Ward Xicohtzinco
            </div>

            <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-white hover:text-gray-200">
                    Home
                </Link>

                <Link href="/meetings" className="text-white hover:text-gray-200">
                    Meetings
                </Link>
            </nav>
        </header>
    );
}
