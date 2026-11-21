import { notFound } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";
import { MeetingDisplay } from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meeting-db";

async function MeetingContent({ params }: { params: Promise<{ id: string }> }) {
  await connection();
  const { id } = await params;

  const meetingId = Number(id);
  if (!Number.isInteger(meetingId)) notFound();

  const meeting = await getMeetingById(meetingId);
  if (!meeting) notFound();

  return <MeetingDisplay meeting={meeting} />;
}

export default function MeetingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse rounded-xl bg-slate-200" />}>
      <MeetingContent params={params} />
    </Suspense>
  );
}