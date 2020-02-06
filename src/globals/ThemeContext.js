export const themes = {
    blackMode: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    darkMode: {
        foreground: '#2f4f4ff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    themes.darkMode // default value
)

