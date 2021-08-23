import Document, { Head, Html, Main, NextScript } from 'next/document';

// TODO: OpenGraph
// TODO: Fonts shift fix
export default class extends Document {
    render() {
        return (
            <Html className="dark-mode">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/Archivio/Light.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Archivio/Regular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Archivio/SemiBold.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Archivio/Bold.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Archivio/ExtraBold.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Roboto/Light.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Roboto/Medium.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Roboto/Regular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
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
