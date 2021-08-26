import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

import { ThemeButtonStyled } from './styles';

const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const handleClick = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);
    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);
    // useEffect(() => {
    //     document.documentElement.classList.toggle('dark-mode', darkModeActive);
    // }, [darkModeActive]);
    if (!mounted) {
        return null;
    }
    return <ThemeButtonStyled onClick={handleClick}>{/* <WaveStyled /> */}</ThemeButtonStyled>;
};

export default ThemeButton;
