<template>
    <div class="main">
        <div class="header">
            <img src="../assets/logo.png" alt="">
            <div class="menu_list">
                <Menu @on-select="hander" mode="horizontal" theme="dark" >
                    <MenuItem name="handicap_manage">
                        <Icon type="ios-paper"></Icon>
                        盘口管理
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            资金管理
                        </template>
                        <MenuGroup>
                            <MenuItem name="handicap_money">盘口资金</MenuItem>
                            <MenuItem name="water_money">抽水资金</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <!-- <MenuItem name="4" disabled>
                        <Icon type="settings"></Icon>
                        用户管理
                    </MenuItem> -->
                </Menu>
            </div>
            <div class="header_setting" @click="handleSetting">
                <Icon type="ios-gear-outline"></Icon>
            </div>
            <Dropdown transfer @on-click="handleClickUserDropdown">
                <a href="javascript:void(0)">
                    <Icon type="person"></Icon>
                    <span class="main-user-name">管理员</span>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem name="loginout">退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="container">
            <div class="bread">
                <Breadcrumb separator=">">
                        <BreadcrumbItem :style="{'color':'#fff'}" to="/">Home</BreadcrumbItem>
                        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import utils from '@/libs/utils';
    import Cookies from 'js-cookie';

    export default {
        methods: {
            handleClickUserDropdown () {
                Cookies.set('user', '');
                utils.openNewPage(this, 'login');
            },
            handleSetting () {
                utils.openNewPage(this, 'setting_index');
            },
            hander (name) {
                utils.openNewPage(this, name);
            }
        },
        watch: {
            '$route' (val) {
                console.log(val);
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import './main.scss';
    i, span{
        font-size: 20px;
        height: 100%;
        cursor: pointer;
    }
    .ivu-icon-ios-gear-outline{
        color: #fff;
        margin-right: 10px;
    }
    .header_setting{
        height: 60px;
        line-height: 67px;
    }
    .bread{
        background-color: #666;
        color: #fff !important;
        font-size: 12;
        .ivu-breadcrumb-item-link{
            color: #fff !important;
        }
    }
    
</style>