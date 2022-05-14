/* eslint-disable react/prop-types */
import cx from 'classnames';

import { cleanTitle } from '../../../shared/utils';
import { Cover } from '../cover';

const Template = ({ title, subtitle, image, children, isLoading }) => {
    return (
        <>
            <div className="bg-secondary pb-10 shadow-md shadow-black/50 z-10 col-start-1 col-end-3 row-start-2 row-end-3 pl-96 pr-10 min-w-0">
                <div className={cx(isLoading && 'animate-pulse', 'flex items-end ml-10')}>
                    {isLoading ? (
                        <div className="w-60 h-60 flex-shrink-0 rounded-lg mr-5 shadow-md shadow-black/50 bg-primary" />
                    ) : (
                        <Cover
                            src={image}
                            alt={`123 by 321`}
                            className="w-60 h-60 flex-shrink-0 rounded-lg mr-5 shadow-md shadow-black/50"
                            isLoading={isLoading}
                        />
                    )}
                    {/* TODO: Headline common */}
                    <div className="relative flex-grow min-w-0">
                        {isLoading ? (
                            <div className="w-80 h-16 bg-primary rounded-lg mb-1" />
                        ) : (
                            <h3
                                className="w-full truncate font-archivo font-black text-6xl text-primary"
                                title={title}
                            >
                                {cleanTitle(title)}
                            </h3>
                        )}
                        {isLoading ? (
                            <div className="h-3.5 w-60 bg-primary rounded" />
                        ) : (
                            <h4 className="flex font-roboto font-medium text-sm text-secondary leading-none whitespace-pre">
                                {subtitle}
                            </h4>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-start bg-tertiary col-span-full row-start-3 row-end-5 pl-96 pb-10">
                {isLoading ? (
                    <ol className="w-full pt-6 px-10 list-decimal list-inside">
                        {new Array(5).fill('').map((_, i) => (
                            <li
                                key={`track-skeleton-${i}`}
                                className="
                        relative
                        flex 
                        flex-col
                        h-14
                        pl-14
                        before:absolute 
                        before:w-14 
                        before:h-14 
                        before:flex 
                        before:items-center 
                        before:justify-center
                        before:left-0
                        before:font-roboto
                        before:text-secondary
                        justify-center
                        "
                            >
                                <div className="h-5 bg-secondary w-48 rounded mb-1 animate-pulse"></div>
                                <div className="h-4 bg-secondary w-20 rounded animate-pulse"></div>
                            </li>
                        ))}
                    </ol>
                ) : (
                    children
                )}
            </div>
        </>
    );
};

export { Template };
