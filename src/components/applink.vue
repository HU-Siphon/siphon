<template>
    <div>
        <a :href="link" target="_blank" v-if="type === 'EXTERNAL'" class="app-link">{{ name }} <i
                class="fa fa-external-link"></i></a>
        <router-link :to="link" v-if="type === 'ROUTER'" class="app-link">{{ name }}</router-link>
    </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    },
    computed: {
      processedLink: function () {
        if (this.type === 'EXTERNAL') {
          return this.link
        } else if (this.type === 'ROUTER') {
          return this.link
        }
      }
    },
    methods: {
      clickLink: function () {
        if (this.type === 'EXTERNAL') {
          //
        } else if (this.type === 'ROUTER') {
          //
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .app-link {
        color: #fff;
        text-decoration: none;

        i {
            font-size: 75%;
        }
    }
</style>
