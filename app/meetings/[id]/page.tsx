import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

interface MeetingPageProps {
    params: Promise<{ id: string }>;
}

export default async function MeetingPage({ params }: MeetingPageProps) {
    const { id } = await params;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/meetings/${id}`,
        { cache: "no-store" }
    );

    if (response.status === 404 || response.status === 400) {
        notFound();
    }

    if (!response.ok) {
        throw new Error("Failed to fetch meeting details");
    }

    const meeting: SacramentMeeting = await response.json();

    return (
        <section>
            <MeetingDetail meeting={meeting} />
        </section>
    );
}