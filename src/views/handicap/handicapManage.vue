<template>
    <div class="handicap">
        <Tabs :value="status" @on-click="changeTab">
            <TabPane label="比赛未开始" name="open">
            </TabPane>
            <TabPane label="比赛已结束" name="close">
            </TabPane>
        </Tabs>
        <handicapclose v-if="status === 'close'"></handicapclose>
        <handicapopen v-if="status === 'open'"></handicapopen>
    </div>
</template>
<script>
    import handicapclose from './handicap-close';
    import handicapopen from './handicap-open';
    export default {
        components: {
            handicapclose,
            handicapopen
        },
        data () {
            return {
                handicapType: '0',
                handicapStatus: '0',
                status: 'open'
            }
        },
        methods: {
            changeTab (name) {
                this.status = name;
            }
        },
        mounted () {
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
    }
</style>
