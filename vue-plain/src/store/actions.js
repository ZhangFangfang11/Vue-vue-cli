/**
 * Created by Desire on 2017/5/11.
 */
import * as types from'./types.js';

export const actions={
  //list 代表要添加的内容
  [types.ADD_PLAN]({commit},list){
    let plan={
      avatar:'http://f11.baidu.com/it/u=2754208607,630952272&fm=72',
      name:'girl',
      ...list
    };
    commit(types.ADD_PLAN,plan);

  },
  [types.INCREMENT_TOTALTIME]({commit},n){
    commit(types.INCREMENT_TOTALTIME,n);
  },
  //移除
  [types.REMOVE_PLAN]({commit},list){
    commit(types.REMOVE_PLAN,list);
  },
  //减少总时间
  [types.DECREMENT_TOTALTIME]({commit},n){
    commit(types.DECREMENT_TOTALTIME,n)
  }
}
