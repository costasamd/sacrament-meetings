import { SacramentMeeting } from "@/lib/types";
import Link from "next/link";

interface meetingCardProp {
    meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting}: meetingCardProp) {
    return (
        <div className="flex flex-col gap-2 p-4 border rounded-lg shadow-md">
            <h2 className="text-2xl font-black">{meeting.meetingType}</h2>
            <h2 className="text-xl font-semibold">{meeting.date}</h2>
            <p className="text-gray-600">{meeting.presiding}</p>
            <Link href={`/meetings/${meeting.id}`} className="text-brand-color hover:underline">
                View Details
            </Link>
        </div>
    );
}