import { notFound } from "next/navigation";
import { MeetingDisplay } from "@/components/MeetingDetail";
import { SacramentMeeting } from "@/lib/types";
import { connection } from "next/server";
import { Suspense } from "react";


function getBaseUrl () {
    if (process.env.VERCEL_URL) {
        return `http://${process.env.VERCEL_URL}`;
    }

    return 'http://localhost:3000';
}

async function MeetingContent ({
    params,
} : {
    params: Promise<{id: string}>;
}) {

    await connection();
    const {id} = await params;
    const response = await fetch(`${getBaseUrl()}/api/meetings/${id}`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        notFound();
    }

    if (!response.ok) {
        throw new Error ('Failed to fetch meeting details');
    }

    const meeting: SacramentMeeting = await response.json();

    return <MeetingDisplay meeting={meeting} />;
}

export default function MeetingDetailPage ({
    params,
}:{
    params: Promise<{id:string}>;
}) {
    return (
        <Suspense fallback={<div className="h-96 animate-pulse rounded-xl bg-slate-200" />}>
            <MeetingContent params={params} />
        </Suspense>
    )
}