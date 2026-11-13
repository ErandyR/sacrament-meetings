
import { getMeetings } from "@/lib/meeting-db";

export function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const date = searchParams.get("date");

    const meetings = getMeetings(date);

    return Response.json(meetings);
}
