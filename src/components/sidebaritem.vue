<template>
    <div class="item">
        <div class="item-inner">
            <h1 class="title">
                <slot name="icon"></slot>
                <slot name="title"></slot>
            </h1>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .item {
        background-color: #3A539B;
        padding: 10px 0;
    }

    .item-inner {
        margin: 0 10%;
    }

    .title {
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-weight: 800;
        font-size: 22px;
    }
</style>
