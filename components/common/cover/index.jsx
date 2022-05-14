import NextImage from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Cover = ({ src, alt, className = '', shimmerClassName = 'bg-primary', isLoading }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoadingComplete = () => {
        setIsLoaded(true);
    };

    return (
        <div className={`relative overflow-hidden ${className}`.trim()}>
            {!isLoaded && <div className={`w-full h-full animate-pulse ${shimmerClassName}`} />}
            {src && !isLoading && (
                <NextImage
                    priority={true}
                    src={src}
                    alt={alt}
                    layout="fill"
                    onLoadingComplete={handleLoadingComplete}
                    unoptimized
                />
            )}
        </div>
    );
};

Cover.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    shimmerClassName: PropTypes.string,
    isLoading: PropTypes.bool
};

export { Cover };
