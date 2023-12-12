import { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Vous pouvez utiliser une couleur au lieu de 'light'

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useToggleTheme = () => {
    const { toggleTheme } = ThemeProvider();
    return toggleTheme;
  };

export default ThemeContext;