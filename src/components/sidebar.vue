<template>
    <nav class="sidebar">
        <div class="pure-g">
            <div class="pure-u-1 header">
                <slot name="header"></slot>
            </div>
            <div class="pure-u-1 search">
                <search @gainFocus="showSearch" @loseFocus="hideSearch"></search>
            </div>
            <div class="pure-u-1" v-if="!search">
                <slot name="links"></slot>
            </div>
            <div class="pure-u-1 bottom">
                <slot name="bottom"></slot>
            </div>
        </div>
    </nav>
</template>

<script>
  import search from '../components/search.vue'
  export default {
    components: {
      search
    },
    data: function () {
      return {
        search: false,
        collapsed: false
      }
    },
    methods: {
      collapse: function () {
        this.collapsed = !this.collapsed
      },
      showSearch: function () {
        this.search = true
      },
      hideSearch: function () {
        this.search = false
      }
    }
  }
</script>

<style lang="scss" scoped>
    .sidebar {
        background-color: #22313F;
        height: 100vh;
        color: #fff;
        position: fixed;
    }

    .header {
        text-align: center;
        font-family: 'Lato', sans-serif;
    }

    .brand {
        padding: 15px 0;
        font-size: 18px;
    }

    .compact {
        padding: 15px 0;
        background-color: #36D7B7;
    }

    .search {
        margin: 30px 0;
    }

    .bottom {
        font-size: 22px;
        text-align: center;
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    .account {
        padding: 20px 0;
        background-color: #36D7B7;
    }

    .settings {
        padding: 20px 0;
        background-color: #36D7B7;
    }
</style>
