<template>
    <div class="table">
        <Row type="flex" justify="center" class="table-title">
            <Col span="3">比赛开始时间</Col>
            <Col span="3">比赛</Col>
            <Col span="2">盘口ID</Col>
            <Col span="2">盘口类型</Col>
            <Col span="2">押注类型</Col>
            <Col span="2">赔率</Col>
            <Col span="3">盘口状态</Col>
            <Col span="4">盘口创建</Col>
            <Col span="3">前端显示/隐藏</Col>
        </Row>
        <Row type="flex" justify="center" class="table-row" v-for="item in  handicapList" v-if="item.handicapList.length > 0" :key="item.id">
            <Col span="3">
                <span>{{dayjs(item.kickOffTime).format('YYYY-MM-DD')}}</span>
                <span>{{dayjs(item.kickOffTime).format('HH:mm')}}</span>
            </Col>
            <Col span="3">
                <span>{{item.homeList[0].name}} - {{item.awayList[0].name}}</span>
                <span>未开始</span>
            </Col>
            <Col span="2">
                <div class="div3" v-if="item.handicapList[0]">
                    {{item.handicapList[0].odds.handicapId}}
                </div>
                <div class="div2" v-if="item.handicapList[1]">
                    {{item.handicapList[1].odds.handicapId}}
                </div>
            </Col>
            <Col span="2">
                <div class="div3">
                    胜负平
                </div>
                <div class="div2">
                    让分盘
                </div>
            </Col>
            <Col span="2">
                <div class="div3 flex-span">
                    <span v-if="item.mainHandicapList" v-for="i in item.mainHandicapList">{{i.opp}}</span>
                    <!-- <span>2</span>
                    <span>x</span> -->
                </div>
                <div class="div2 flex-span">
                    <span v-if="item.asiaHandicapList" v-for="i in item.asiaHandicapList">{{i.opp}}</span>
                </div>
            </Col>
            <Col span="2">
                <div class="div3 flex-span">
                    <span v-if="item.mainHandicapList"  v-for="i in item.mainHandicapList">{{i.odds}}</span>
                    <!-- <span>2.18</span>
                    <span>1.0</span> -->
                </div>
                <div class="div2 flex-span">
                    <span v-if="item.asiaHandicapList" v-for="i in item.asiaHandicapList">{{i.odds}}</span>
                </div>
            </Col>
            <Col span="3">
                <div class="div3" v-if="item.mainHandicap">
                    <span>盘口: {{item.mainHandicap.status === "OPEN" ? '已创建' : '未创建'}}</span>
                    <span>前端: {{item.mainHandicap.display === "YES" ? '显示' : '隐藏'}}</span>
                </div>
                <div class="div2" v-if="item.asiaHandicap">
                    <span>盘口: {{item.asiaHandicap.status === "OPEN" ? '已创建' : '未创建'}}</span>
                    <span>前端: {{item.asiaHandicap.display === "YES" ? '显示' : '隐藏'}}</span>
                </div>
            </Col>
            <Col span="4">
                <div class="div3 flex-span" v-if="item.mainHandicap">
                    <Button type="primary" :disabled="item.mainHandicap.status !== 'INIT'">立即手动动创建</Button>
                </div>
                <div class="div2 flex-span" v-if="item.asiaHandicap">
                    <Button type="primary" :disabled="item.asiaHandicap.status !== 'INIT'">立即手动动创建</Button>
                </div>
            </Col>
            <Col span="3">
                <div class="div3" v-if="item.mainHandicap">
                    <i-switch v-model="item.mainHandicap.displayFlag" @on-change="change(item.mainHandicap)" style="z-index:10"></i-switch>
                </div>
                <div class="div2" v-if="item.asiaHandicap">
                    <i-switch v-model="item.asiaHandicap.displayFlag" @on-change="change(item.asiaHandicap)" style="z-index:10"></i-switch>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    import dayjs from 'dayjs';
    import store from 'store';
    export default {
        props: {
            handicapList:{
                default: []
            }
        },
        data () {
            return {
                switch1: true,
                day: 1,
                dayList: [
                    {
                        label: 1,
                        value: '1'
                    },
                    {
                        label: 2,
                        value: '2'
                    },
                    {
                        label: 3,
                        value: '3'
                    }
                ],
                openData: []
            };
        },
        methods: {
            change (handicap) {
                this.$http.post('/adminGame/editGameStatus', {
                    "display": handicap.displayFlag ? 'YES' : 'NO',
                    "gameId": handicap.id,
                    "id": handicap.id,
                    "status": handicap.status
                },{
                    headers: {
                        ADMIN_TOKEN: store.get('tokenObj').token
                    }
                })
                .then((res) => {
                    this.$Message.info('状态修改成功');
                })
                .catch(() => {
                    this.$Message.err('系统异常，请稍后重试');
                })
            },
            dayjs: dayjs
        },
        mounted () {
            console.log(this.handicapList);
        }
    }
</script>
<style lang="scss" scoped>
    @import '@/views/style/global.scss';

    .table{
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
                .flex-span{
                    > span{
                        flex: 1;
                        width: 100%;
                        position: relative;
                        &:after{
                            @include borderBottom();
                        }
                    }
                }
                .div3{
                    flex: 3;
                }
                .div2{
                    flex: 2;
                }
            }
        }
    }
</style>


