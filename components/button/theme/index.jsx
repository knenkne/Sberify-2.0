import useDarkMode from 'use-dark-mode';
import { ThemeButtonStyled } from './styles';

const ThemeButton = () => {
    const { toggle } = useDarkMode();

    return <ThemeButtonStyled onClick={toggle} />;
};

export default ThemeButton;
