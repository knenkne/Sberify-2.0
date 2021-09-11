import cx from 'classnames';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { Route } from '../../shared/constants';
import Link from '../link';
import Sidebar from '../siderbar';

const Layout = ({ children, title = 'Sberify 2.0', index }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="relative flex items-stretch min-h-screen">
                <Sidebar />
                {/* TODO: index */}
                <main className="relative h-full w-4/5 flex fle-col justify-items-stretch items-stretch">
                    <div className="absolute w-full px-10">
                        <header className="relative h-12 flex items-center py-4 z-10 box-content">
                            <nav className="flex justify-between w-72">
                                {Object.keys(Route).map((pathName) => (
                                    <Link href={Route[pathName]} index={index} key={pathName}>
                                        {pathName}
                                    </Link>
                                ))}
                            </nav>
                            <div className="relative w-72 ml-10 h-8">
                                <svg
                                    className={cx(
                                        'absolute',
                                        'top-2',
                                        'left-3',
                                        'w-4',
                                        'h-4',
                                        index ? 'text-[#ffffff]' : 'text-primary',
                                        'fill-current'
                                    )}
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g>
                                        <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z" />
                                    </g>
                                </svg>
                                <input
                                    className={cx(
                                        'w-full',
                                        'h-full',
                                        'pr-4',
                                        'pl-8',
                                        index ? 'text-[#ffffff]' : 'text-tertiary',
                                        index ? 'bg-[rgba(255,255,255,0.2)]' : 'bg-primary',
                                        'rounded-2xl'
                                    )}
                                />
                            </div>
                            {/* TODO: next/image */}
                        </header>
                    </div>
                    <section className="w-full pt-24 flex flex-col min-h-screen">
                        {children}
                    </section>
                </main>
                {/* <DownBarStyled /> */}
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    index: PropTypes.bool
};

export default Layout;
