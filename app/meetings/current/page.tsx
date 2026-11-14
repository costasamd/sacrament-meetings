import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getMeetings } from "@/lib/meeting-db";


export default async function CurrentMeetingPage() {

    await connection();

    const today = new Date();
    const dayOfWeek = today.getDay();
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dayOfWeek);

    const isoSunday = sunday.toISOString().split('T')[0];
    const matchingMeeting = getMeetings(isoSunday);

    if (matchingMeeting.length > 0) {
        redirect(`/meetings/${matchingMeeting[0].id}`);
    }

    redirect('/meetings');
}