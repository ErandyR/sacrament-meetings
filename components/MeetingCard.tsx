
import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
    meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
    return (
        <article className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 mb-5 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
                {meeting.date}
            </h2>

            <div className="space-y-2 text-gray-800">
                <p>
                    <strong className="text-gray-950">Meeting Type:</strong>{" "}
                    {meeting.meetingType}
                </p>

                <p>
                    <strong className="text-gray-950">Presiding:</strong>{" "}
                    {meeting.presiding}
                </p>

                <p>
                    <strong className="text-gray-950">Conducting:</strong>{" "}
                    {meeting.conducting}
                </p>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-200">
                <Link
                    href={`/meetings/${meeting.id}`}
                    className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
                >
                    View Meeting Details →
                </Link>
            </div>
        </article>
    );
}
