<template>
    <div class="NavBar">
        <div class="nav-container-right"><div class="logoContainer"><img class="logo" src="../assets/logo/HobSocLogo.png" alt=""></div></div>
        <div class="nav-container-center">2322</div>
        <div class="nav-container-left">32323</div>
    </div>
</template>
<script setup>
</script>
<style lang="scss">
    
    .NavBar 
    {
    
        height: 3rem;
        width: 100%;
        background-color: var(--navBar-background-color);
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

    }
</style>