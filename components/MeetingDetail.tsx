
import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
    meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
    const sectionStyle =
        "bg-gray-50 border border-gray-200 rounded-xl p-5 mb-5";

    const headingStyle =
        "text-lg font-bold text-gray-900 mb-3";

    const textStyle =
        "text-gray-800 leading-relaxed";

    return (
        <article className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 md:p-8">

            {/* Meeting Header */}
            <header className="mb-8 pb-6 border-b border-gray-200">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-2">
                    Meeting Program
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-4">
                    Sacrament Meeting
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
                    <p>
                        <strong className="text-gray-950">Date:</strong>{" "}
                        {meeting.date}
                    </p>

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
            </header>

            {/* Announcements */}
            {meeting.announcements && meeting.announcements.length > 0 && (
                <section className={sectionStyle}>
                    <h3 className={headingStyle}>Announcements</h3>

                    <ul className="list-disc pl-5 space-y-2 text-gray-800">
                        {meeting.announcements.map((announcement, index) => (
                            <li key={index}>{announcement}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Opening */}
            <section className={sectionStyle}>
                <h3 className={headingStyle}>Opening</h3>

                <div className="space-y-3 text-gray-800">
                    <p>
                        <strong className="text-gray-950">Opening Hymn:</strong>{" "}
                        {meeting.openingHymn.title} (Hymn {meeting.openingHymn.number})
                    </p>

                    <p>
                        <strong className="text-gray-950">Opening Prayer:</strong>{" "}
                        {meeting.openingPrayer}
                    </p>
                </div>
            </section>

            {/* Ward Business */}
            <section className={sectionStyle}>
                <h3 className={headingStyle}>Ward Business</h3>

                {meeting.wardBusiness.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-2 text-gray-800">
                        {meeting.wardBusiness.map((item, index) => (
                            <li key={index}>{item.description}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-700">No ward business.</p>
                )}

                <p className="mt-4 text-gray-800">
                    <strong className="text-gray-950">Stake Business:</strong>{" "}
                    {meeting.stakeBusiness ? "Yes" : "No"}
                </p>
            </section>

            {/* Sacrament */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
                <h3 className="text-lg font-bold text-blue-950 mb-3">
                    Sacrament
                </h3>

                <p className="text-gray-900">
                    <strong>Sacrament Hymn:</strong>{" "}
                    {meeting.sacramentHymn.title} (Hymn {meeting.sacramentHymn.number})
                </p>
            </section>

            {/* Speakers and Musical Numbers */}
            <section className={sectionStyle}>
                <h3 className={headingStyle}>
                    Speakers and Musical Numbers
                </h3>

                {meeting.speakers.length > 0 ? (
                    <ul className="space-y-3 text-gray-800">
                        {meeting.speakers.map((item, index) => (
                            <li
                                key={`${item.name}-${index}`}
                                className="border-b border-gray-200 pb-3 last:border-0 last:pb-0"
                            >
                                <p className="font-semibold text-gray-950">
                                    {item.name}
                                </p>

                                <p className="text-gray-700">
                                    {item.type === "speaker"
                                        ? `Speaker: ${item.topic}`
                                        : `Musical Number: ${item.topic}`}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-700">No speakers or musical numbers.</p>
                )}
            </section>

            {/* Closing */}
            <section className={sectionStyle}>
                <h3 className={headingStyle}>Closing</h3>

                <div className="space-y-3 text-gray-800">
                    <p>
                        <strong className="text-gray-950">Closing Hymn:</strong>{" "}
                        {meeting.closingHymn.title} (Hymn {meeting.closingHymn.number})
                    </p>

                    <p>
                        <strong className="text-gray-950">Closing Prayer:</strong>{" "}
                        {meeting.closingPrayer}
                    </p>
                </div>
            </section>

        </article>
    );
}
