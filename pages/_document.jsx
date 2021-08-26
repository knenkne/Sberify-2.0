import Document, { Head, Html, Main, NextScript } from 'next/document';

// TODO: OpenGraph
export default class extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;900&family=Roboto:wght@500&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
