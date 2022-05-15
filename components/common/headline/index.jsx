/* eslint-disable react/prop-types */
export const Headline2 = ({ title, className = '', isLoading, children }) => {
    if (isLoading) {
        return <div className="w-80 h-16 bg-primary rounded-lg mb-1 animate-pulse" />;
    }

    return (
        <h2 className={`${className} font-archivo font-black text-6xl text-primary`} title={title}>
            {children}
        </h2>
    );
};
