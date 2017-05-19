<template>
    <div class="poa">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3>计划总时间</h3>
        </div>
        <div class="panel-body">
          总时间:{{time |number}}
        </div>

      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex';
    export default {
        filters:{
            number(t){
                //根据t的值来转化他的显示形式
              return t.toFixed(2)+'小时'//保留两位小数
            }
        },
        data(){
            return {}
        },
        computed:{
          ...mapState({time:'totalTime'})
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>
.poa{
  position: absolute;

}
</style>
