<template>
    <div class="system-app">
        111
    </div>
</template>
<script>
// import { CoreSidebarMenus } from '@/components/core/themes/default/';
// import { mapGetters } from 'vuex';
// import TagsView from '@/components/core/tags_nav/index.vue';
export default {
    data() {
        return {
            isCollapsed: true,
            Timeout: null
        };
    }
};
</script>
<style lang="less">
.menu-expanded {
    width: 200px;
    transition: width 0.2s ease;
    .el-menu:not(.el-menu--collapse) {
        width: 200px;
    }
}
.system-app {
    background: red;
    .menu-collapsed {
        width: 64px;
        transition: width 0.2s ease;
    }
    .mail-panel{
        display: flex;
        flex-direction: column;
    }
}
</style>