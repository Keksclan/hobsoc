// stores/themeStore.js
import {defineStore} from 'pinia';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: null, // null = kein explizites Theme festgelegt
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
            this.theme = theme;
            document.documentElement.setAttribute('data-theme', theme); // HTML-Attribut setzen
        },
    },
});
