<template>
    <div class="noun">
        <div class="title">
            <span class="date">12331</span>
            <span class="categories">1 X 2</span>
            <span class="categories categories-last">让分</span>
        </div>
        <div class="match flex-row">
            <div class="match-time flex-col">
                <span>
                    123213
                </span>
                <!-- <span>
                    <Icon type="ios-stopwatch-outline"></Icon>
                </span> -->
            </div>
            <div class="match-rank flex-col">
                <span>
                    123213
                </span>
                <span>
                    123123
                </span>
                <span>
                    123213
                </span>
                <!-- <span class="icon">
                     <Icon type="stats-bars"></Icon>
                </span> -->
            </div>
            <div class="match-detail flex-col">
                <span @click="mainFullTimeResultOddshandel($event, mainFullTimeResultOddsHome || '')">
                    123213
                </span>
                <span @click="mainFullTimeResultOddshandel($event, mainFullTimeResultOddsAway || '')">
                    123123
                </span>
                <span @click="mainFullTimeResultOddshandel($event, mainFullTimeResultOddsTie || '')">
                    213123
                </span>
            </div>
            <div class="match-detail match-detail-last flex-col">
                <span @click="asianLinesAsianHandicapOddsHander($event, asianLinesAsianHandicapOddsHome, 0)">
                    <i style="color: #fff">123213</i>
                    123231
                </span>
                <span @click="asianLinesAsianHandicapOddsHander($event, asianLinesAsianHandicapOddsAway, 1)">
                    <i style="color: #fff">213213</i>
                    123123
                </span>
                <span>
                    
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    import dayjs from 'dayjs';
    export default {
        methods: {
            mainFullTimeResultOddshandel (e, oddObj) {
                if (!oddObj) {
                    return;
                }
                let currentTag = e.currentTarget;
                currentTag.classList.toggle('selected');
                // gameid、handicapList的index、mainFullTimeResult.id、
                let id = [this.game.id, 0, this.mainFullTimeResult.id, oddObj.opp].join('_');
                let betDate = this.kickOffTimeObj.format('YYYY-MM-DD');
                let betTime =  this.kickOffTime;
                let homeList = this.game.homeList;
                let awayList = this.game.awayList;
                let obj = {
                    id,
                    betDate,
                    betTime,
                    homeList,
                    awayList,
                    oddObj,
                    value: 0
                };
                console.log(obj);
                this.$store.commit('addBetArray', obj);
            },
            asianLinesAsianHandicapOddsHander (e, oddObj, index) {
                if (!oddObj) {
                    return;
                }
                let currentTag = e.currentTarget;
                currentTag.classList.toggle('selected');
                // gameid、handicapList的index、asianLinesAsianHandicap.id、index是盘口的index
                let id = [this.game.id, 1, this.asianLinesAsianHandicap.id, index].join('_');
                let betDate = this.kickOffTimeObj.format('YYYY-MM-DD');
                let betTime =  this.kickOffTime;
                let homeList = this.game.homeList;
                let awayList = this.game.awayList;
                let obj = {
                    id,
                    betDate,
                    betTime,
                    homeList,
                    awayList,
                    oddObj,
                    value: 0,
                    type: 1, // 0代表1x2  1代表让分
                    index 
                };
                console.log(obj);
                this.$store.commit('addBetArray', obj);
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '@/views/style/global.scss';
    .selected {
        background: #ccc;
    }

    .title{
        background-color: #a7a7a7;
        display: flex;
        flex-direction: row;
        height: 20px;
        .date{
            flex: 5;
            padding-left: 10px;
        }
        .categories{
            flex: 2;
            text-align: center;
            &-last{
                flex: 3;
            }
        }
    }
    .match{
        span{
            height: 40px;
            line-height: 40px;
            color: #ddd;
        }
        &-time{
            flex: 1;
            padding-left: 10px;
            background-color: rgba(98,98,98,1);
            i{
                font-size: 18px;
            }
        }
        &-rank{
            flex: 4;
            background-color: rgba(98,98,98,1);
            position: relative;
            .icon{
                position: absolute;
                top: 40%;
                right: 20px;
                font-size: 20px;
            }
            span:hover{
                color: #ffdf1b;
                cursor: pointer;
            }
        }
        &-detail{
            flex: 2;
            background-color: rgba(89,89,89,1);
            span{
                text-align: center;
                color: #ffdf1b;
                position: relative;
            }
            span:not(:last-child){
                &:after{
                    @include borderBottom();
                }
            }
            &-last{
                flex: 3;
                span{
                    &:after{
                        @include borderLeft();
                    }
                }
            }
        }
    }
</style>


