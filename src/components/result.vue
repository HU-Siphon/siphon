<template>
    <div class="result">
        <div class="result-inner">
            <a v-on:click="clickLink">{{ name }}</a>
        </div>
    </div>
</template>

<script>
  const LINK_TYPE = {
    OUTSIDE_CONTENT: {
      value: 1
    },
    LOCAL_CONTENT: {
      value: 2
    },
    LINK: {
      value: 3
    }
  }

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
        type: LINK_TYPE,
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
