<template>
    <nav class="sidebar-nav" :class="{ collapsed : isSidebarCollapsed }">
        <div class="pure-g">
            <div class="pure-u-1 header">
                <div class="pure-g">
                    <div class="pure-u-1 brand" :class="{ 'pure-u-md-4-5' : !isSidebarCollapsed }">
                        <i class="fa fa-fw" :class="icon"></i> {{ title }}

                    </div>
                    <div class="pure-u-1 compact" v-on:click="toggle"
                         :class="{ 'pure-u-md-1-5' : !isSidebarCollapsed  }">
                        <i class="fa fa-fw fa-bars compact-icon"></i>
                    </div>
                </div>
            </div>
            <div class="pure-u-1 search">
                <search @gainFocus="showSearch" @loseFocus="hideSearch" v-if="!isSidebarCollapsed"></search>
                <i class="fa fa-fw fa-search" v-if="isSidebarCollapsed" @click="expand"></i>
            </div>
            <div class="pure-u-1" v-if="!isSearchActive">
                <sidebarlink v-for="link in links" :key="link.title" :title="link.title" :icon="link.icon"
                             :links="link.links" :isSidebarCollapsed="isSidebarCollapsed"></sidebarlink>
            </div>
            <div class="pure-u-1 bottom">
                <slot name="bottom"></slot>
            </div>
        </div>
    </nav>
</template>

<script>
  import search from './search.vue'
  import sidebarlink from './sidebarlink.vue'
  export default {
    components: {
      search,
      sidebarlink
    },
    props: {
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      links: {
        type: Array,
        default: function () {
          return [{}]
        }
      }
    },
    data: function () {
      return {
        isSearchActive: false,
        isSidebarCollapsed: false
      }
    },
    methods: {
      toggle: function () {
        this.isSidebarCollapsed = !this.isSidebarCollapsed
      },
      expand: function () {
        this.isSidebarCollapsed = false
      },
      showSearch: function () {
        this.isSearchActive = true
      },
      hideSearch: function () {
        this.isSearchActive = false
      }
    }
  }
</script>

<style lang="scss" scoped>
    $sidebarBackground: #22313F;
    $sidebarButtons: #36D7B7;

    .sidebar-nav {
        background-color: $sidebarBackground;
        height: 100vh;
        color: #fff;
        position: fixed;
        width: 20%;
        transition: left .5s ease;
    }

    .collapsed {
        width: 100px;
    }

    @media screen and (max-width: 48em) {
        .sidebar-nav {
            left: 0;
            width: 80%;
        }

        .collapsed {
            left: -100%;
        }
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
        background-color: $sidebarButtons;
        position: relative;

        &:hover {
            background-color: darken($sidebarButtons, 10%);
        }
    }

    @media screen and (max-width: 48em) {
        .compact {
            position: fixed;
            width: 20%;
            right: 0;
            opacity: .25;

            &:hover {
                opacity: 1;
            }
        }
    }

    .compact-icon {
        padding: 15px 0;
    }

    .search {
        text-align: center;
        margin: 30px 0;
    }

    .bottom {
        font-size: 22px;
        text-align: center;
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    .settings {
        padding: 20px 0;
        background-color: $sidebarButtons;

        &:hover {
            background-color: darken($sidebarButtons, 10%);
        }
    }
</style>
