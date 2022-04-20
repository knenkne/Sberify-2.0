/* eslint-disable react/prop-types */

const SidebarItem = ({ id, children, className = '' }) => (
    <div className={`flex h-16 w-full px-4 items-center ${className}`.trim()} key={id}>
        {children}
    </div>
);

export { SidebarItem };
