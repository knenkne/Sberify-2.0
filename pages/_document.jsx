import Document, { Head, Html, Main, NextScript } from 'next/document';

// TODO: OpenGraph
export default class extends Document {
    render() {
        return (
            <Html className="dark-mode">
                <Head />
                <body>
                    <script src="/js/noflash.js" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
