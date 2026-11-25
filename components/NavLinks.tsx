'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export interface NavLinkItem {
    name: string;
    href: string;
}

interface NavLinksProps {
    links: NavLinkItem[];
    variant?: 'header' | 'subnav' 
}

export default function NavLinks({links, variant = 'header'}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-2" aria-label="Navigation">
        {links.map((link) => {
            const isActive = pathname === link.href;

            const style = variant === 'header'
            ? isActive ? 'bg-white text-slate-900'
            : 'text-white/85 hover: bg-white/15 hover:text-white'
            : isActive ? 'bg-brand-color text-white' : 'text-slate-700 hover:bg-slate-100';

            return (
                <Link 
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors  ${style}`}
                aria-current={isActive ? 'page' : undefined}>
                    {link.name}
                </Link>
            );

        })}
    </nav>
  );
 
}