import { useTheme } from 'next-themes';
import { useCallback } from 'react';

import { ThemeButtonStyled } from './styles';

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    const handleClick = useCallback(() => {
        // TODO: Enum
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);

    return <ThemeButtonStyled onClick={handleClick} />;
};

export default ThemeButton;
