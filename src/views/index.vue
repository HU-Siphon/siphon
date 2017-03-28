<template>
    <div>
        <div class="sidebar">
            <sidebar @clickLink="updateContent">
                <div class="pure-g" slot="header">
                    <div class="pure-u-4-5 brand">
                        <i class="fa fa-university"></i> Siphon
                    </div>
                    <div class="pure-u-1-5 compact">
                        <i class="fa fa-arrow-left"></i>
                    </div>
                </div>

                <div slot="links">
                    <sidebaritem title="Home" icon="fa-home" :links="[{name:'test',link:''}]"></sidebaritem>
                    <sidebaritem title="Personal" icon="fa-user"></sidebaritem>
                    <sidebaritem title="Student" icon="fa-graduation-cap"></sidebaritem>
                </div>

                <div class="pure-g" slot="bottom">
                    <div class="pure-u-2-3 account">
                        Account
                    </div>
                    <div class="pure-u-1-3 settings">
                        <i class="fa fa-gear"></i>
                    </div>
                </div>
            </sidebar>
        </div>
        <div class="pure-g">
            <div class="pure-u-1-5"></div>
            <div class="pure-u-4-5">
                <div class="pure-g">
                    <div class="pure-u-1">
                        <contentframe :content="content"></contentframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import sidebar from '../components/sidebar.vue'
  import titlebar from '../components/titlebar.vue'
  import contentframe from '../components/contentframe.vue'
  import sidebaritem from '../components/sidebaritem.vue'
  export default {
    components: {
      sidebar,
      titlebar,
      contentframe,
      sidebaritem
    },
    data: function () {
      return {
        content: 'https://pipeline.harding.edu/block/477'
      }
    },
    methods: {
      updateContent: function () {
        console.log('hi')
//        this.content = link
      }
    }
  }
</script>

<style lang="scss" scoped>
    .sidebar {
        width: 20%;
    }
</style>
