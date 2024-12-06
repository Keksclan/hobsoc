<script>
export default {
  name: "ProfileSideBarPicture",
  props: {
    profilePicture: {
      type: String,
      required: true
    },
    status: {}
  }
}
</script>

<template>
  <div class="profile-container">
    <div class="picture-border">
      <img :src="profilePicture" alt="Profile Picture"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>