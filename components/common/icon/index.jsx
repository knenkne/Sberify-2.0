import { createElement } from 'react';

// eslint-disable-next-line react/prop-types
const Icon = ({ Svg, className, svgClassName, role, onClick, id, ...props }) => {
    const as = role || (onClick ? 'button' : 'span');

    return createElement(
        as,
        {
            className,
            onClick,
            ...props
        },
        <Svg className={svgClassName} id={id} />
    );
};

export { Icon };
