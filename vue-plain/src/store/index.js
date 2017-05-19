/**
 * Created by Desire on 2017/5/11.
 */
import  Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import  {getStorage} from './local';
const state=getStorage()||{//如果本地存贮有数据就显示数据，如果没有就默认
  totalTime:0,//计划的总时间
  lists:[]//每个计划的数据
};
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
export const store=new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
