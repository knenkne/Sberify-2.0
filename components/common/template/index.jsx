/* eslint-disable react/prop-types */
import { cleanTitle } from '../../../shared/utils';
import { Cover } from '../cover';

const Template = ({ title, subtitle, image, children }) => (
    <>
        <div className="bg-secondary pb-12 shadow-md shadow-black/50 z-10 col-start-1 col-end-3 row-start-2 row-end-3 pl-96 pr-10 min-w-0">
            <div className="flex items-end ml-10">
                <Cover
                    src={image}
                    alt={`123 by 321`}
                    className="w-72 h-72 flex-shrink-0 rounded-lg mr-5 shadow-md shadow-black/50"
                />
                {/* TODO: Headline common */}
                <div className="relative flex-grow min-w-0">
                    <h3
                        className="w-full truncate font-archivo font-black text-7xl text-primary"
                        title={title}
                    >
                        {cleanTitle(title)}
                    </h3>
                    <h4 className="flex font-roboto font-medium text-base text-secondary leading-none whitespace-pre">
                        {subtitle}
                    </h4>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col items-start bg-tertiary col-span-full row-start-3 row-end-5 pl-96 pb-10">
            {children}
        </div>
    </>
);

export { Template };
