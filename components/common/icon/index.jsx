// TODO: onClick -> button | span
// eslint-disable-next-line react/prop-types
const Icon = ({ Svg, ...props }) => (
    <button
        className="shrink-0 relative z-10 w-8 h-8 ml-3 flex items-center justify-center rounded cursor-pointer text-secondary hover:text-primary"
        {...props}
    >
        <Svg className="w-5 h-5 stroke-current" />
    </button>
);

export { Icon };
