// import ThemeButton from '../button/theme';
// import Player from '../player';
// import { HeaderStyled, ProfileStyled } from './styles';
import { SidebarBody } from './body';

const tracks = [
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '04u3FADfthW9uKXMGQQ8i2',
        name: 'insula',
        previewUrl:
            'https://p.scdn.co/mp3-preview/804d58a17a6266f8dfbaeeec8f0f9eee4b859abc?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '24N9dCof00JiT2mP9JqNRY',
        name: 'Virile',
        previewUrl:
            'https://p.scdn.co/mp3-preview/86c243891d528c562c29525bdb40387330c21cd6?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '5hEib0qi7ZTeV99KgYfp05',
        name: 'Conveyor',
        previewUrl:
            'https://p.scdn.co/mp3-preview/73406d274aee52dd4187d0bfaacadc99b8987815?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '2aOG8aF4Zocav2jfCYIpVX',
        name: 'Quarrel',
        previewUrl:
            'https://p.scdn.co/mp3-preview/6a7a7ed1a84e41709c8f832377b121c612f83a68?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '3KPUTvUBSGKDL92u4JKyrJ',
        name: 'In Bloom (in the woods)',
        previewUrl:
            'https://p.scdn.co/mp3-preview/26f7c249482fc5c4d4b2198d9cf700ce19b2a857?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '2nmHJG18sVSIihANOQTSFH',
        name: 'space nation race place',
        previewUrl:
            'https://p.scdn.co/mp3-preview/d2c4b65aad71c6ee930f825a3204ab3fe957192c?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '6EK8uocKNtNCAhNrx3vc8d',
        name: 'Colouour',
        previewUrl:
            'https://p.scdn.co/mp3-preview/dc4b201f843e8a43c7a2d59fe894bbc80c997185?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '0PU21RFOW34NjwKb9J1eCY',
        name: 'Plastic',
        previewUrl:
            'https://p.scdn.co/mp3-preview/5bbda72ec9e20cdaa0aea6e3c0bff224103f6f35?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '4kvMHZnU8F1iv9VrheJDP1',
        name: 'Bless Me',
        previewUrl:
            'https://p.scdn.co/mp3-preview/3129ece15810868c71cb46c729163448dd80d3a9?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '0O5D3BulBcU5WbVRvgYg0v',
        name: 'Cut Me',
        previewUrl:
            'https://p.scdn.co/mp3-preview/5d8ccbeaa00513afeae8d7fe194c6490775c8a5d?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '4vgt7oc3CZojtj4aXVoyht',
        name: 'Bystanders (in space)',
        previewUrl:
            'https://p.scdn.co/mp3-preview/f786a21cb9e22759fb2d41479e7489035b60de2e?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '37Ktt4DrHF80fUmEFDA7UL',
        name: 'Me in 20 Years',
        previewUrl:
            'https://p.scdn.co/mp3-preview/ef895af34f4b065c8298fb43870e1801ab78b3d9?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '3dccBGnoR3BZrfJGmxNj04',
        name: 'Doomed',
        previewUrl:
            'https://p.scdn.co/mp3-preview/a8d00eb01c4394b2a58d5ad8d35f366b3de9ee25?cid=169f7aea4c204f00ba96ece98b15e24d'
    },
    {
        artists: [
            {
                externalUrls: {
                    spotify: 'https://open.spotify.com/artist/5W10uJRsbt9bROJDKoI1Wn'
                },
                href: 'https://api.spotify.com/v1/artists/5W10uJRsbt9bROJDKoI1Wn',
                id: '5W10uJRsbt9bROJDKoI1Wn',
                name: 'Moses Sumney',
                type: 'artist',
                uri: 'spotify:artist:5W10uJRsbt9bROJDKoI1Wn'
            }
        ],
        id: '6JYvScauf4m74HxsfNqtgE',
        name: 'Polly',
        previewUrl:
            'https://p.scdn.co/mp3-preview/6f2104e33ddf528ef1bd5b7c945088a4f103d763?cid=169f7aea4c204f00ba96ece98b15e24d'
    }
];

const Sidebar = ({ playlist }) => {
    return (
        // TODO: max-h w/ min-h
        <aside className="sticky top-24 z-20 row-start-2 row-end-7 col-start-1 col-end-1 flex flex-col pl-24 pb-10 max-h-[calc(100vh-96px)]">
            <header className="bg-primary h-16 w-72 rounded-lg mb-4 flex-shrink-0 shadow-sidebar" />
            <SidebarBody tracks={playlist} />
            {/* <HeaderStyled>
                <ProfileStyled />
                <ThemeButton />
            </HeaderStyled>
            <Player /> */}
        </aside>
    );
};

export default Sidebar;
