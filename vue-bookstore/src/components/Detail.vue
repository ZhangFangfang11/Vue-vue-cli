<template>
  <div>
    <div class="col-md-4">
      <div class="panel panel-danger">
        <div class="panel-heading">

          书名： <span v-show="!flag">{{book.bookName}}</span>
          <input type="text" v-model="book.bookName" v-show="flag">
          <router-link to="/list" class="btn btn-info btn-xs pull-right">返回</router-link>
        </div>
        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>
        <div class="panel-footer ">

          价格 <span v-show="!flag">{{book.bookPrice | Currency('￥')}}</span>
          <input type="text" v-model="book.bookPrice" v-show="flag">
      <button class="btn btn-danger pull-right btn-xs" @click="remove" v-show="!flag">删除</button>
      <button class="btn btn-warning pull-right btn-xs" v-show="!flag" @click="changeFlag">修改</button>
      <button class="btn btn-primary pull-right btn-xs" v-show="flag" @click="update">提交</button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    filters:{
      Currency(input,param1){
        return param1+input
      }
    },
    created(){
      //页面一加载 需要获取数据  获取id对应的数据
      this.id=this.$route.params.id;
      this.$http.get('/book?id='+this.id).then(res=>{
          this.book=res.body;
      })
    },
    data(){
      return {
        book:{
          bookName:'',
          bookCover:'',
          bookPrice:''
        },
        id:'',
        flag:false,//默认不显示输入框
      }
    },
    components: {},
    methods: {
        remove(){
            this.$http.delete('/book?id='+this.id).then(()=>{
                this.$router.push('/list')
            })
        },
      changeFlag(){
            this.flag=!this.flag
      }
      ,
      update(){
          //修改 通过
        //服务端调用res.end 就会触发then中的成功的回调
        this.$http.put('/book?id='+this.id,this.book).then(()=>{
            this.flag=false//vueresouce 将then 中的this处理掉了，默认指向的是当前组件
        })
      }
    }
  }
</script>
<style scoped>
  img{
    width:150px;
    height:200px;
  }
</style>
