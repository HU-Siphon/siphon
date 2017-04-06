<template>
    <div class="result">
        <div class="result-inner">
            <applink class="list-link" :name="name" :link="link" :type="type" v-on:click="clickLink"></applink>
        </div>
    </div>
</template>

<script>
  import applink from '../components/applink.vue'

  export default {
    components: {
      applink
    },
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
    methods: {
      clickLink: function () {
        this.$store.commit('updateContent', this.link)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .result {
        width: 100%;
        margin-top: 3px;
        border-radius: 0;
        padding: 3px 0;
        background-color: lighten(#22313F, 10%);

        &:hover {
            background-color: lighten(#22313F, 15%);
        }
    }

    .result-inner {
        padding: 5px;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
</style>
