<template>
    <div>
        <div class="sidebar">
            <sidebar title="Siphon" icon="fa-university" :links="sidebarLinks">
                <div class="pure-g" slot="bottom">
                    <div class="pure-u-1 settings">
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
  import contentframe from '../components/contentframe.vue'
  export default {
    components: {
      sidebar,
      contentframe
    },
    data: function () {
      return {
        sidebarLinks: [
          {
            title: 'Home',
            icon: 'fa-home',
            links: [
              //
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
                name: 'Housing Status (Signout)',
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
                name: 'Course Schedule/Enrollment',
                link: 'https://pipeline.harding.edu/block/477',
                type: 'CONTENT'
              },
              {
                name: 'My Classes (Registration)',
                link: 'https://pipeline.harding.edu/block/410',
                type: 'CONTENT'
              }
            ]
          },
          {
            title: 'Registration',
            icon: 'fa-check',
            links: [
              //
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

<style lang="scss" scoped>

</style>
