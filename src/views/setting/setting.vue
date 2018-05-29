<template>
    <div class="setting">
        <label for="">设置时区： </label>
        <Select v-model="timeZone" style="width:200px">
            <Option v-for="item in timeZoneList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Button type="primary" @click="handerTimeZone">确定</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                timeZone: 0,
                timeZoneList: [
                    {
                        label: '标准时区',
                        value: 0
                    },
                    {
                        label: '时区1',
                        value: 1
                    },
                    {
                        label: '时区2',
                        value: 2
                    }
                ]
            }
        },
        methods: {
            handerTimeZone () {
                alert('时区设置完成');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .setting{
        height: 100%;
        background-color: #fff;
        padding: 50px;
    }
</style>


