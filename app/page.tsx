import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <Image
          src="/church_symbol.webp" // Replace with your actual filename in /public
          alt="Church of Jesus Christ Logo"
          width={1200}
          height={500}
          priority
          className="h-64 w-full object-cover sm:h-80"
        />

        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Welcome to Wigan Ward
          </h2>
          <p className="mt-2 text-slate-600">
            View weekly sacrament meeting agendas, hymns, speakers, and ward
            announcements.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/meetings/current"
              className="rounded-md bg-brand-color px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              This Sunday&apos;s Program
            </Link>
            <Link
              href="/meetings"
              className="rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              View All Meetings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
