import MeetingCard from "@/components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";
import {connection} from "next/server"



function getBaseUrl() {
    if (process.env.VERCEL_URL){
        return `https://${process.env.VERCERL_URL}`;
    }
    return 'http://localhost:3000';
}

export default async function MeetingsPage() {

    await connection();

    const response = await fetch(`${getBaseUrl()}/api/meetings`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error ('Failed to fetch meeting');
    }

    const meetings: SacramentMeeting[] = await response.json();

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Sacrament Meeting</h2>
            <div className="grid gap-4">
                {meetings.map((meeting) => (
                    <MeetingCard key={meeting.id} meeting={meeting} />
                ))}
            </div>

        </div>
    )
}
