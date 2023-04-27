/* eslint-disable react/prop-types */

const SidebarBody = ({ children }) => {
    return (
        <div className="w-72 h-full bg-primary rounded-lg shadow-md shadow-black/75">
            {/* TODO: ol */}
            <ul className="my-1 mx-4 h-full overflow-y-scroll no-scrollbar">{children}</ul>
        </div>
    );
};

export { SidebarBody };
