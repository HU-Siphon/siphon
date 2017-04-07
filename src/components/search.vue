<template>
    <div class="search">
        <div class="search-form" v-if="!minimizeSearch">
            <input placeholder="Type to search" type="search" v-model:value="value" @input="search"
                   v-focus="focused" @focus="focused = true" @blur="focused = false">
            <div class="results">
                <template v-for="(result, index) in topResults">
                    <result :name="result.name" :link="result.link" :type="result.type" :index="index"></result>
                </template>
            </div>
        </div>
        <i class="fa fa-fw fa-search" v-if="minimizeSearch" @click="searchIconClick"></i>
    </div>
</template>

<script>
  import result from './search-result.vue'
  import Fuse from 'fuse.js'
  import { focus } from 'vue-focus'

  export default {
    directives: {
      focus: focus
    },
    components: {
      result
    },
    props: {
      minimizeSearch: {
        type: Boolean,
        default: false
      },
      searchObject: {
        type: Object,
        required: true
      }
    },
    data: function () {
      return {
        value: '',
        results: [],
        focusedIndex: 0,
        focused: false
      }
    },
    computed: {
      topResults: function () {
        return this.results.slice(0, 10)
      }
    },
    methods: {
      search: function () {
        this.results = this.fuse.search(this.value)
        this.focusedIndex = 0
      },
      searchIconClick: function () {
        this.$emit('searchIconClick')
        this.focused = true
      },
      moveDown: function () {
        if (this.focusedIndex < this.topResults.length - 1) {
          this.focusedIndex += 1
        }
      },
      moveUp: function () {
        if (this.focusedIndex !== 0) {
          this.focusedIndex -= 1
        }
      }
    },
    created: function () {
      this.fuse = new Fuse(this.searchObject.links, this.searchObject.options)
    }
  }
</script>

<style lang="scss" scoped>
    .search {
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
