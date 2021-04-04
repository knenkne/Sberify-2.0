import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <script src="js/noflash.js" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
