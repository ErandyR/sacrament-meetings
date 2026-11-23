
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getMeetingByDate } from "@/lib/meeting-db";

export default async function CurrentMeetingPage() {
    // Wait until the page is rendered dynamically
    await connection();

    // Calculate the date of the current Sunday
    const today = new Date();
    const currentSunday = new Date(today);

    currentSunday.setDate(today.getDate() - today.getDay());

    // Format the date as YYYY-MM-DD
    const year = currentSunday.getFullYear();
    const month = String(currentSunday.getMonth() + 1).padStart(2, "0");
    const day = String(currentSunday.getDate()).padStart(2, "0");

    const sundayDate = `${year}-${month}-${day}`;

    // Retrieve the meeting scheduled for this Sunday
    const currentMeeting = await getMeetingByDate(sundayDate);

    // Redirect to the meeting details page if a meeting exists
    if (currentMeeting) {
        redirect(`/meetings/${currentMeeting.id}`);
    }

    // Display a message if no meeting is found
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
