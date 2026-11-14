import { SacramentMeeting } from "@/lib/types";


interface meetingDetailsProp {
    meeting: SacramentMeeting;
}

export const MeetingDisplay = ({ meeting}: meetingDetailsProp) => {
    return (
        <div className="flex flex-col gap-3 p-4 border rounded-2xl shadow-md">
            <h2 className="text-2xl font-black">{meeting.meetingType}</h2>
            <h2 className="text-lg font-semibold">{meeting.date}</h2>
            <p className="text-black"><strong>Presiding: </strong>{meeting.presiding}</p>
            <p className="text-black"><strong>Conducting: </strong>{meeting.conducting}</p>
            <p className="text-black"><strong>Opening Hymn: </strong>{meeting.openingHymn.number} - {meeting.openingHymn.title}</p>
            <p className="text-black"><strong>Opening Prayer: </strong>{meeting.openingPrayer}</p>

            {meeting.wardBusiness.map((item, index) => (
                <p key={index} className="text-black"><strong>Ward Business: </strong>{item.description}</p>

            ))}
            {meeting.announcements && meeting.announcements.length > 0 && (
                <div className="my-2">
                    <strong>Announcements: </strong>
                    {meeting.announcements.map((item, index) => (
                        <p key={index} className="text-black">{item}</p>
                    ))}
                </div>
            )}

            <p className="text-black"><strong>Stake Business: </strong>{meeting.stakeBusiness ? "Stake Business - look at the board" : "No Stake Business"}</p>
            <p className="text-black"><strong>Sacrament Hymn: </strong>{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</p>

            <article className="flex flex-col gap-2">
                {meeting.speakers.map((speaker, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <p className="text-black"><strong>Speaker: </strong>{speaker.name}</p>
                        <p className="text-black"><strong>Topic: </strong>{speaker.topic}</p>
                    </div>
                ))}
            </article>

            <p className="text-black"><strong>Closing Hymn: </strong>{meeting.closingHymn.number} - {meeting.closingHymn.title}</p>
            <p className="text-black"><strong>Closing Prayer: </strong>{meeting.closingPrayer}</p>
        </div>

    )
}
