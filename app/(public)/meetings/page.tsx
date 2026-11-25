import MeetingCard from "@/components/MeetingCard";
import { Suspense } from "react";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meeting-db";
import { MeetingSearch } from "@/components/MeetingSearch";
import { Pagination } from "@/components/pagination";

type SearchParams = Promise<{query?: string; page?: string}>;

async function MeetingResults ({searchParams}: {searchParams: SearchParams}) {

    const {query = "", page} = await searchParams;
    const currentPage = Math.max(1, Math.floor(Number(page)) || 1);

    const [meetings, totalPages] = await Promise.all([
        getMeetings(query, currentPage),
        getMeetingsTotalPages(query),
    ]);

    if(meetings.length === 0){
        return <p className="text-slate-600">No meetings founds</p>;
    }

    return (
        <div>
            <div className="grid gap-4">
                {meetings.map((meeting) => (
                    <MeetingCard key={meeting.id} meeting={meeting} />
                ))}
            </div>
            <Pagination totalPages={totalPages} />
        </div>
    );
}

export default async function MeetingsPage({searchParams}: {searchParams: SearchParams}) {


    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Sacrament Meeting</h2>
            <Suspense>
                <MeetingSearch />
            </Suspense>

            <Suspense fallback= {<div className="h-32 animate-pulse rounded-lg bg-slate-200" />}>
                <MeetingResults searchParams={searchParams} />
            </Suspense>

        </div>
    )
}
