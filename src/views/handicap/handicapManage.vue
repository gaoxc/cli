<template>
    <div class="handicap">
        <Tabs :value="status" @on-click="changeTab">
            <TabPane label="未创建（INIT）" name="INIT">
            </TabPane>
            <TabPane label="已打开（OPEN）" name="OPEN">
            </TabPane>
            <TabPane label="已关闭（CLOSE）" name="CLOSE">
            </TabPane>
            <TabPane label="已暂停（SUSPEND）" name="SUSPEND">
            </TabPane>
        </Tabs>
        <handicapclose :data1="data1" v-if="status === 'close'"></handicapclose>
        <handicapopen :data1="data1" v-if="status === 'open'"></handicapopen>
        <div class="btn">
            <Button type="primary" :disabled="canotPrev" @click="prev">
                上一页
            </Button>
            <Button type="primary" :disabled="canotNext" @click="next">
                下一页
            </Button>
        </div>
    </div>
</template>
<script>
    import handicapclose from './handicap-close';
    import handicapopen from './handicap-open';

    import store from 'store';
    export default {
        components: {
            handicapclose,
            handicapopen
        },
        data () {
            return {
                handicapType: '0',
                handicapStatus: '0',
                status: 'INIT',
                pageNo: 1,
                pageSize: 10,
                data1: []
            }
        },
        computed: {
            canotPrev () {
                return this.pageNo === 1;
            },
            canotNext () {
                return this.data1.length < this.pageSize;
            }
        },
        methods: {
            changeTab (name) {
                this.pageNo = 1;
                this.status = name;
                this.fetchData();
            },
            next () {
                this.pageNo++;
                this.fetchData();
            },
            prev () {
                this.pageNo--;
                this.fetchData();
            },
            fetchData () {
                this.$http.post('/adminGame/gameInfoList', {
                    "gameGroupCode": "1212",
                    "pageNo": this.pageNo,
                    "pageSize": this.pageSize
                }, {
                    headers: {
                        ADMIN_TOKEN: store.get('tokenObj').token
                    }
                })
                .then((res) => {
                    console.log(res.data.data);
                    this.data1 = res.data.data;
                })
            }
        },
        mounted () {
            this.fetchData();
        }
    }
</script>
<style lang="scss" scoped>
    @import '@/views/style/global.scss';

    .handicap{
        background: #fff;
        height: 100%;
        padding: 50px;
        // > div{
        //     span{
        //         display: inline-block;
        //         margin-right: 30px;
        //     }
        // }
        &_status{
            margin: 50px 0;
        }
        &_page{
            margin-top: 20px;
            width: 100%;
            padding-left: 30%;
        }
        .btn{
            width: 100%;
            height: 50px;
            text-align: center;
            padding: 40px;
            button{
                margin: 0 30px;
                width: 100px;
            }
        }
    }
</style>
