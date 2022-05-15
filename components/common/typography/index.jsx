/* eslint-disable react/prop-types */
import { createElement } from 'react';

export const Typography = ({ className = '', isLoading, children, as = 'p', size = 'base' }) => {
    if (isLoading) {
        return size === 'base' ? (
            <div className="h-5 bg-primary w-48 rounded mb-1 animate-pulse" />
        ) : (
            <div className="h-4 bg-primary w-20 rounded animate-pulse" />
        );
    }

    return createElement(
        as,
        {
            className: `${className} font-roboto font-medium text-${size}`
        },
        children
    );
};

{
    /* <h3 className="font-roboto font-medium text-primary leading-5 truncate">
{cleanTitle(name)}
</h3> */
}

//     <h4 className="font-roboto font-medium text-secondary text-xs truncate">
//     {/* TODO: common Typography common Headline */}
//     {releaseDate ? humanizeDate(releaseDate) : artist}
// </h4>
