/**
 * Created by Desire on 2017/5/11.
 */
import * as types from'./types.js';
import  {setStorage} from './local';
export const mutations={
  [types.ADD_PLAN](state,plan){//state 代表当前容器中的状态
    console.log(plan);
   if(plan.time<0){
      return false;
    }
    state.lists.push(plan);
   setStorage(state);//将state容器里面的数据都存储到本地数据中
  },
  [types.INCREMENT_TOTALTIME](state,n){
    if(n<0){
      return state.totalTime
    }
    state.totalTime+=n;
    setStorage(state);
  },
  //移除方法
  [types.REMOVE_PLAN](state,list){
    state.lists= state.lists.filter(function (item) {
     return item!=list;
      setStorage(state);
   })
  },
  //减少总时间
  [types.DECREMENT_TOTALTIME](state,n){
    state.totalTime -=n;
    setStorage(state);
  }
}
