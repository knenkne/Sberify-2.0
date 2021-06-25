import useDarkMode from 'use-dark-mode';

import { ThemeButtonStyled, WaveStyled } from './styles';

const ThemeButton = () => {
    const { toggle } = useDarkMode(true, {
        element: typeof document !== 'undefined' ? document.documentElement : null
    });

    return <ThemeButtonStyled onClick={toggle}>{/* <WaveStyled /> */}</ThemeButtonStyled>;
};

export default ThemeButton;
