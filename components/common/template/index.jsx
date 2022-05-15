/* eslint-disable react/prop-types */
import { cleanTitle } from '../../../shared/utils';
import { Cover } from '../cover';
import { Headline2 } from '../headline';
import { Typography } from '../typography';

// TODO: to layout + common skeletons
const Template = ({ title, subtitle, image, alt, children, isLoading }) => {
    return (
        <>
            <div className="col-span-full row-start-2 row-end-3 bg-secondary pb-10 shadow-md shadow-black/50 z-10 pl-96 pr-10 min-w-0">
                <div className="flex items-end ml-10">
                    <Cover
                        src={image}
                        alt={alt}
                        className="w-60 h-60 flex-shrink-0 rounded-lg mr-5 shadow-md shadow-black/50"
                        isLoading={isLoading}
                    />
                    <div className="relative flex-grow min-w-0">
                        <Headline2 className="w-full truncate" title={title} isLoading={isLoading}>
                            {cleanTitle(title)}
                        </Headline2>
                        <Typography
                            className="flex leading-none whitespace-pre text-secondary"
                            size="sm"
                            isLoading={isLoading}
                        >
                            {subtitle}
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-start bg-tertiary col-span-full row-start-3 row-end-5 pl-96 pb-10">
                {children}
            </div>
        </>
    );
};

export { Template };
