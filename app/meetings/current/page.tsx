
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getMeetings } from "@/lib/meeting-db";

export default async function CurrentMeetingPage() {
    await connection();

    const today = new Date();
    const currentSunday = new Date(today);

    currentSunday.setDate(today.getDate() - today.getDay());

    const year = currentSunday.getFullYear();
    const month = String(currentSunday.getMonth() + 1).padStart(2, "0");
    const day = String(currentSunday.getDate()).padStart(2, "0");

    const sundayDate = `${year}-${month}-${day}`;

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
