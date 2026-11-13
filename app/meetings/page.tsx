import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

export default async function MeetingsPage() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/meetings`,
        { cache: "no-store" }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch meetings");
    }

    const meetings: SacramentMeeting[] = await response.json();

    return (
        <section>
            <header className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    All Sacrament Meetings
                </h2>

                <p className="text-gray-600 mt-2">
                    View previous and upcoming meeting programs.
                </p>
            </header>

            {meetings.length > 0 ? (
                meetings.map((meeting) => (
                    <MeetingCard
                        key={meeting.id}
                        meeting={meeting}
                    />
                ))
            ) : (
                <p className="text-gray-600">
                    No meetings found.
                </p>
            )}
        </section>
    );
}