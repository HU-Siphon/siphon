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
        border-radius: 5px;
        background-color: #6C7A89;
        padding: 2px 0;

        &:hover {
            background-color: darken(#6C7A89, 10%);
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
