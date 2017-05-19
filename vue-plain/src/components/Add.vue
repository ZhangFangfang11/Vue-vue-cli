<template>
  <div>
    <form action="">
      <div class="form-group">
        <div class="row">
          <div class="col-md-6">
            <label for="date" class="control-label">日期</label>
            <input type="date" class="form-control" id="date" v-model="date" placeholder="日期">
          </div>
          <div class="col-md-6">
            <label for="time" class="control-label">时间</label>
            <input type="number" class="form-control" id="time" v-model.number="time" placeholder="计划的时间">
          </div>
        </div>
      </div>
      <div class="form-group">
        <textarea name="" placeholder="请输入提示内容" id="" cols="30" rows="2" class="form-control" v-model="comment"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-success" @click="add">添加</button>
        <button class="btn btn-default" @click="reset">取消</button>
      </div>
    </form>
  </div>
</template>
<script>
  import {mapActions} from 'vuex';

  import * as types from '@/store/types';
  export default {
    data(){
      return {date:'',time:'',comment:''}
    },
    components: {},
    methods: {
      ...mapActions([types.ADD_PLAN,types.INCREMENT_TOTALTIME]),
      add(){
          this[types.ADD_PLAN]({
            date:this.date,
            time:this.time,
            comment:this.comment
          });
        this[types.INCREMENT_TOTALTIME](this.time);
        this.date='';
        this.time='';
        this.comment=""
      },
      reset(){

       this.$router.go(-1)//回到上一级
    }


    }
  }
</script>
<style scoped>

</style>
