<template>
    <nav class="sidebar" :class="{ sidebarShown : collapsed }">
        <div class="pure-g">
            <div class="pure-u-1 header">
                <div class="pure-g">
                    <div class="pure-u-4-5 brand">
                        <i class="fa fa-fw" :class="icon"></i> Siphon
                    </div>
                    <div class="pure-u-1-5 compact" v-on:click="collapse">
                        <i class="fa fa-arrow-left compact-icon"></i>
                    </div>
                </div>
            </div>
            <div class="pure-u-1 search">
                <search @gainFocus="showSearch" @loseFocus="hideSearch" @clickLink="console.log('hi')"></search>
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
    props: {
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      }
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
        width: 20%;
    }

    @media screen and (max-width: 48em) {
        .sidebar {
            right: 100%;
            width: 80% !important;
        }

        .sidebarShown {
            left: 0;
        }
    }

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
        background-color: #36D7B7;
    }

    @media screen and (max-width: 48em) {
        .compact {
            position: relative;
            left: 20%;
        }
    }

    .compact-icon {
        padding: 15px 0;
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
