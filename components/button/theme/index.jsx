import useDarkMode from 'use-dark-mode';

import { ThemeButtonStyled } from './styles';

const ThemeButton = () => {
    const { toggle } = useDarkMode(false, {
        element: typeof document !== 'undefined' ? document.documentElement : null
    });

    return <ThemeButtonStyled onClick={toggle} />;
};

export default ThemeButton;
