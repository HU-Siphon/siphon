<template>
    <div class="item">
        <div class="item-inner">
            <a href="" class="title">
                <slot name="icon"></slot>
                <slot name="title"></slot>
            </a>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .item {
        background-color: #3A539B;
        padding: 20px 0;
    }

    .item-inner {
        margin: 0 10%;
    }

    .title {
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        font-size: 22px;
        text-decoration: none;
        color: #fff;
    }
</style>
