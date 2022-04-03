/* eslint-disable react/prop-types */
import { cleanName } from '../../../../shared/utils';
import { Cover } from '../../../common/cover';
import { FeatList } from '../../../common/feat-list';

// TODO: accept children -> reuse at header
const SidebarItem = ({ id, name, album, artists }) => (
    <li
        className="flex h-16 w-full px-4 items-center border-b border-b-secondary last-of-type:border-0"
        key={id}
    >
        <Cover
            src={album?.images[2].url}
            alt="TODO:"
            className="w-10 h-10 rounded overflow-hidden mr-2 flex-shrink-0"
            shimmerClassName="bg-secondary"
        />
        <div className="truncate">
            {/* TODO: common */}
            <h3 className="font-roboto font-medium text-primary leading-5 truncate text-sm">
                {cleanName(name)}
            </h3>
            <FeatList artists={artists} className="font-roboto font-medium flex text-xs" />
        </div>
    </li>
);

export { SidebarItem };
