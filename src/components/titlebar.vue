<template>
    <nav class="titlebar">
        <h1 class="title">
            <slot name="title"></slot>
        </h1>
    </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
    .titlebar {
        padding: 12.5px 0;
        background-color: #22313F;
        text-align: center;
        color: #fff;
        position: fixed;
        width: 80%;
    }

    .title {
        margin: 0;
        font-size: 22px;
        font-weight: 400
    }
</style>
