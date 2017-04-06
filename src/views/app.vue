<template>
    <div class="app">
        <div class="sidebar">
            <sidebar title="Siphon" icon="fa-university" :sidebarLinks="sidebarLinks" :searchObject="searchObject"></sidebar>
        </div>
        <div class="pure-g">
            <div class="pure-u-1">
                <div :class="{ maximized : this.$store.state.sidebarMinimized, minimized : !this.$store.state.sidebarMinimized }">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import sidebar from '../components/sidebar.vue'
  import contentframe from './contentframe.vue'
  import SidebarLinks from '../sidebarLinks'
  import Search from '../search'
  export default {
    components: {
      sidebar,
      contentframe
    },
    data: function () {
      return {
        sidebarLinks: SidebarLinks.links,
        searchObject: Search
      }
    }
  }
</script>

<style lang="scss">
    html, button, input, select, textarea, .pure-g [class *= "pure-u"] {
        font-family: "Gentium Basic", serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Lato", sans-serif;
    }

    .app {
        min-height: 100vh;
        background: #3a6186;
        background: linear-gradient(to left, #3a6186, #89253e);
    }

    ._center {
        text-align: center;
    }

    .minimized {
        margin-left: 20%;
        width: 80%;
    }

    .maximized {
        margin-left: 100px;
        width: calc(100% - 100px);
    }

    @media screen and (max-width: 48em) {
        .minimized {
            width: 100%;
            margin-left: 0;
        }

        .maximized {
            width: 100%;
            margin-left: 0;
        }
    }
</style>
