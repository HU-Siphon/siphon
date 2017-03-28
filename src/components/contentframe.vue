<template>
<div class="content">
    <iframe v-bind:src="content"></iframe>
</div>
</template>

<script>
    export default {
      props: {
        content: {
          type: String,
          required: true
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
