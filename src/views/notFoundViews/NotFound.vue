<template>
    <main>
    <div class="not-found">
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/">Go back to Home</router-link>
    </div>
</main>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style lang="scss">
  main {
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .not-found {
    color: var(--menu-color);
    border-radius: 1rem;;
    padding: 1rem;
    text-align: center;
    
    background-color: var(--navBar-background-color);
    width:20rem;
    h1 {
        font-size: 5rem;
    }
  }
  
  </style>