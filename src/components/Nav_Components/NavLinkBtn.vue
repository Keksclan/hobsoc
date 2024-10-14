<template>
    <router-link :to="path" class="nav-link" active-class="active">
        <span class="text">{{ name }}</span>

    </router-link>
</template>

<script>

export default {
    props: {
        name: String,
        path: String
    },
    computed: {
    isActive() {
      return this.$route.path === this.path; // Active state based on route
    },
  },
  methods: {
    navigate() {
      this.$router.push(this.path); // Navigate to route
    },
  },

};
</script>
<style lang="scss">
.nav-link {
    font-family: 'roboto';
    text-decoration: none;
    color: var(--menu-color);
    font-size: 1rem;
    font-weight: bold;

    :active {
        color: var(--navbar-link-acitve-color);
    }
    :hover {
        color: var(--navbar-link-hover-color);
    }
    
}
.active {
    color: var(--navbar-link-acitve-color);
    text-decoration: underline;
    :hover {
        color: var(--navbar-link-active-hover-color);
    }
}

</style>