<template>
    <div class="system-app">
        22222
    </div>
</template>
<script>
export default {
    data() {
        return {
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