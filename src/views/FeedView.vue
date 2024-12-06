<template>
  <div class="main">
    <div class="storyView">
      <div v-if="loading">Loading...</div>
      <div v-else class="story-bar">
        <StoryCardComponent v-for="story in stories" :key="story.id" :story="story"/>
      </div>
    </div>
  </div>
</template>
<script>
import StoryCardComponent from "@/components/FeedComponents/StoryCardComponent.vue";

export default {
  name: 'Feed',
  components: {
    StoryCardComponent,
  },
  data() {
    return {
      stories: []
    }
  },
  computed: {
    loading() {
      return this.stories.length === 0;
    },
  }

}
</script>
<style lang="scss">
.main {
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: auto;

  .storyView {
    width: 100%;
    height: 200px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    overflow-y: auto;

    .story-bar {
      gap: 10px;
      display: flex;
      flex-direction: row;
      padding: 10px;
    }
  }

}
</style>