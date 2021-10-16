import { useTheme } from 'next-themes';

import { Theme } from '../../../shared/constants';
import { ThemeButtonStyled } from './styles';

const ThemeButton = () => {
    const { theme, setTheme } = useTheme();
    const handleClick = () => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);

    return <ThemeButtonStyled onClick={handleClick} />;
};

export default ThemeButton;
