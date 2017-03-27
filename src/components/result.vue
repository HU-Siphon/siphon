<template>
    <div class="result">
        <div class="result-inner">
            <a v-bind:href="link">{{ name }}</a>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      name: {
        default: 'name'
      },
      link: {
        default: 'link'
      }
    }
  }
</script>

<style lang="scss" scoped="">
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
