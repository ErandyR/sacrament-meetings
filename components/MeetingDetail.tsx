
import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
    meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
    return (
        <article className="bg-white shadow-md rounded-lg p-6">

            <header className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                    Sacrament Meeting Program
                </h2>

                <p className="text-gray-600">
                    <strong>Date:</strong> {meeting.date}
                </p>

                <p className="text-gray-600">
                    <strong>Meeting Type:</strong> {meeting.meetingType}
                </p>

                <p className="text-gray-600">
                    <strong>Presiding:</strong> {meeting.presiding}
                </p>

                <p className="text-gray-600">
                    <strong>Conducting:</strong> {meeting.conducting}
                </p>
            </header>

            {meeting.announcements && meeting.announcements.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">
                        Announcements
                    </h3>

                    <ul className="list-disc pl-5">
                        {meeting.announcements.map((announcement, index) => (
                            <li key={index}>{announcement}</li>
                        ))}
                    </ul>
                </section>
            )}

            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                    Opening
                </h3>

                <p>
                    <strong>Opening Hymn:</strong>{" "}
                    {meeting.openingHymn.title} (Hymn {meeting.openingHymn.number})
                </p>

                <p>
                    <strong>Opening Prayer:</strong> {meeting.openingPrayer}
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                    Ward Business
                </h3>

                {meeting.wardBusiness.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {meeting.wardBusiness.map((item, index) => (
                            <li key={index}>{item.description}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No ward business.</p>
                )}

                <p className="mt-2">
                    <strong>Stake Business:</strong>{" "}
                    {meeting.stakeBusiness ? "Yes" : "No"}
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                    Sacrament
                </h3>

                <p>
                    <strong>Sacrament Hymn:</strong>{" "}
                    {meeting.sacramentHymn.title} (Hymn {meeting.sacramentHymn.number})
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                    Speakers and Musical Numbers
                </h3>

                <ul className="list-disc pl-5">
                    {meeting.speakers.map((item, index) => (
                        <li key={`${item.name}-${index}`}>
                            <strong>{item.name}</strong>
                            {" - "}
                            {item.type === "speaker"
                                ? `Speaker: ${item.topic}`
                                : "Musical Number"}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className="text-lg font-semibold mb-2">
                    Closing
                </h3>

                <p>
                    <strong>Closing Hymn:</strong>{" "}
                    {meeting.closingHymn.title} (Hymn {meeting.closingHymn.number})
                </p>

                <p>
                    <strong>Closing Prayer:</strong> {meeting.closingPrayer}
                </p>
            </section>

        </article>
    );
}
