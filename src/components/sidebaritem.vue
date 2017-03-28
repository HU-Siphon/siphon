<template>
    <div>
        <div class="item" @click="toggleExpand">
            <div class="item-inner">
                <i class="fa fa-fw" :class="icon"></i><span v-if="!sidebarMinimized">{{ title }}</span>
            </div>
        </div>
        <div class="item-expand" v-if="expanded">
            <ul class="item-list">
                <li v-for="link in links"><a :href="link.link" class="item-link">{{ link.name }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        expanded: false
      }
    },
    props: {
      sidebarMinimized: {
        type: Boolean,
        default: function () {
          return false
        }
      },
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
          return [
            {}
          ]
        }
      }
    },
    methods: {
      toggleExpand: function () {
        this.$emit('expand')
        if (this.links.length > 0) {
          this.expanded = !this.expanded
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .item {
        background-color: #3A539B;
        padding: 20px 0;
    }

    .item-inner {
        margin: 0 10%;
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        font-size: 22px;
        text-decoration: none;
        color: #fff;
    }

    .item-expand {
        padding: 10px 0;
    }

    .item-list {
        list-style-type: none;
        margin: 0;
    }

    .item-link {
        color: #fff;
        text-decoration: none;
    }
</style>
