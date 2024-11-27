<script>
export default {
  name: "NavIconBtn",
  props: {
    icon: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <router-link class="icon-btn" :to="path">
    <span class="material-symbols-outlined">
          {{ icon }}
    </span>
  </router-link>
</template>

<style lang="scss">
.icon-btn {
  background-color: var(--menu-btn-background-color);
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  width: 2rem;
  height: 2rem;
  margin: 0;
  font-size: 24px;
  color: var(--menu-btn-icon-color);
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    color: var(--menu-btn-icon-hover-color);
    background-color: var(--menu-btn-background-color);
  }

  &:active {
    background-color: var(--active-color);
  }

  span {

    vertical-align: middle;
  }
}
</style>