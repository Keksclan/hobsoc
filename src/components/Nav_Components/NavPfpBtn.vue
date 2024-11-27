<script>
export default {
  name: "NavPfpBtn",
  props: {}
}
</script>

<template>
  <div class="PfpContainer">
    <img class="pic" src="../../assets/logo/HobSocLogo.png" alt="pfp">
  </div>
</template>

<style lang="scss">
.PfpContainer {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .pic {
    width: 2rem;
    height: 2rem;
  }
}
</style>