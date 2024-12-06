<script>
export default {
  name: "NavFuncIconBtn.vue",
  props: {
    icon: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.onClick(); // Ruft die angegebene Funktion auf
    },
  }
}
</script>

<template>
  <button class="icon-btn" @click="handleClick">
    <span class="material-symbols-outlined">
          {{ icon }}
    </span>
  </button>
</template>

<style lang="scss">
.icon-btn {
  background-color: var(--menu-btn-background-color);
  border: none;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  width: 2rem;
  height: 2rem;
  margin: 0;
  font-size: 24px;
  color: var(--menu-btn-icon-color);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: var(--hover-color);
  }

  &:active {
    background-color: var(--active-color);
  }

  span {

    vertical-align: middle;
  }
}
</style>