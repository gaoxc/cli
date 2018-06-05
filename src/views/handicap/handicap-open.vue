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
            <Col span="5">盘口创建</Col>
            <Col span="2">前端显示/隐藏</Col>
        </Row>
        <Row type="flex" justify="center" class="table-row">
            <Col span="3">
                <span>2018/5/10</span>
                <span>0:0:10</span>
            </Col>
            <Col span="3">
                <span>德国 - 哥斯达黎加</span>
                <span>未开始</span>
            </Col>
            <Col span="2">
                <div class="div3">
                    12312312
                </div>
                <div class="div2">
                    123123123
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
                    <span>1</span>
                    <span>2</span>
                    <span>x</span>
                </div>
                <div class="div2 flex-span">
                    <span>-1.0</span>
                    <span>+1.0</span>
                </div>
            </Col>
            <Col span="2">
                <div class="div3 flex-span">
                    <span>1.78</span>
                    <span>2.18</span>
                    <span>1.0</span>
                </div>
                <div class="div2 flex-span">
                    <span>1.34</span>
                    <span>1.45</span>
                </div>
            </Col>
            <Col span="3">
                <div class="div3">
                    <span>盘口: 已关闭</span>
                    <span>前端: 隐藏</span>
                </div>
                <div class="div2">
                    <span>盘口: 已关闭</span>
                    <span>前端: 隐藏</span>
                </div>
            </Col>
            <Col span="4">
                <div>
                    开赛前
                    <i-select>
                        <i-option value="1">1</i-option>
                        <i-option value="2">2</i-option>
                    </i-select>
                    <!-- <Select v-model="day" size="small" style="width:100px">
                        <Option v-for="item in dayList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select> -->
                    天自动创建
                </div>
                <Button type="primary">立即手动动创建</Button>
            </Col>
            <Col span="3">
                <Switch v-model="switch1" @on-change="change"></Switch>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
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
                ]
            };
        },
        methods: {
            change () {

            }
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


