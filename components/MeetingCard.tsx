
import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
    meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
    return (
        <article className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">
                {meeting.date}
            </h2>

            <p className="text-gray-600 mb-1">
                <strong>Meeting Type:</strong> {meeting.meetingType}
            </p>

            <p className="text-gray-600 mb-1">
                <strong>Presiding:</strong> {meeting.presiding}
            </p>

            <p className="text-gray-600 mb-3">
                <strong>Conducting:</strong> {meeting.conducting}
            </p>

            <Link
                href={`/meetings/${meeting.id}`}
                className="text-blue-600 hover:underline font-medium"
            >
                View Meeting Details
            </Link>
        </article>
    );
}
