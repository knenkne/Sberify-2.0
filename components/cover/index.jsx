import NextImage from 'next/image';

// eslint-disable-next-line react/prop-types
const Cover = ({ src, alt, className }) => (
    <div className={`relative shadow-md overflow-hidden ${className}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-primary animate-pulse" />
        <NextImage src={src} alt={alt} layout="fill" unoptimized />
    </div>
);

export default Cover;
