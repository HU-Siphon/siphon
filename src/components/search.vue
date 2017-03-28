<template>
    <div class="search-form">
        <input placeholder="Type to search" v-model:value="value" @input="search" @focus="gainFocus" @blur="loseFocus">
        <div class="results" v-if="focus" @mousedown="clickLink">
            <div v-for="result in topResults">
                <result :name="result.name" :link="result.link"></result>
            </div>
        </div>
    </div>
</template>

<script>
  import result from '../components/result.vue'
  import Fuse from 'fuse.js'
  import Links from '../links'

  export default {
    components: {
      result
    },
    data: function () {
      return {
        focus: false,
        clickedLink: false,
        value: '',
        results: [],
        options: {
          shouldSort: true,
          threshold: 0.3,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
            'name',
            'link',
            'terms'
          ]
        },
        links: Links.links
      }
    },
    computed: {
      topResults: function () {
        return this.results.slice(0, 10)
      }
    },
    methods: {
      clickLink: function () {
        this.clickedLink = true
      },
      search: function () {
        this.results = this.fuse.search(this.value)
        if (this.value === '') {
          this.loseFocus()
        } else {
          this.gainFocus()
        }
      },
      gainFocus: function () {
        if (this.value !== '') {
          this.focus = true
          this.$emit('gainFocus')
        }
      },
      loseFocus: function () {
        if (!this.clickedLink) {
          this.focus = false
          this.$emit('loseFocus')
        }
      }
    },
    created: function () {
      this.fuse = new Fuse(this.links, this.options)
    }
  }
</script>

<style lang="scss" scoped>
    .search-form {
        margin: 0 10%;
        input {
            color: #000;
            width: 100%;
            box-sizing: border-box;
            border: none;
            border-radius: 10px;
            padding: 7.5px;
        }
    }

    .results {
        margin-left: 1%;
        position: absolute;
        width: 77%;
    }
</style>
