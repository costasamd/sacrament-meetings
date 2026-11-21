export default function MeetingsLoading() {
    return (
        <div className="space-y-4 animate-pulse" aria-label="Loading meeting">
            <div className="h-8 w-48 rounded bg-slate-200"></div>
            <div className="h-28 w-full rounded-lg bg-slate-200"></div>
            <div className="h-28 w-full rounded-lg bg-slate-200"></div>
            <div className="h-28 w-full rounded-lg bg-slate-200"></div>
        </div>
    );
}