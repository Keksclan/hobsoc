import {createApp} from 'vue';
import {createPinia} from 'pinia';
import './style.scss';
import router from './router';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

// Pinia und Router registrieren
app.use(pinia).use(router);

// App mounten
app.mount('#app');

// Theme-Initialisierung
import {useThemeStore} from "./stores/themeStore.js";

const themeStore = useThemeStore(); // Pinia muss zuerst initialisiert sein
themeStore.setTheme(themeStore.currentTheme);
