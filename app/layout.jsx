import '../styles/globals.css';

import { Archivo, Roboto } from 'next/font/google';
import Progressbar from 'nextjs-toploader';

import Layout from '../components/layout';
import { progressbarOptions } from '../shared/constants';

const roboto = Roboto({
    subsets: ['cyrillic'],
    display: 'swap',
    weight: ['400', '500'],
    variable: '--Roboto'
});

const archivo = Archivo({
    subsets: [],
    weight: ['400', '500', '900'],
    variable: '--Archivo'
});

export const metadata = {
    title: 'Sberify 2.0'
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            data-theme="dark"
            style={{ colorScheme: 'dark' }}
            className={`${roboto.variable} ${archivo.variable}`}
        >
            <body>
                <Progressbar {...progressbarOptions} />
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
