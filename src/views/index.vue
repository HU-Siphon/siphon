<template>
    <div class="pure-g">
        <navbar></navbar>
        <div class="pure-u-1-6"></div>
        <div class="pure-u-2-3">
            <div class="pure-g">
                <div class="pure-u-2-3">
                    <div>
                        <h1>General Information</h1>
                        <ul>
                            <li>Remaining chapel skips: 15</li>
                            <li>DCB: $250</li>
                            <li>Caf Swipes: 40</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Grades</h1>
                        <ul>

                        </ul>
                    </div>
                </div>
                <div class="pure-u-1-3">
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

<style lang="scss" scoped>
    .search {
        padding-top: 15px;
    }
</style>
