<template>
    <div class="handicap">
        <div class="handicap_type">
            <span>盘口类型</span>
            <RadioGroup v-model="handicapType">
                <Radio label="0">全部</Radio>
                <Radio label="1">大小盘</Radio>
                <Radio label="2">让分盘</Radio>
            </RadioGroup>
        </div>
        <div class="handicap_status">
            <span>盘口状态</span>
            <RadioGroup v-model="handicapStatus">
                <Radio label="0">全部</Radio>
                <Radio label="1">已创建</Radio>
                <Radio label="2">已发布</Radio>
                <Radio label="3">已结束</Radio>
                <Radio label="4">已暂停</Radio>
            </RadioGroup>
        </div>
        <Table border :columns="columns7" :data="data6"></Table>
        <div class="handicap_page">
            <Page :total="100"></Page>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                handicapType: '0',
                handicapStatus: '0',
                columns7: [
                    {
                        title: '创建时间',
                        key: 'time'
                    },
                    {
                        title: '盘口ID',
                        key: 'id'
                    },
                    {
                        title: '比赛',
                        key: 'match'
                    },
                    {
                        title: '盘口类型',
                        key: 'type'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 400,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small',
                                        shape: 'circle'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        marginLeft: '5px',
                                        width: '80px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.show(params.index)
                                        }
                                    }
                                }, '发布'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small',
                                        shape: 'circle',
                                        disabled: true
                                    },
                                    style: {
                                        marginRight: '5px',
                                        marginLeft: '5px',
                                        width: '80px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.remove(params.index)
                                        }
                                    }
                                }, '关闭'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small',
                                        shape: 'circle',
                                        disabled: true
                                    },
                                    style: {
                                        marginRight: '5px',
                                        marginLeft: '5px',
                                        width: '80px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.remove(params.index)
                                        }
                                    }
                                }, '暂停')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        time: '2017-08-19 10:23:11',
                        id: 1,
                        match: '北京 - 上海',
                        type: '0',
                        status: 0,
                        action: 0
                    },
                    {
                        time: '2017-08-19 10:23:11',
                        id: 1,
                        match: '北京 - 上海',
                        type: '0',
                        status: 0,
                        action: 0
                    },{
                        time: '2017-08-19 10:23:11',
                        id: 1,
                        match: '北京 - 上海',
                        type: '0',
                        status: 0,
                        action: 0
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .handicap{
        background: #fff;
        height: 100%;
        padding: 50px;
        > div{
            span{
                display: inline-block;
                margin-right: 30px;
            }
        }
        &_status{
            margin: 50px 0;
        }
        &_page{
            margin-top: 20px;
            width: 100%;
            padding-left: 30%;
        }
    }
</style>
