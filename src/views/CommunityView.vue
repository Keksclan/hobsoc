<template>
    <main class="content">
        <h1>{{ communityName }}</h1>
        <router-view/>
    </main>
</template>
<script>

export default {
  props: ['communityName'], // community_name wird als Prop übergeben
  created() {
    // Optional: Logik, um die Community-Daten basierend auf dem Namen zu laden
    console.log("Community Name:", this.communityName);
  }
};
</script>
<style lang="scss">
.content {
    width: 100%;
    height: 100%;
    min-height: max-content;
    display: flex;
    justify-content: flex-start;


}
</style>