/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

// TODO: 'as li'
const SidebarItem = forwardRef(({ className = '', children, ...props }, ref) => (
    <li className={`flex h-16 w-full items-center ${className}`.trim()} ref={ref} {...props}>
        {children}
    </li>
));

SidebarItem.displayName = 'SidebarItem';

export { SidebarItem };
