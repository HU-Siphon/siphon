<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    html, button, input, select, textarea, .pure-g [class *= "pure-u"] {
        font-family: "Gentium Basic", serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Lato", sans-serif;
    }

    .app {
        height: 100vh;
        overflow: hidden;
        background: #3a6186;
        background: linear-gradient(to left, #3a6186 , #89253e);
    }
</style>
