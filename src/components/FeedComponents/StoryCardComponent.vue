<script>
export default {
  name: "StoryCardComponent",
  props: {
    story: {
      props: {
        user: {
          type: Object,
          required: true,
          props: {
            username: {type: String, required: true},
            pfp: {type: String, required: true}
          }
        }
      },
      type: Object,
      required: true
    }
  },
  computed: {
    borderState() {
      switch (this.state) {
        case 'active':
          return 'active-border';
        case 'friends':
          return 'frinds-border';
        default:
          return 'border-grey';
      }
    }
  }
}
</script>

<template>
  <div class="story-card">
    <div class="image-container">
      <div class="image-border" :class="borderState">
        <img :src="story.user.pfp" class="story-pfp"/>
      </div>
    </div>

    <h3 class="name">{{ story.user.username }}</h3>

  </div>
</template>

<style scoped lang="scss">
.border-gr
.active-border {
  background-color: red;
}

.friends-border {
  background-color: green;
}

.story-card {
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-bottom: 2px;
  height: 120px;
  width: 120px;
  border-radius: 8px;
  background-color: var(--navBar-background-color);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  gap: 1px;

  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    overflow: hidden;


    .image-border {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 75px;
      height: 75px;
      border-radius: 50%;
      padding: 8px;

      .story-pfp {
        width: 100%;
        height: 100%;

        object-fit: cover;
        border-radius: 50%;
        border: 4px solid var(--navBar-background-color);
      }
    }


  }

  h3.name {
    font-size: 15px;
    margin-top: 0;
    color: var(--font-color);
    text-align: center;
    place-self: center;
  }
}
</style>