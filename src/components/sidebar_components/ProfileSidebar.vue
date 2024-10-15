<template>
    <div class="container">
        a
        <div class="head">
            <div class="profile-picture">
                <div v-if="loading" class="loader"></div>
                <img
                    v-else
                    :src="profileImageUrl"
                    alt="Profile Picture"
                    @load="loading = false"
                    @error="setDefaultImage"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            profileImageUrl: "../../assets/logo/EmptyPicture.png",
            loading: true, // Set initial path or null if loading
        };
    },
    methods: {
        setDefaultImage(event) {
            event.target.src = "../assets/logo/EmptyPicture.png"; // Replace with a default image on error
        },
    },
};
</script>
<style lang="scss">
.container {
    height: 100%;
    padding: 14px;
    width: 20rem;
    .head {
        .profile-picture {
            .loader {
                width: 100px;
                height: 100px;
                background-color: #f0f0f0;
                border-radius: 50%; /* Circular */
            }
        }
    }
}
</style>
