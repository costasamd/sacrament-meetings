import { NextRequest, NextResponse } from "next/server";
import { getMeetings, getMeetingByDate } from "@/lib/meeting-db";

export async function GET(request: NextRequest) {
    
    const params = request.nextUrl.searchParams;
    const date = params.get("date");

    if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: 'Invalid date. Expected YYYY-MM-DD.' }, { status: 400 });
    }

    if(date){
        const meeting = await getMeetingByDate(date);
        return NextResponse.json(meeting ? [meeting]: [], {status: 200});
    }

    const query = params.get("query") ?? "";
    const page = Number(params.get("page") ?? 1);

    const meeting = await getMeetings(query, page);

    return NextResponse.json(meeting, {status: 200});
}