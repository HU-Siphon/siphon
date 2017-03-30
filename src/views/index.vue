<template>
    <div>
        <div class="sidebar">
            <sidebar title="Siphon" icon="fa-university">
                <div slot="links">
                    <sidebaritem title="Home" icon="fa-home" :links="this.homeLinks"></sidebaritem>
                    <sidebaritem title="Personal" icon="fa-user" :links="this.personalLinks"></sidebaritem>
                    <sidebaritem title="Student" icon="fa-graduation-cap" :links="this.studentLinks"></sidebaritem>
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
            <div class="pure-u-1 pure-u-md-1-5"></div>
            <div class="pure-u-1 pure-u-md-4-5">
                <div class="pure-g">
                    <div class="pure-u-1">
                        <contentframe></contentframe>
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
        homeLinks: {

        },
        personalLinks: {

        },
        studentLinks: {

        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
