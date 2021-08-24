import Document, { Head, Html, Main, NextScript } from 'next/document';

// TODO: OpenGraph
// TODO: Fonts shift fix
export default class extends Document {
    render() {
        return (
            <Html className="dark-mode">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;900&family=Roboto:wght@500&display=swap"
                        rel="stylesheet"
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
