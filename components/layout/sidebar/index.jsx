/* eslint-disable react/prop-types */
import { SidebarBody } from './body';
import { SidebarHeader } from './header';

const tracks = [
    {
        id: '3jksOdXCaDXyGiZ7L4YZbp',
        name: 'All Nighter',
        preview_url:
            'https://p.scdn.co/mp3-preview/2ed76999181ad64abf02d0c9743101be42dda47c?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' }]
    },
    {
        id: '3j11iDncb7ZeDMw7lFucqM',
        name: 'The Motto',
        preview_url:
            'https://p.scdn.co/mp3-preview/f1bc601f20aed02799fc5adaf39c664e4ffa5101?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [
            { id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' },
            { id: '4npEfmQ6YuiwW1GpUmaq3F', name: 'Ava Max' }
        ]
    },
    {
        id: '36gcliMRX1vCpgnrZE3dFZ',
        name: '10:35',
        preview_url:
            'https://p.scdn.co/mp3-preview/6e88ed9108e2c0c493903a7d280183d6d6855272?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [
            { id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' },
            { id: '45dkTj5sMRSjrmBSBeiHym', name: 'Tate McRae' }
        ]
    },
    {
        id: '57uNXnf4ciHYP4HktbIbzC',
        name: 'The Business',
        preview_url:
            'https://p.scdn.co/mp3-preview/e516723e41dab08c241fc981aeed21407f322d72?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' }]
    },
    {
        id: '2N5cFPLy0TIasTWkfT1hri',
        name: 'Chills (LA Hills)',
        preview_url:
            'https://p.scdn.co/mp3-preview/d70ec0908af8a338d327195e838f3cf2ea2b0d3d?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [
            { id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' },
            { id: '31W5EY0aAly4Qieq6OFu6I', name: 'A Boogie Wit da Hoodie' }
        ]
    },
    {
        id: '5pNFibJLq7dvoDVIIcQBkn',
        name: 'Hot In It',
        preview_url:
            'https://p.scdn.co/mp3-preview/e0deb5ab5c14c3fdc54fb8aea726ece21d8229ef?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [
            { id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' },
            { id: '25uiPmTg16RbhZWAqwLBy5', name: 'Charli XCX' }
        ]
    },
    {
        id: '4PNKy9P3xrzqMwVzRjxBKt',
        name: 'Pump It Louder',
        preview_url:
            'https://p.scdn.co/mp3-preview/518043558ca2da3e1bf4dd105e22a797a85309de?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [
            { id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' },
            { id: '1yxSLGMDHlW21z4YXirZDS', name: 'Black Eyed Peas' }
        ]
    },
    {
        id: '0AnHkrPoDm29bsN2cuPte7',
        name: 'Learn 2 Love',
        preview_url:
            'https://p.scdn.co/mp3-preview/d7e8e91ca283f2fab0c30b6eb50b2cd849a222be?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' }]
    },
    {
        id: '0v2Swij0g2VfvSq3c3uaG3',
        name: "Don't Be Shy",
        preview_url:
            'https://p.scdn.co/mp3-preview/b5b4a420871f198f6526d15d58fa3c90c4a4ad0a?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [
            { id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' },
            { id: '790FomKkXshlbRYZFtlgla', name: 'KAROL G' }
        ]
    },
    {
        id: '4TkWIoKGDdEbsEtWo7iAaa',
        name: 'Bet My Dollar',
        preview_url:
            'https://p.scdn.co/mp3-preview/f02f706dbfa415fa73d65bf435e2cd82757e8b01?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [
            { id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' },
            { id: '5pDjmC5mRl7vDJhsjVwNfk', name: 'Freya Ridings' }
        ]
    },
    {
        id: '62Y7aTOJiDxdOzDTwym6TL',
        name: 'Back Around',
        preview_url:
            'https://p.scdn.co/mp3-preview/e5188e4f2f7713376fd6ab52b70c574bf64c754a?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [
            { id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' },
            { id: '7mGI9Sd66FqHjIkwzkgbG7', name: 'AR/CO' }
        ]
    },
    {
        id: '3IhM5Mber8KA0NaRNpK2px',
        name: 'Lay Low',
        preview_url:
            'https://p.scdn.co/mp3-preview/c72e6fe8815d52bbb721e00feed6e669170ab0b7?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Ti?sto' }]
    }
];

const Sidebar = ({ className = '' }) => {
    return (
        // TODO: max-h w/ min-h
        <aside
            className={`${className} sticky top-24 flex flex-col z-20 max-h-[calc(100vh-96px-40px)]`.trim()}
        >
            <SidebarHeader track={[]} />
            <SidebarBody tracks={tracks} />
            {/* <HeaderStyled>
                <ProfileStyled />
                <ThemeButton />
            </HeaderStyled>
            <Player /> */}
        </aside>
    );
};

export default Sidebar;
