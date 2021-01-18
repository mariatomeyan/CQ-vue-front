<template>
    <div>
        <NavBar />
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";

    export default {
        name: "MainLayout",
        components: {NavBar}
    }
</script>

<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .bg-light-grey {
        background: #f0f1ff;
    }
</style>
