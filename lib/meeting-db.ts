import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
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
        conducting: 'Brother Davis',
        openingHymn: { number: 100, title: 'Nearer, My God, to Thee' },
        openingPrayer: 'Brother Johnson',
        wardBusiness: [{ description: 'Upcoming ward activities' }],
        stakeBusiness: false,
        sacramentHymn: { number: 66, title: 'Rejoice, the Lord is King!' },
        speakers: [
            { name: 'Sister McAllister', topic: 'Enduring Faith', type: 'speaker' },
            { name: 'YSA choir', topic: '', type: 'musical-number' }
        ],
        closingHymn: { number: 175, title: 'O God, the Eternal Father' },
        closingPrayer: 'Sister Thompson',
        announcements: ['Volunteer service opportunity: May 15']
    },
    {
        id: 3,
        date: '2026-05-17',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Johnson',
        openingHymn: { number: 6, title: 'Redeemer of Israel' },
        openingPrayer: 'Sister Davis',
        wardBusiness: [{ description: 'Sustaining of new ward missionaries' }],
        stakeBusiness: false,
        sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
        speakers: [
            { name: 'Brother Wilson', topic: 'The Power of Prayer', type: 'speaker' },
            { name: 'Sister Anderson', topic: 'Following the Example of Jesus Christ', type: 'speaker' }
        ],
        closingHymn: { number: 134, title: 'I Believe in Christ' },
        closingPrayer: 'Brother Miller',
        announcements: ['Ward youth activity: May 22', 'Stake conference preparation meeting: May 24']
    },
    {
        id: 4,
        date: '2026-05-24',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Davis',
        openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
        openingPrayer: 'Brother Thompson',
        wardBusiness: [{ description: 'Presentation of ward missionary progress' }],
        stakeBusiness: true,
        sacramentHymn: { number: 185, title: 'Reverently and Meekly Now' },
        speakers: [
            { name: 'Sister Johnson', topic: 'The Importance of Family Prayer', type: 'speaker' },
            { name: 'Elders Quorum', topic: '', type: 'musical-number' },
            { name: 'Brother Brown', topic: 'Building Faith Through Service', type: 'speaker' }
        ],
        closingHymn: { number: 89, title: 'The Lord Is My Light' },
        closingPrayer: 'Sister Wilson',
        announcements: ['Stake service project: May 30', 'Ward temple night: June 5']
    },
    {
        id: 5,
        date: '2026-05-31',
        meetingType: 'testimony',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 81, title: 'Press Forward, Saints' },
        openingPrayer: 'Sister Brown',
        wardBusiness: [{ description: 'Ward reminders and upcoming June activities' }],
        stakeBusiness: false,
        sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
        speakers: [
            { name: 'Ward Members', topic: 'Fast and Testimony Meeting', type: 'speaker' }
        ],
        closingHymn: { number: 116, title: 'Come, Follow Me' },
        closingPrayer: 'Brother Anderson',
        announcements: ['Ward picnic: June 6', 'Youth temple trip: June 12']
    }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) return meetings.filter(m => m.date === date);
    return [...meetings];
}

export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find(m => m.id === id) ?? null;
}