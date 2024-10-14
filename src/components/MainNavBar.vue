<template>
    <div class="NavBar">
        <div class="nav-container-right"><div class="logoContainer"><img class="logo" src="../assets/logo/HobSocLogo.png" alt=""></div></div>
        <div class="nav-container-center">
            <NavLinkBtn 
            v-for="item in navItems"
            :key="item.name"
            :name="item.label"
            :path="item.path"
            />
        </div>
        <div class="nav-container-left">32323</div>
    </div>
</template>
<script>
import NavLinkBtn from './Nav_Components/NavLinkBtn.vue';
export default {
    components: {
        NavLinkBtn,
    },
    data() {
        return {
            navItems: [
                {name: 'home', path: '/', label: 'Home'},
                {name: 'feed', path: '/feed', label: 'Feed'},
                {name: 'group', path: '/groups', label: 'Groups'},
            ],
    };
},};

</script>
<style lang="scss">
    
    .NavBar 
    {
    
        height: 3rem;
        width: 100%;
        background-color: var(--navBar-background-color);
        color: var(--menu-color);
        display: flex;
        justify-content: space-between;
        
        flex-direction: row;
        align-items: center;
        .nav-container-right {
            padding-left:1rem;
            display: flex;
            flex-direction: row;
            .logoContainer {
                width:2rem;
                height: 2rem;
                .logo {
                    width:2rem;
                    height:2rem;
                }
            }
            
        }
        .nav-container-center {
            display: flex;
            width:20rem;
            min-width:fit-content;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            
        }

    }
</style>