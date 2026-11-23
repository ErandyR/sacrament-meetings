import NavLinks from "@/components/NavLinks";

export default function MeetingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-5xl mx-auto">

                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Sacrament Meetings
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Manage your sacrament meeting schedules and information.
                    </p>
                </header>

                <NavLinks />

                <main className="mt-6 bg-white rounded-lg shadow-md p-6">
                    {children}
                </main>

            </div>
        </section>
    );
}