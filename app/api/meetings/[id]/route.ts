import { NextRequest, NextResponse } from "next/server";
import { getMeetingById } from "@/lib/meeting-db";

export async function GET(
    _request: NextRequest,
    {params}: {params: Promise<{id:string}>}
){
    const {id} = await params;
    const numericId = Number(id);

    if (!id.trim() || !Number.isInteger(numericId) || numericId <= 0) {
        return NextResponse.json(
            {error: 'Invalid meeting Id. Expected a positive number.'},
            {status: 400}
        );

    }

    const meeting = getMeetingById(numericId);

    if (!meeting){
        return NextResponse.json(
            {error: 'Meeting not found.'},
            {status: 404}
        );
    }

    return NextResponse.json(meeting, {status: 200});
}