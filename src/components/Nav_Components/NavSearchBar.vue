<script>
export default {
  name: "NavSearchBar"
}
</script>

<template>
  <div>
    <input type="text" v-model="searchTerm" placeholder="Search for products..."/>
    <button @click="searchProd">Search...</button>
  </div>
</template>

<style scoped lang="scss">

</style>