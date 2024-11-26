<template>
  <div class="NavBar">
    <div class="nav-container-right">
      <div class="logoContainer"><img class="logo" src="../assets/logo/HobSocLogo.png" alt="Logo" @click="toHome()">
      </div>
    </div>
    <div class="nav-container-center">
      <NavLinkBtn
          v-for="item in navItems"
          :key="item.name"
          :name="item.label"
          :path="item.path"
      />
    </div>
    <div class="nav-container-left">
      <NavFuncIconBtn :on-click="switchThemes" :icon="theme_icon"/>
      <NavIconBtn
          v-for="items in navibtn"
          :icon="items.icon"
          :path="items.path"
      />
    </div>
  </div>
</template>
<script>
import NavLinkBtn from './Nav_Components/NavLinkBtn.vue';
import NavFuncIconBtn from './Nav_Components/NavFuncIconBtn.vue'
import {useThemeStore} from '@/stores/themeStore';
import NavIconBtn from "./Nav_Components/NavIconBtn.vue"

export default {
  components: {
    NavIconBtn,
    NavFuncIconBtn,
    NavLinkBtn,
  },
  data() {
    return {
      navItems: [
        {name: 'home', path: '/', label: 'Home'},
        {name: 'feed', path: '/feed', label: 'Feed'},
        {name: 'group', path: '/groups', label: 'Groups'},
      ],
      navibtn: [
        {icon: 'home', path: '/'},
        {icon: 'notifications', path: '/notifications'},
        {icon: 'account_circle', path: '/profile'},
      ]
    };

  },
  computed: {
    theme_icon() {
      const themestore = useThemeStore();
      return themestore.currentTheme === 'dark' ? 'dark_mode' : 'wb_sunny';
    }
  },
  methods: {
    toHome() {
      this.$router.push('/'); // Navigate to route
    },
    switchThemes() {
      // Implement theme switching logic here
      const themeStore = useThemeStore();
      themeStore.setTheme(themeStore.currentTheme === 'dark' ? 'light' : 'dark');

    }
  },
};

</script>
<style lang="scss">

.NavBar {

  height: 3rem;
  width: 100%;
  background-color: var(--navBar-background-color);
  color: var(--menu-color);
  display: flex;
  justify-content: space-between;

  flex-direction: row;
  align-items: center;

  .nav-container-right {
    padding-left: 1rem;
    display: flex;
    flex-direction: row;

    .logoContainer {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      .logo {
        width: 2rem;
        height: 2rem;
      }
    }


  }

  .nav-container-left {
    padding-right: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

  }

  .nav-container-center {
    display: flex;
    width: 20rem;
    min-width: fit-content;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

  }


}
</style>