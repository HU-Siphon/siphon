<template>
    <div class="search">
        <input placeholder="Type to search" v-bind:value="value" v-on:input="updateValue($event.target.value)">
    </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .search {
        width: 100%;

        input {
            width: 100%;
        }
    }
</style>
