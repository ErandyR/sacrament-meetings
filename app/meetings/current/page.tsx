import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meeting-db";

export default async function CurrentMeetingPage() {
    const today = new Date();

    // Find the most recent Sunday
    const currentSunday = new Date(today);
    currentSunday.setDate(today.getDate() - today.getDay());

    // Format using local date values
    const year = currentSunday.getFullYear();
    const month = String(currentSunday.getMonth() + 1).padStart(2, "0");
    const day = String(currentSunday.getDate()).padStart(2, "0");

    const sundayDate = `${year}-${month}-${day}`;

    // Find the meeting for that Sunday
    const meetings = getMeetings(sundayDate);
    const currentMeeting = meetings[0];

    if (currentMeeting) {
        redirect(`/meetings/${currentMeeting.id}`);
    }

    return (
        <div className="text-center py-12">
            <h2 className="text-xl font-semibold">
                No meeting found
            </h2>

            <p className="text-gray-600 mt-2">
                There is no meeting scheduled for this Sunday.
            </p>
        </div>
    );
}