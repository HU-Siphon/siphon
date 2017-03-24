<template>
    <div class="pure-g">
        <div class="sidebar">
            <sidebar></sidebar>
        </div>
        <div class="pure-u-1-5">
        </div>
        <div class="pure-u-4-5">
            <div class="pure-g">
                <div class="pure-u-1">
                    <titlebar></titlebar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import sidebar from '../components/sidebar.vue'
  export default {
    components: {
      sidebar
    }
  }
</script>

<style lang="scss" scoped>
    .search {
        padding-top: 15px;
    }

    .sidebar {
        width: 20%;
    }
</style>
