// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';

// TODO: OpenGraph
export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;900&family=Roboto:wght@400;500&display=swap"
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
