/**
 * Created by Desire on 2017/5/11.
 */
// local 就是为了存储数据到本地中
export  const  setStorage=function (data) {
  localStorage.setItem('lists',JSON.stringify(data))
};
export  const getStorage=function () {
  return  JSON.parse(localStorage.getItem('lists'))
}
