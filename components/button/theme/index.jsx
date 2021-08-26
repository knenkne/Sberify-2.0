import { useTheme } from 'next-themes';
import { useCallback } from 'react';

import { ThemeButtonStyled } from './styles';

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    const handleClick = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);

    return <ThemeButtonStyled onClick={handleClick}>{/* <WaveStyled /> */}</ThemeButtonStyled>;
};

export default ThemeButton;
