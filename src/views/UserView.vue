<template>
    <main class="content">
        <ProfileSidebar />
        <router-view />
    </main>
</template>
<script>
import ProfileSidebar from '../components/sidebar_components/ProfileSidebar.vue';

export default {
    components: {ProfileSidebar}
}
</script>