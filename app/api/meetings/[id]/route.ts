import { getMeetingById } from "@/lib/meeting-db";

interface RouteContext {
    params: Promise<{ id: string }>;
}

export async function GET(
    _request: Request,
    { params }: RouteContext
) {
    const { id } = await params;
    const meetingId = Number(id);

    // Check whether the ID is valid
    if (!Number.isInteger(meetingId) || meetingId <= 0) {
        return Response.json(
            { error: "Invalid meeting ID" },
            { status: 400 }
        );
    }

    // Look for the requested meeting
    const meeting = getMeetingById(meetingId);

    // Return 404 if it doesn't exist
    if (!meeting) {
        return Response.json(
            { error: "Meeting not found" },
            { status: 404 }
        );
    }

    return Response.json(meeting);
}