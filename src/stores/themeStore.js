import {defineStore} from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: localStorage.getItem('theme') || null, // Lade das gespeicherte Theme oder setze auf null
    }),
    getters: {
        currentTheme: (state) => {
            if (state.theme) {
                return state.theme;
            }

            // Prüfe das bevorzugte Gerätethema
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        },
    },
    actions: {
        setTheme(theme) {
            this.theme = theme; // Setze das Theme
            localStorage.setItem('theme', theme); // Speichere das Theme im localStorage
            document.documentElement.setAttribute('data-theme', theme); // HTML-Attribut setzen
        },
        

    },
});