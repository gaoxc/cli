<template>
    <div class="main">
        <div class="header">
            <img src="../assets/logo.png" alt="">
            <div class="menu_list">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <MenuItem name="1">
                        <Icon type="ios-paper"></Icon>
                        盘口管理
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            资金管理
                        </template>
                        <MenuGroup>
                            <MenuItem name="3-1">盘口资金</MenuItem>
                            <MenuItem name="3-2">抽水资金</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                        <Icon type="settings"></Icon>
                        用户管理
                    </MenuItem>
                </Menu>
            </div>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
    @import './main.scss';
</style>