'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    return `${pathname}?${params.toString()}`;
  }

  const linkStyle =
    'rounded-lg border px-4 py-2 font-medium text-slate-900 hover:bg-slate-100';
  const disabledStyle =
    'rounded-lg border px-4 py-2 font-medium text-slate-500 cursor-not-allowed';

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between">
      {currentPage > 1 ? (
        <Link href={createPageURL(currentPage - 1)} className={linkStyle}>
          Previous
        </Link>
      ) : (
        <span className={disabledStyle} aria-disabled="true">Previous</span>
      )}

      <span className="text-sm text-slate-700">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link href={createPageURL(currentPage + 1)} className={linkStyle}>
          Next
        </Link>
      ) : (
        <span className={disabledStyle}>Next</span>
      )}
    </nav>
  );
}