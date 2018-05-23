<template>
    <div>
        <div style="height: 100px; background: red;">
            this is main;
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
    @import './main.scss';
</style>


