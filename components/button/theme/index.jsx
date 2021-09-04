import { useTheme } from 'next-themes';
import { useCallback } from 'react';

import { Theme } from '../../../shared/constants';
import { ThemeButtonStyled } from './styles';

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    const handleClick = useCallback(() => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }, [theme]);

    return <ThemeButtonStyled onClick={handleClick} />;
};

export default ThemeButton;
