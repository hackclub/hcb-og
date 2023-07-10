export function AvatarRow({ avatars }) {
    let showMore = 0;
    if (avatars.length > 10) {
        showMore = avatars.length - 9;
        avatars = avatars.slice(0, 9);
    }
    return (
        <div style={{ display: 'flex' }}>
            {avatars.map((avatar, index) => (
                <img key={index} width="60" height="60" style={{ borderRadius: '30px', marginRight: "-16px", ...((index == avatars.length - 1 && showMore == 0) ? {} : { clipPath: "polygon(30px 0px, 30px 0px, 32.0543808px 0.06923827px, 34.0716024px 0.27397256px, 36.0471936px 0.60973209px, 37.9766832px 1.07204608px, 39.8556px 1.65644375px, 41.6794728px 2.35845432px, 43.4438304px 3.17360701px, 45.1442016px 4.09743104px, 46.7761152px 5.12545563px, 48.3351px 6.25321px, 48.3351px 6.25321px, 46.5417675px 8.12472609px, 44.898576px 10.13231552px, 43.4146245px 12.26688103px, 42.099012px 14.51932536px, 40.9608375px 16.88055125px, 40.0092px 19.34146144px, 39.2531985px 21.89295867px, 38.701932px 24.52594568px, 38.3644995px 27.23132521px, 38.25px 30px, 38.25px 30px, 38.3644995px 32.7686748px, 38.701932px 35.4740544px, 39.2531985px 38.1070416px, 40.0092px 40.6585392px, 40.9608375px 43.11945px, 42.099012px 45.4806768px, 43.4146245px 47.7331224px, 44.898576px 49.8676896px, 46.5417675px 51.8752812px, 48.3351px 53.7468px, 48.3351px 53.7468px, 46.7761152px 54.8745468px, 45.1442016px 55.9025664px, 43.4438304px 56.8263876px, 41.6794728px 57.6415392px, 39.8556px 58.34355px, 37.9766832px 58.9279488px, 36.0471936px 59.3902644px, 34.0716024px 59.7260256px, 32.0543808px 59.9307612px, 30px 60px, 30px 60px, 25.1338545px 59.6073495px, 20.517696px 58.470576px, 16.2132915px 56.6514465px, 12.282408px 54.211728px, 8.7868125px 51.2131875px, 5.788272px 47.717592px, 3.3485535px 43.7867085px, 1.529424px 39.482304px, 0.3926505px 34.8661455px, 4.9666805852231E-31px 30px, 0px 30px, 0.3926505px 25.1338545px, 1.529424px 20.517696px, 3.3485535px 16.2132915px, 5.788272px 12.282408px, 8.7868125px 8.7868125px, 12.282408px 5.788272px, 16.2132915px 3.3485535px, 20.517696px 1.529424px, 25.1338545px 0.3926505px, 30px 4.9666805852231E-31px)" }) }} src={avatar} />
            ))}
            {showMore > 0 && (
                <div style={{ width: '60px', height: '60px', borderRadius: '30px', backgroundColor: '#338eda', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '400', marginLeft: '0px' }}>+{showMore}</div>
            )}
        </div>
    )
}

function Image({ avatars, name, balance, totalRaised, background, preview = false }) {
    return (
        <div style={{
            display: 'flex',
            width: '1200px',
            height: '700px',
            padding: '40px',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            background: 'red',
            color: 'white',
            boxSizing: 'border-box',
            fontWeight: 400,
            fontFamily: '"Phantom Sans 0.7"',
        }}>
            <img src={background || "https://cloud-6hhgz2mum-hack-club-bot.vercel.app/0hack_club_bank.png"} width="1200" height="700" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                objectFit: 'cover',
            }} />
            <div style={{
                position: 'absolute',
                top: 0,
                background: 'linear-gradient(131deg, rgba(10, 5, 5, 0.99) 0%, rgba(40, 2, 2, 0.60) 16.09%, rgba(29, 3, 3, 0.13) 100%)',
                left: 0,
                zIndex: 3,
                width: '1200px',
                height: '700px'
            }}></div>
            <div style={{
                position: 'absolute',
                top: 0,
                backgroundColor: '#00000077',
                left: 0,
                zIndex: 2,
                width: '1200px',
                height: '700px'
            }}></div>

            <svg style={{
                position: 'absolute',
                bottom: '40px',
                left: '40px',
                zIndex: 5,
            }} width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.0755 24.035C47.887 23.9495 47.6948 23.8722 47.4996 23.8034L47.4996 17.8125C48.5624 17.8125 49.6816 18.2548 50.4594 18.5962C51.3411 18.9822 52.4663 19.5641 53.6567 20.2439C56.587 21.9584 59.4379 23.8048 62.2008 25.7777C68.5836 30.2842 69.7652 31.1719 76.3172 36.4948C76.5928 36.7705 76.8115 37.0977 76.9607 37.4578C77.1098 37.818 77.1866 38.2039 77.1866 38.5937C77.1866 38.9836 77.1098 39.3695 76.9607 39.7297C76.8115 40.0898 76.5928 40.417 76.3172 40.6927C76.0416 40.9683 75.7144 41.1869 75.3542 41.3361C74.9941 41.4853 74.6081 41.5621 74.2183 41.5621C73.8285 41.5621 73.4425 41.4853 73.0824 41.3361C72.7223 41.1869 72.395 40.9683 72.1194 40.6927C65.3121 35.625 65.0152 35.0283 58.7749 30.6286C56.169 28.7628 53.4784 27.0183 50.7117 25.4006C49.8587 24.8974 48.9786 24.4415 48.0755 24.035ZM46.9236 24.035C47.1908 23.9162 47.3778 23.845 47.4996 23.8034L47.4996 17.8125C46.4367 17.8125 45.3175 18.2548 44.5397 18.5962C43.658 18.9822 42.5328 19.5641 41.3424 20.2439C38.4121 21.9584 35.5612 23.8048 32.7983 25.7777C26.4214 30.2842 25.2339 31.1719 18.6819 36.4948C18.4063 36.7705 18.1876 37.0977 18.0384 37.4578C17.8893 37.818 17.8125 38.2039 17.8125 38.5938C17.8125 38.9836 17.8893 39.3695 18.0384 39.7297C18.1876 40.0898 18.4063 40.417 18.6819 40.6927C18.9575 40.9683 19.2848 41.1869 19.6449 41.3361C20.005 41.4853 20.391 41.5621 20.7808 41.5621C21.1706 41.5621 21.5566 41.4853 21.9167 41.3361C22.2769 41.1869 22.6041 40.9683 22.8797 40.6927C29.69 35.625 29.9869 35.0283 36.2242 30.6286C38.8301 28.7628 41.5207 27.0183 44.2874 25.4006C45.371 24.7802 46.2171 24.3408 46.9236 24.035ZM20.7808 71.25C20.7808 70.4626 21.0936 69.7075 21.6503 69.1508C22.2071 68.594 22.9622 68.2812 23.7496 68.2812L71.2496 68.2812C72.0369 68.2812 72.792 68.594 73.3488 69.1508C73.9055 69.7075 74.2183 70.4626 74.2183 71.25C74.2183 72.0374 73.9055 72.7925 73.3488 73.3492C72.792 73.906 72.0369 74.2187 71.2496 74.2187L23.7496 74.2187C22.9622 74.2187 22.2071 73.906 21.6503 73.3492C21.0936 72.7925 20.7808 72.0374 20.7808 71.25Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M47.499 65.3125C46.7117 65.3125 45.9565 64.9997 45.3998 64.443C44.8431 63.8862 44.5303 63.1311 44.5303 62.3437L44.5303 41.5625C44.5303 40.7751 44.8431 40.02 45.3998 39.4633C45.9565 38.9065 46.7117 38.5937 47.499 38.5937C48.2864 38.5937 49.0415 38.9065 49.5982 39.4633C50.155 40.02 50.4678 40.7751 50.4678 41.5625L50.4678 62.3437C50.4678 63.1311 50.155 63.8862 49.5982 64.443C49.0415 64.9997 48.2864 65.3125 47.499 65.3125ZM62.3428 65.3125C61.5554 65.3125 60.8003 64.9997 60.2435 64.443C59.6868 63.8862 59.374 63.1311 59.374 62.3437L59.374 41.5625C59.374 40.7751 59.6868 40.02 60.2435 39.4633C60.8003 38.9065 61.5554 38.5937 62.3428 38.5937C63.1301 38.5937 63.8853 38.9065 64.442 39.4633C64.9987 40.02 65.3115 40.7751 65.3115 41.5625L65.3115 62.3437C65.3115 63.1311 64.9987 63.8862 64.442 64.443C63.8853 64.9997 63.1301 65.3125 62.3428 65.3125ZM32.6553 65.3125C31.8679 65.3125 31.1128 64.9997 30.5561 64.443C29.9993 63.8862 29.6865 63.1311 29.6865 62.3438L29.6865 41.5625C29.6865 40.7751 29.9993 40.02 30.5561 39.4633C31.1128 38.9065 31.8679 38.5937 32.6553 38.5937C33.4426 38.5937 34.1977 38.9065 34.7545 39.4633C35.3112 40.02 35.624 40.7751 35.624 41.5625L35.624 62.3437C35.624 63.1311 35.3112 63.8862 34.7545 64.443C34.1977 64.9997 33.4426 65.3125 32.6553 65.3125Z" fill="white" />
            </svg>
            <div style={{
                display: 'flex',
                width: '100%',
                position: 'relative',
                zIndex: 5,
                gap: '16px',
                flexDirection: 'column'
            }}>
                <h1 style={{
                    fontSize: '108px',
                    fontFamily: '"Phantom Sans 0.7"',
                    fontWeight: '700',
                    margin: '0px',
                    marginTop: '10px'
                }}>{name}</h1>

                <AvatarRow avatars={avatars} />

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '90px',
                    marginTop: '50px',
                    fontFamily: 'Inter'

                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                    }}>
                        <h3 style={{ fontSize: '70px', margin: '0px', fontFamily: '"Phantom Sans 0.7"', fontWeight: 600 }}>${balance.toLocaleString()}</h3>
                        <span style={{ color: '#E5D1D1', fontSize: '58px', fontFamily: '"Phantom Sans 0.7"' }}>Balance</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                    }}>
                        <h3 style={{ fontSize: '70px', margin: '0px', fontFamily: '"Phantom Sans 0.7"', fontWeight: 600 }}>${totalRaised.toLocaleString()}</h3>
                        <span style={{ color: '#E5D1D1', fontSize: '58px', fontFamily: '"Phantom Sans 0.7"' }}>Total Raised</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

Image.previewProps = {
    avatars: [
        "https://bank.hackclub.com/storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdCtRIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1c515558d0e5d8995a282404f960e1574d4972ed/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RG5Sb2RXMWlibUZwYkVraUN6UTRlRFE0WGdZN0JsUTZER2R5WVhacGRIbEpJZ3RqWlc1MFpYSUdPd1pVT2d0bGVIUmxiblJKSWdvME9IZzBPQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--0b7ce54a24f36efbacd451555b06eed66aa6f802/5891442.jpg",
        "https://bank.hackclub.com/storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUVzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--08cfd26c130eaad21768b0a9b021a645b44bf7e0/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lKYW5CbFp3WTZCa1ZVT2c1MGFIVnRZbTVoYVd4SklnczBPSGcwT0Y0R093WlVPZ3huY21GMmFYUjVTU0lMWTJWdWRHVnlCanNHVkRvTFpYaDBaVzUwU1NJS05EaDRORGdHT3daVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--db2756997f8f6f475b203ef1060ca1788a709656/39828164-7.jpeg",
        "https://bank.hackclub.com/storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHFmIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5d3a3c974c7934a171e14e08e81e85b8497f606e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBPZ2h3Ym1jNkRuUm9kVzFpYm1GcGJFa2lDelE0ZURRNFhnWTZCa1ZVT2d4bmNtRjJhWFI1U1NJTFkyVnVkR1Z5QmpzSVZEb0xaWGgwWlc1MFNTSUtORGg0TkRnR093aFUiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--9b99fc87d2f29ea64cf86672555ebcb7f388f85b/IMG_5417%202.png",
        "https://bank.hackclub.com/storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbzlrIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c0ee415aa20c8268dc80d06e2ad202d94445c064/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RG5Sb2RXMWlibUZwYkVraUN6UTRlRFE0WGdZN0JsUTZER2R5WVhacGRIbEpJZ3RqWlc1MFpYSUdPd1pVT2d0bGVIUmxiblJKSWdvME9IZzBPQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--517cafad81bcf5faf86708138c3b2359b4498f02/20220303_014957677_iOS.png",
        "https://bank.hackclub.com/storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcW80IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec6331f20a7662caf3eca9e48671eea30efef2f7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RG5Sb2RXMWlibUZwYkVraUN6UTRlRFE0WGdZN0JsUTZER2R5WVhacGRIbEpJZ3RqWlc1MFpYSUdPd1pVT2d0bGVIUmxiblJKSWdvME9IZzBPQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--517cafad81bcf5faf86708138c3b2359b4498f02/belle.png",
        "https://bank.hackclub.com/storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWljIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--38da009bc98c6f8aee8c6b0baae6714764880867/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RG5Sb2RXMWlibUZwYkVraUN6UTRlRFE0WGdZN0JsUTZER2R5WVhacGRIbEpJZ3RqWlc1MFpYSUdPd1pVT2d0bGVIUmxiblJKSWdvME9IZzBPQVk3QmxRPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--517cafad81bcf5faf86708138c3b2359b4498f02/image%20(4).png",
        "https://gravatar.com/avatar/e4ce78260846a104c4d796e5840fd44d?s=48&amp;d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/ZL/48/ff8c37/fff",
        "https://gravatar.com/avatar/76ad4fb920c9b46e788a22728926a475?s=48&amp;d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/SP/48/5bc0de/fff",
        "https://bank.hackclub.com/storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2NxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--644a3ab689db14b2dab3b550b29c93a6c6570f67/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lKYW5CbFp3WTZCa1ZVT2c1MGFIVnRZbTVoYVd4SklnczBPSGcwT0Y0R093WlVPZ3huY21GMmFYUjVTU0lMWTJWdWRHVnlCanNHVkRvTFpYaDBaVzUwU1NJS05EaDRORGdHT3daVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--db2756997f8f6f475b203ef1060ca1788a709656/editedprofile.jpeg"

    ],
    name: "Hack Club HQ",
    balance: 1_234_567.89,
    totalRaised: 9_876_543.21
}

Image.size = {
    width: 1200,
    height: 700
}

Image.fetchProps = async (slug = 'hq') => {
    const data = await fetch(`https://bank.hackclub.com/api/v3/organizations/${slug}`).then(r => r.json());

    return {
        name: data.name,
        avatars: data.users.map(x => x.photo),
        balance: data.balances.balance_cents / 100,
        totalRaised: data.balances.total_raised / 100,
        background: data.donation_header || "https://cloud-6hhgz2mum-hack-club-bot.vercel.app/0hack_club_bank.png"
    }
}

Image.fetchFonts = async () => {
    const [regular, medium, bold] = await Promise.all([
        "https://cloud-mj2t536qv-hack-club-bot.vercel.app/0phantomsans0.8-regular.ttf",
        "https://cloud-3rudtqz3t-hack-club-bot.vercel.app/0phantomsans0.8-medium.ttf",
        "https://cloud-mj2t536qv-hack-club-bot.vercel.app/1phantomsans0.8-bold.ttf"
    ].map(x => fetch(x).then(r => r.arrayBuffer())));

    return [
        {
            name: 'Phantom Sans 0.7',
            data: regular,
            style: 'normal',
            weight: 400
        },
        {
            name: 'Phantom Sans 0.7',
            data: medium,
            style: 'normal',
            weight: 600
        },
        {
            name: 'Phantom Sans 0.7',
            data: bold,
            style: 'normal',
            weight: 700
        },
    ];
}

export const Event = Image;
export default Event;