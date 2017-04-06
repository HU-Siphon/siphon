<template>
    <div class="app">
        <div class="sidebar">
            <sidebar title="Siphon" icon="fa-university" :links="sidebarLinks"></sidebar>
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
  export default {
    components: {
      sidebar,
      contentframe
    },
    data: function () {
      return {
        sidebarLinks: [
          {
            title: 'Navigation',
            icon: 'fa-compass',
            links: [
              {
                name: 'Dashboard',
                link: '/',
                type: 'ROUTER'
              },
              {
                name: 'Content',
                link: '/content',
                type: 'ROUTER'
              },
              {
                name: 'Settings',
                link: '/settings',
                type: 'ROUTER'
              }
            ]
          },
          {
            title: 'Personal',
            icon: 'fa-user',
            links: [
              {
                name: 'Chapel',
                link: 'https://pipeline.harding.edu/block/592',
                type: 'CONTENT'
              },
              {
                name: 'Housing',
                link: 'https://pipeline.harding.edu/block/66',
                type: 'CONTENT'
              }
            ]
          },
          {
            title: 'Student',
            icon: 'fa-graduation-cap',
            links: [
              {
                name: 'Enrolled classes',
                link: 'https://ssb.pipeline.harding.edu/hrdg/bwskfshd.P_CrseSchdDetl',
                type: 'CONTENT'
              },
              {
                name: 'Canvas',
                link: 'https://harding.instructure.com/',
                type: 'EXTERNAL'
              },
              {
                name: 'EASEL',
                link: 'https://cs.harding.edu/easel/cgi-bin/index',
                type: 'EXTERNAL'
              }
            ]
          },
          {
            title: 'Registration',
            icon: 'fa-check',
            links: [
              {
                name: 'Schedule planner',
                link: 'https://hardingu.collegescheduler.com/',
                type: 'CONTENT'
              },
              {
                name: 'Schedule planner cart',
                link: 'https://ssb.pipeline.harding.edu/hrdg/csched.p_regs_ssb',
                type: 'CONTENT'
              },
              {
                name: 'Chapel seat selection',
                link: 'https://ssb.pipeline.harding.edu/hrdg/szpseat.P_PickSeat',
                type: 'CONTENT'
              },
              {
                name: 'Purchase textbooks',
                link: 'https://pipeline.harding.edu/block/386',
                type: 'CONTENT'
              }
            ]
          },
          {
            title: 'Finance',
            icon: 'fa-money',
            links: [
              {
                name: 'Account Summary',
                link: 'https://pipeline.harding.edu/block/75',
                type: 'CONTENT'
              }
            ]
          }
        ]
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
        height: 100vh;
        overflow: hidden;
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
