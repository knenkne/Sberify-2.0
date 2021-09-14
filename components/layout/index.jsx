import cx from 'classnames';
import Head from 'next/head';
import PropTypes from 'prop-types';

import SearchIcon from '../../public/icons/search.svg';
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
                                <SearchIcon
                                    className={cx(
                                        'absolute',
                                        'top-2',
                                        'left-3',
                                        'w-4',
                                        'h-4',
                                        index ? 'text-[#ffffff]' : 'text-primary',
                                        'fill-current'
                                    )}
                                />
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
