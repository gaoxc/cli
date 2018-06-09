<template>
    <div class="table">
        <!-- <Tabs value="name1">
            <TabPane label="已结算" name="name1">
            </TabPane>
            <TabPane label="未结算" name="name2">
            </TabPane>
        </Tabs> -->
        <Spin size="large" fix v-if="spinShow"></Spin>
        <Row type="flex" justify="center" class="table-title">
            <Col span="4">比赛开始时间</Col>
            <Col span="4">比赛</Col>
            <Col span="3">盘口ID</Col>
            <Col span="3">盘口类型</Col>
            <Col span="2">押注类型</Col>
            <Col span="2">押注人数</Col>
            <Col span="2">押注金额</Col>
            <Col span="2">结算金额</Col>
            <Col span="2">抽水金额</Col>
        </Row>
        <Row type="flex" justify="center" class="table-row" v-for="item in data1" v-if="item.handicapList.length > 0">
            <Col span="4">
                <span>{{dayjs(item.kickOffTime).format('YYYY-MM-DD')}}</span>
                <span>{{dayjs(item.kickOffTime).format('HH:mm')}}</span>
            </Col>
            <Col span="4">
                <span>{{item.homeList[0].name}} - {{item.awayList[0].name}}</span>
            </Col>
            <Col span="3">
                <div class="div3">
                    {{item.handicapList[0] && item.handicapList[0].handicapFundDisplay && item.handicapList[0].handicapFundDisplay.handicapId}}
                </div>
                <div class="div2">
                    {{item.handicapList[1] && item.handicapList[1].handicapFundDisplay && item.handicapList[1].handicapFundDisplay.handicapId}}
                </div>
            </Col>
            <Col span="3">
                <div class="div3">
                    胜负平
                </div>
                <div class="div2">
                    让分盘
                </div>
            </Col>
            <Col span="10">
                <div class="div3">
                    <div class="flex-span">
                        <span>1</span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[0] && item.handicapList[0].handicapFundDisplay.bettingMap[0].totalAcc}}
                        </span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[0] && item.handicapList[0].handicapFundDisplay.bettingMap[0].betTokenAmtSumTotal}}</span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[0] && item.handicapList[0].handicapFundDisplay.bettingMap[0].stlRetTokenAmtSumTotal}}</span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[0] && item.handicapList[0].handicapFundDisplay.bettingMap[0].profitAmt}}</span>
                    </div>
                    <div class="flex-span">
                        <span>x</span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[1] && item.handicapList[0].handicapFundDisplay.bettingMap[1].totalAcc}}
                        </span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[1] && item.handicapList[0].handicapFundDisplay.bettingMap[1].betTokenAmtSumTotal}}</span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[1] && item.handicapList[0].handicapFundDisplay.bettingMap[1].stlRetTokenAmtSumTotal}}</span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[1] && item.handicapList[0].handicapFundDisplay.bettingMap[1].profitAmt}}</span>
                    </div>
                    <div class="flex-span">
                        <span>2</span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[2] && item.handicapList[0].handicapFundDisplay.bettingMap[2].totalAcc}}
                        </span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[2] && item.handicapList[0].handicapFundDisplay.bettingMap[2].betTokenAmtSumTotal}}</span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[2] && item.handicapList[0].handicapFundDisplay.bettingMap[2].stlRetTokenAmtSumTotal}}</span>
                        <span>{{item.handicapList[0].handicapFundDisplay.bettingMap[2] && item.handicapList[0].handicapFundDisplay.bettingMap[2].profitAmt}}</span>
                    </div>
                </div>
                <div class="div2">
                    <div class="flex-span">
                        <span>
                            +1.0, +1.5
                        </span>
                        <span>{{item.handicapList[1].handicapFundDisplay.bettingMap[0] && item.handicapList[1].handicapFundDisplay.bettingMap[0].totalAcc}}
                        </span>
                        <span>{{item.handicapList[1].handicapFundDisplay.bettingMap[0] && item.handicapList[1].handicapFundDisplay.bettingMap[0].betTokenAmtSumTotal}}</span>
                        <span>{{item.handicapList[1].handicapFundDisplay.bettingMap[0] && item.handicapList[1].handicapFundDisplay.bettingMap[0].stlRetTokenAmtSumTotal}}</span>
                        <span>{{item.handicapList[1].handicapFundDisplay.bettingMap[0] && item.handicapList[1].handicapFundDisplay.bettingMap[0].profitAmt}}</span>
                    </div>
                    <div class="flex-span">
                        <span>-1.0, -1.5</span>
                        <span>{{item.handicapList[1].handicapFundDisplay.bettingMap[1] && item.handicapList[1].handicapFundDisplay.bettingMap[1].totalAcc}}
                        </span>
                        <span>{{item.handicapList[1].handicapFundDisplay.bettingMap[1] && item.handicapList[1].handicapFundDisplay.bettingMap[1].betTokenAmtSumTotal}}</span>
                        <span>{{item.handicapList[1].handicapFundDisplay.bettingMap[1] && item.handicapList[1].handicapFundDisplay.bettingMap[1].stlRetTokenAmtSumTotal}}</span>
                        <span>{{item.handicapList[1].handicapFundDisplay.bettingMap[1] && item.handicapList[1].handicapFundDisplay.bettingMap[1].profitAmt}}</span>
                    </div>
                </div>
            </Col>
        </Row>
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
    import store from 'store';
    import dayjs from 'dayjs';
    export default {
        data () {
            return {
                data1: [],
                pageNo: 1,
                pageSize: 10,
                spinShow: false
            };
        },
        methods: {
            dayjs: dayjs,
            prev () {
                this.pageNo--;
                this.fetchData(this.pageNo, this.pageSize);
            },
            next () {
                this.pageNo++;
                this.fetchData(this.pageNo, this.pageSize);
            },
            fetchData (pageNo, pageSize) {
                this.spinShow = true;
                this.$http.post('/adminGame/gameHandicapFundList', {
                    "gameGroupCode": "1212",
                    pageNo,
                    pageSize
                }, {
                    headers: {
                        ADMIN_TOKEN: store.get('tokenObj').token
                    }
                })
                .then((res) => {
                    this.data1 = res.data.data;
                    this.data1.map(item => {
                        item.date = dayjs(item.kickOffTime).format('YYYY-MM-DD');
                        item.time = dayjs(item.kickOffTime).format('HH:mm');
                        item.displayFlag = item.display === 'YES';
                        item.homeName = item.homeList[0].name;
                        item.awayName = item.awayList[0].name;
                        if (item.handicapList.length > 0) {
                            item.mainHandicap = item.handicapList[0];
                            item.asiaHandicap = item.handicapList[1];
                        }
                        return item;
                    });
                    this.spinShow = false;
                })
                .catch(() => {
                    this.spinShow = true;
                    this.$Message.error('网络异常');
                })
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
        mounted () {
            this.fetchData(this.pageNo, this.pageSize)
        }
    }
</script>
<style lang="scss" scoped>
    @import '@/views/style/global.scss';

    .table{
        height: 100%;
        padding: 50px;
        background: #fff;
        &-title{
            > div{
                height: 40px;
                background: #ccc;
                text-align: center;
                line-height: 40px;
            }
        }
        &-row{
            height: 150px;
            > div{
                background: #eee;
                position: relative;
                text-align: center;
                vertical-align: middle;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                &:after{
                    @include borderBottom();
                    @include borderLeft();
                }
                > span{
                    display: block;
                    width: 100%;
                    text-align: center;
                }
                > div{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    &:after{
                        @include borderBottom();
                    }
                }
                // .flex-span{
                //     > span{
                //         flex: 1;
                //         width: 100%;
                //         position: relative;
                //         &:after{
                //             @include borderBottom();
                //         }
                //     }
                // }
                .div3{
                    flex: 3;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    > div{
                        flex: 1;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        > span{
                            flex:1;
                            height: 100%;
                            line-height: 200%;
                            position: relative;
                            &:after{
                                @include borderBottom();
                                @include borderRight();
                            }
                        }
                    }
                }
                .div2{
                    flex: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    > div{
                        flex: 1;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        > span{
                            flex:1;
                            height: 100%;
                            line-height: 200%;
                            position: relative;
                            &:after{
                                @include borderBottom();
                                @include borderRight();
                            }
                        }
                    }
                }
            }
        }
    }
    .btn{
            width: 100%;
            height: 50px;
            text-align: center;
            padding: 50px;
            button{
                margin: 0 30px;
                width: 100px;
            }
        }
</style>


