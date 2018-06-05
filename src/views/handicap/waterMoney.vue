<template>
    <div class="table">
        <Tabs value="name1">
            <TabPane label="已结算" name="name1">
            </TabPane>
            <TabPane label="未结算" name="name2">
            </TabPane>
        </Tabs>
        <Row type="flex" justify="center" class="table-title">
            <Col span="4">比赛开始时间</Col>
            <Col span="4">比赛</Col>
            <Col span="3">盘口ID</Col>
            <Col span="3">盘口类型</Col>
            <Col span="2">押注人数</Col>
            <Col span="2">押注金额</Col>
            <Col span="3">结算金额</Col>
            <Col span="3">抽水金额</Col>
        </Row>
        <Row type="flex" justify="center" class="table-row">
            <Col span="4">
                <span>2018/5/10</span>
                <span>0:0:10</span>
            </Col>
            <Col span="4">
                <span>德国 - 哥斯达黎加</span>
                <span>未开始</span>
            </Col>
            <Col span="3">
                <div class="div3">
                    12312312
                </div>
                <div class="div2">
                    123123123
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
            <Col span="2">
                <div class="div3">
                    胜负平
                </div>
                <div class="div2">
                    让分盘
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
            <Col span="3">
                <div class="div3">
                    胜负平
                </div>
                <div class="div2">
                    让分盘
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
        </Row>
        <Row type="flex" justify="center" class="table-row">
            <Col span="4">
                <span>2018/5/10</span>
                <span>0:0:10</span>
            </Col>
            <Col span="4">
                <span>德国 - 哥斯达黎加</span>
                <span>未开始</span>
            </Col>
            <Col span="3">
                <div class="div3">
                    12312312
                </div>
                <div class="div2">
                    123123123
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
            <Col span="2">
                <div class="div3">
                    胜负平
                </div>
                <div class="div2">
                    让分盘
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
            <Col span="3">
                <div class="div3">
                    胜负平
                </div>
                <div class="div2">
                    让分盘
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
        </Row>
        <Row type="flex" justify="center" class="table-row">
            <Col span="4">
                <span>2018/5/10</span>
                <span>0:0:10</span>
            </Col>
            <Col span="4">
                <span>德国 - 哥斯达黎加</span>
                <span>未开始</span>
            </Col>
            <Col span="3">
                <div class="div3">
                    12312312
                </div>
                <div class="div2">
                    123123123
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
            <Col span="2">
                <div class="div3">
                    胜负平
                </div>
                <div class="div2">
                    让分盘
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
            <Col span="3">
                <div class="div3">
                    胜负平
                </div>
                <div class="div2">
                    让分盘
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
        </Row>
        <Row type="flex" justify="center" class="table-row">
            <Col span="4">
                <span>2018/5/10</span>
                <span>0:0:10</span>
            </Col>
            <Col span="4">
                <span>德国 - 哥斯达黎加</span>
                <span>未开始</span>
            </Col>
            <Col span="3">
                <div class="div3">
                    12312312
                </div>
                <div class="div2">
                    123123123
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
            <Col span="2">
                <div class="div3">
                    胜负平
                </div>
                <div class="div2">
                    让分盘
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
            <Col span="3">
                <div class="div3">
                    胜负平
                </div>
                <div class="div2">
                    让分盘
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
        </Row>
    </div>
</template>
<script>
    export default {
        
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
            height: 80px;
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
                    flex: 1;
                }
                .div2{
                    flex: 1;
                }
            }
        }
    }
</style>


