import Document, { Head, Html, Main, NextScript } from 'next/document';

// TODO: OpenGraph
// TODO: Fonts shift fix
export default class extends Document {
    render() {
        return (
            <Html className="dark-mode">
                <Head>
                    <link rel="preload" href="/fonts/Archivio/Light.ttf" as="font" crossOrigin />
                    <link rel="preload" href="/fonts/Archivio/Regular.ttf" as="font" crossOrigin />
                    <link rel="preload" href="/fonts/Archivio/SemiBold.ttf" as="font" crossOrigin />
                    <link rel="preload" href="/fonts/Archivio/Bold.ttf" as="font" crossOrigin />
                    <link rel="preload" href="/fonts/Archivio/ExtraBold.ttf" as="font" crossOrigin />
                    <link rel="preload" href="/fonts/Roboto/Light.ttf" as="font" crossOrigin />
                    <link rel="preload" href="/fonts/Roboto/Medium.ttf" as="font" crossOrigin />
                    <link rel="preload" href="/fonts/Roboto/Regular.ttf" as="font" crossOrigin />
                </Head>
                <body>
                    <script src="/js/noflash.js" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
