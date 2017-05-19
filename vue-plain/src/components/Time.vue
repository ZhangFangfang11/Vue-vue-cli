<template>
  <div>
    <router-link to="/time/time-add" class="btn btn-info">创建</router-link>
    <hr>
    <Add></Add>
    <ul class="list-group">
      <li class="list-group-item" v-for="list in lists">
          <div class="row">
            <div class="col-md-1">
              <img :src="list.avatar" alt="" class="img-circle img-responsive">
              {{list.name}}
            </div>
            <div class="col-md-3">
              <div>
                <i class="glyphicon glyphicon-time"></i>{{list.time }}小时
              </div>
              <div>
                <i class="glyphicon glyphicon-calendar"></i>{{list.date}}
              </div>
            </div>

            <div class="col-md-6">
              <div>
                {{list.comment}}
              </div>
            </div>
            <div class="col-md-2">
             <button class="btn btn-danger" @click="remove(list)">删除</button>
            </div>
          </div>
      </li>
    </ul>
    <div class="text-warning h3" v-show="!isShow">请来添加你的计划吧</div>
  </div>
</template>
<script>
  import Add from './Add.vue';
  import {mapState,mapActions,mapGetters} from 'vuex';
  import * as types from '@/store/types';

  export default {
    data(){
      return {

      }
    },
    computed:{
      ...mapState(['lists']),
      ...mapGetters(['isShow'])
    },
    components: {
      Add
    },
    methods: {
      ...mapActions([types.REMOVE_PLAN,types.DECREMENT_TOTALTIME]),
      remove(list){
          //list 表示当前删除的那一项
        this[types.REMOVE_PLAN](list);
        this[types.DECREMENT_TOTALTIME](list.time)
      }
    }
  }
</script>
<style scoped>

</style>
