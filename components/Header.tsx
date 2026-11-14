'use client'

import { Suspense } from "react";
import NavLinks from "./NavLinks";

const mainLinks = [
    { name: 'Home', href: '/'},
    { name: 'Meetings', href: '/meetings'},
    { name: 'Current Meeting', href: '/meetings/current'},
];

function DateDisplay(){
    const currentDate = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return <>{currentDate}</>;
}

export default function Header() {
    return (
        <header className="bg-brand-color text-white py-4 shadow-md px-6 flex flex-wrap justify-between">
            <div>
                <h1 id="header-title" className="text-2xl font-bold tracking-tight">Sacrament Meeting</h1>
            </div>
            <div>
                <h2 id="ward-name" className="text-lg font-foreground font-medium"><strong>Ward: </strong>Wigan</h2>

                <Suspense fallback={<span className="opacity-40">2026</span>}>
                    <h3 id="full-date" className="font-foreground font-bold"><DateDisplay /></h3>
                </Suspense>
                
            </div>

            <Suspense fallback={<div className="h-9 w-48" />}>
                <NavLinks links={mainLinks} />
            </Suspense>
            
        </header>
    )
}
