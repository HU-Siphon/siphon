<template>
    <div class="content">
        <iframe v-bind:src="content"></iframe>
    </div>
</template>

<script>
  export default {
    computed: {
      content () {
        return this.$store.state.content
      }
    }
  }
</script>

<style lang="scss">
    iframe {
        border: none;
        height: 100vh;
        width: 100%;
    }
</style>
