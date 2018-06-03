<template>
    <div class="handicap">
        <Tabs value="name1">
            <TabPane label="标签一" name="name1">
            </TabPane>
            <TabPane label="标签二" name="name2">
            </TabPane>
        </Tabs>
        <handicapclose></handicapclose>
        <handicapopen></handicapopen>
        <div class="handicap_page">
            <Page :total="100"></Page>
        </div>
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
                handicapStatus: '0'
            }
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
