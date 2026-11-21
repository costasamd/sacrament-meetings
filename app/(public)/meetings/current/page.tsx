import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getMeetingByDate } from "@/lib/meeting-db";
import { Suspense } from "react";

export default async function CurrentMeetingPage() {

    await connection();

    const today = new Date();
    const dayOfWeek = today.getDay();
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dayOfWeek);
    const isoSunday = sunday.toISOString().split('T')[0];
    
    const meeting = await getMeetingByDate(isoSunday);

    if (meeting) redirect(`/meetings/${meeting.id}`);

    redirect('/meetings');
}