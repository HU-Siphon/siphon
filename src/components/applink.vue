<template>
    <div class="app-link">
        <a :href="link" v-if="type === 'EXTERNAL'">{{ name }}</a>
        <a v-on:click="clickContentLink" v-if="type === 'CONTENT'">{{ name }}</a>
        <router-link :to="link" v-if="type === 'ROUTER'">{{ name }}</router-link>
    </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    },
    methods: {
      clickContentLink: function () {
        this.$store.commit('updateContent', this.link)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
