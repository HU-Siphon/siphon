<template>
    <div class="pure-g">
        <navbar></navbar>
        <div class="pure-u-1-6"></div>
        <div class="pure-u-2-3">
            <search v-model="price"></search>
            <results></results>
        </div>
    </div>
</template>

<script>
  import navbar from '../components/navbar.vue'
  import search from '../components/search.vue'
  import results from '../components/results.vue'
  export default {
    components: {
      navbar,
      search,
      results
    },
    methods: {
      search() {

      }
    },
    data: {
      input: ''
    }
  }

  const links = [
    {
      name: "Homepage",
      link: "http://harding.edu"
    },
    {
      name: "Pipeline",
      link: "https://pipeline.harding.edu"
    },
    {
      name: "Canvas",
      link: "https://harding.instructure.edu"
    }
  ]
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
