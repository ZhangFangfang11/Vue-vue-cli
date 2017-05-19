/**
 * Created by Desire on 2017/5/11.
 */
// 计算list有没有数据
export  const getters={
  isShow(state){
  return Boolean( state.lists.length)
  }
}
