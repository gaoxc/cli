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
        <handicapclose :handicap-list="handicapList" v-if="status === 'CLOSE'"></handicapclose>
        <handicapopen :handicap-list="handicapList" v-if="status === 'INIT' || status === 'OPEN' || status === 'SUSPEND'"></handicapopen>
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
    import dayjs from 'dayjs';
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
                handicapList: []
            }
        },
        computed: {
            canotPrev () {
                return this.pageNo === 1;
            },
            canotNext () {
                return this.handicapList.length < this.pageSize;
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
                    "pageSize": this.pageSize,
                    "gameStatus": this.status
                }, {
                    headers: {
                        ADMIN_TOKEN: store.get('tokenObj').token
                    }
                })
                .then((res) => {
                    if (res.data.errorCode !== 0) {
                        this.$Message.error(res.data.errorMsg);
                        return;
                    }
                    this.handicapList = res.data.data;
                    this.handicapList.map(item => {
                        item.date = dayjs(item.kickOffTime).format('YYYY-MM-DD');
                        item.time = dayjs(item.kickOffTime).format('HH:mm');
                        item.displayFlag = item.display === 'YES';
                        item.homeName = item.homeList[0].name;
                        item.awayName = item.awayList[0].name;
                        if (item.handicapList.length > 0) {
                            // item.handicapList.forEach((ele) => {
                            //     if (i.handicapType === 'main_full_time_result') {

                            //     }
                            // })
                            item.mainHandicap = item.handicapList.find(i => {
                                return i.handicapType === 'main_full_time_result';
                            });
                            if (item.mainHandicap) {
                                item.mainHandicap.displayFlag = item.mainHandicap.display === 'YES';
                                item.mainHandicapList = JSON.parse(item.mainHandicap.odds.content);
                            }
                            item.asiaHandicap = item.handicapList.find(i => {
                                return i.handicapType === 'asian_lines_asian_handicap';
                            });
                            if (item.asiaHandicap) {
                                item.asiaHandicap.displayFlag = item.asiaHandicap.display === 'YES';
                                item.asiaHandicapList = JSON.parse(item.asiaHandicap.odds.content);
                            }
                        }
                        return item;
                    })
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
