import React, { createContext, useState, useContext } from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import { darkMode } from './darkMode';
import { lightMode } from './lightMode';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useState(systemTheme);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
    const style = theme === 'dark' ? darkMode : lightMode;
    const styles = StyleSheet.create({
        text: {
            color: style.colors.color
        },
        container: {
            backgroundColor: style.colors.backgroundColor,
            borderColor: style.colors.borderColor,
            color: style.colors.color
            
        },
        accentContainer: {
            backgroundColor: style.colors.itemBackgroundColor
        }
    });

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, styles }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useTheme = () => useContext(ThemeContext);
