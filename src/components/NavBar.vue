<template>
    <nav>
      <router-link class="pretty-link ma-5" :to="{ path: '/' }"> Home </router-link>
      <router-link class="pretty-link ma-5" :to="{ path: 'saved' }"> Saved </router-link>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    };
</script>

<style scoped>
</style>
