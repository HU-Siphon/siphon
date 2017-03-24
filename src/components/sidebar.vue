<template>
    <nav class="sidebar">
        <div class="pure-g">
            <div class="pure-u-1 header">
                <div class="pure-g">
                    <div class="pure-u-4-5 brand">
                        <i class="fa fa-graduation-cap"></i> Siphon


                    </div>
                    <div class="pure-u-1-5 compact">
                        <i class="fa fa-arrow-left"></i>
                    </div>
                </div>
            </div>
            <div class="pure-u-1 search">
                <search></search>
            </div>
            <div class="pure-u-1">
                <sidebaritem>
                    <span slot="title">Home</span>
                    <i class="fa fa-home fa-fw" slot="icon"></i>
                </sidebaritem>
                <sidebaritem>
                    <span slot="title">Student</span>
                    <i class="fa fa-user fa-fw" slot="icon"></i>
                </sidebaritem>
                <sidebaritem>
                    <span slot="title">Registration</span>
                    <i class="fa fa-check fa-fw" slot="icon"></i>
                </sidebaritem>
            </div>
            <div class="pure-u-1 options">
                <div class="pure-g">
                    <div class="pure-u-2-3 account">
                        Account

                    </div>
                    <div class="pure-u-1-3 settings">
                        <i class="fa fa-gear"></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
  import search from '../components/search.vue'
  import sidebaritem from './sidebaritem.vue'
  export default {
    components: {
      search,
      sidebaritem
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
        padding: 30px 0;
        font-size: 18px;
    }

    .compact {
        padding: 30px 0;
        background-color: #36D7B7;
    }

    .search {
        margin: 20px 0;
    }

    .options {
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
