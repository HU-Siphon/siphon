<template>
    <div>
        <div class="sidebar">
            <sidebar></sidebar>
        </div>
        <div class="pure-g">
            <div class="pure-u-1-5"></div>
            <div class="pure-u-4-5">
                <div class="pure-g">
                    <div class="pure-u-1">
                        <titlebar>
                            <span slot="title">Pipeline</span>
                        </titlebar>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import sidebar from '../components/sidebar.vue'
    import titlebar from '../components/titlebar.vue'
    /* eslint-disable */
    export default {
        components: {
            sidebar,
            titlebar
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        padding-top: 15px;
    }

    .sidebar {
        width: 20%;
    }
</style>
