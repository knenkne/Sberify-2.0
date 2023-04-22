import NextImage from 'next/image';
import PropTypes from 'prop-types';

import Releases from '../components/releases';
import { GET_RELEASES } from '../lib/graphql/queries';
import banner from '../public/images/banner.jpg';
import { client } from '../shared/qraphql-client';

export default async function Page() {
    const {
        getReleases: {
            albums: { items: releases }
        }
    } = await client.request(GET_RELEASES);

    return (
        <>
            <div className="col-span-full row-span-full">
                <NextImage
                    className="object-cover"
                    src={banner}
                    alt="Featured: Smth"
                    fill={true}
                    placeholder="blur"
                    priority
                />
            </div>
            <div
                className={`
                    w-full
                    flex
                    flex-col
                    col-span-full
                    row-start-3
                    row-end-5
                `.trim()}
            >
                <Releases
                    autoplay
                    releases={releases}
                    className={`
                        relative
                        pl-96 
                        pb-10
                        after:absolute 
                        after:-top-28
                        after:left-0 
                        after:w-full 
                        after:h-28
                        after:bg-gradient-to-t
                        after:to-transparent
                        after:from-[var(--secondary-BG)] 
                        bg-secondary 
                        mt-auto`.trim()}
                />
            </div>
        </>
    );
}

Page.propTypes = {
    releases: PropTypes.array
};
