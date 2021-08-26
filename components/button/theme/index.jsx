import { useDarkMode } from 'next-dark-mode';
import { useCallback, useEffect } from 'react';

import { ThemeButtonStyled } from './styles';

const ThemeButton = () => {
    const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();

    const handleClick = useCallback(() => {
        darkModeActive ? switchToLightMode() : switchToDarkMode();
    }, [darkModeActive]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark-mode', darkModeActive);
    }, [darkModeActive]);

    return <ThemeButtonStyled onClick={handleClick}>{/* <WaveStyled /> */}</ThemeButtonStyled>;
};

export default ThemeButton;
