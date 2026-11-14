import {SacramentMeeting} from './types';

const meetings: SacramentMeeting[    
] = [
    {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
    },
    {
      id: 2,
      date: '2026-05-10',
      meetingType: 'regular',
      presiding: 'Bishop Smith',
      conducting: 'Sister Taylor',
      openingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
      openingPrayer: 'Brother Wilson',
      wardBusiness: [{ description: 'Ward youth activity: May 15' }],
      stakeBusiness: false,
      sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
      speakers: [
        { name: 'Brother Miller', topic: 'The blessings of the Sabbath day', type: 'speaker' },
        { name: 'Sister Clark', topic: 'Following the Savior', type: 'speaker' }
      ],
      closingHymn: { number: 85, title: 'How Firm a Foundation' },
      closingPrayer: 'Sister Anderson',
      announcements: ['Ward temple night: May 17']
    },
    {
      id: 3,
      date: '2026-05-17',
      meetingType: 'testimony',
      presiding: 'Bishop Smith',
      conducting: 'Brother Jones',
      openingHymn: { number: 5, title: 'High on the Mountain Top' },
      openingPrayer: 'Sister Evans',
      wardBusiness: [],
      stakeBusiness: false,
      sacramentHymn: { number: 134, title: 'I Believe in Christ' },
      speakers: [
        { name: 'Ward Choir', topic: '', type: 'musical-number' }
      ],
      closingHymn: { number: 98, title: 'I Need Thee Every Hour' },
      closingPrayer: 'Brother Garcia',
      announcements: ['Stake conference will be held May 24']
    },
    {
      id: 4,
      date: '2026-05-24',
      meetingType: 'stake',
      presiding: 'Stake President Lee',
      conducting: 'Bishop Smith',
      openingHymn: { number: 85, title: 'How Firm a Foundation' },
      openingPrayer: 'Sister Martinez',
      wardBusiness: [],
      stakeBusiness: true,
      sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
      speakers: [
        { name: 'President Lee', topic: 'Strengthening faith in Jesus Christ', type: 'speaker' },
        { name: 'Sister Nelson', topic: 'Ministering as the Savior did', type: 'speaker' }
      ],
      closingHymn: { number: 124, title: 'Be Still, My Soul' },
      closingPrayer: 'Brother Peterson',
      announcements: ['Stake youth conference registration is open']
    },
    {
      id: 5,
      date: '2026-05-31',
      meetingType: 'regular',
      presiding: 'Bishop Smith',
      conducting: 'Brother Jones',
      openingHymn: { number: 98, title: 'I Need Thee Every Hour' },
      openingPrayer: 'Brother Thompson',
      wardBusiness: [{ description: 'Primary children will sing in sacrament meeting on June 14' }],
      stakeBusiness: false,
      sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
      speakers: [
        { name: 'Sister Brown', topic: 'Serving one another with love', type: 'speaker' },
        { name: 'Primary Children', topic: '', type: 'musical-number' }
      ],
      closingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
      closingPrayer: 'Sister Davis',
      announcements: ['Ward service project: June 6']
    }
]

export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) return meetings.filter(m => m.date === date);
    return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find(m => m.id === id) ?? null;
}

