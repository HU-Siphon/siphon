<template>
    <div class="pure-g">
        <navbar></navbar>
        <div class="pure-u-1-6"></div>
        <div class="pure-u-2-3">
            <div class="pure-g">
                <div class="pure-u-1">
                    <div class="search">
                        <search></search>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import navbar from '../components/navbar.vue'
  import search from '../components/search.vue'
  export default {
    components: {
      navbar,
      search
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .search {
        padding-top: 15px;
    }
</style>
