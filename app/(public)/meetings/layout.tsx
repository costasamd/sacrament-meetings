import NavLinks from "@/components/NavLinks";
import { Suspense } from "react";

const meetingLinks = [
    {name: 'All Meetings', href: '/meetings'},
    {name: 'Current Meeting', href: '/meetings/current'}
];

export default function MeetingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="space-y-6">
            <div className="border-b border-slate-200 pb-3">
                <Suspense fallback={<div className="h-9 w-48" />}>
                    <NavLinks links={meetingLinks} variant='subnav' />
                </Suspense>
            </div>
            {children}
        </section>
    );
}