<template>
    <div class="result">
        <a v-bind:href="link">{{ name }}</a>
    </div>
</template>

<script>
    export default {
      props: {
        name: {
          default: 'name'
        },
        link: {
          default: 'link'
        }
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .result {
        padding: 10px 0;
    }
</style>
