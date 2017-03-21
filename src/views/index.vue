<template>
    <div class="pure-g">
        <navbar></navbar>
        <div class="pure-u-1-6"></div>
        <div class="pure-u-2-3">
            <search v-on:update="doSearch"></search>
            <results></results>
            <ul>
                <li v-for="result in results">
                    <a :href="result.link">{{ result.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import navbar from '../components/navbar.vue'
  import search from '../components/search.vue'
  import results from '../components/results.vue'
  import Fuse from 'fuse.js'
  export default {
    components: {
      navbar,
      search,
      results
    },
    methods: {
      doSearch (value) {
        this.search = value
        this.results = this.fuse.search(value)
      }
    },
    data: function () {
      return {
        search: '',
        results: [],
        options: {
          shouldSort: true,
          threshold: 0.6,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
            'name'
          ]
        },
        links: [
          {
            name: 'Harding Homepage',
            link: 'http://harding.edu'
          },
          {
            name: 'Pipeline',
            link: 'https://pipeline-old.harding.edu'
          },
          {
            name: 'New Pipeline',
            link: 'https://pipeline.harding.edu'
          },
          {
            name: 'Canvas',
            link: 'https://harding.instructure.edu'
          },
          {
            name: 'Computer science portal',
            link: 'http://cs.harding.edu/'
          },
          {
            name: 'EASEL',
            link: 'https://cs.harding.edu/easel/cgi-bin/index'
          },
          {
            name: 'Microsoft IMAGINE',
            link: 'http://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=5bbb0d2d-3770-e011-971f-0030487d8897&vsro=8&JSEnabled=1'
          },
          {
            name: 'Campus Box',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=zwlkcomb.P_DispInfo'
          },
          {
            name: 'Account Information',
            link: 'https://pipeline-old.harding.edu/sso/ssb.php?proc=z_cashnet_sso.p_cashnet_login'
          }
        ]
      }
    },
    created: function () {
      this.fuse = new Fuse(this.links, this.options)
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
