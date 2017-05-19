<template>
    <div>
      <form >
        <div class="form-group">
          <label for="bookName" class="control-label">书名</label>
          <input type="text" class="form-control" id="bookName" placeholder="请输入书名" autocomplete="off" v-model="book.bookName">
        </div>
        <div class="form-group">
          <label for="bookCover" class="control-label">书封面</label>
          <input type="text" class="form-control" id="bookCover" placeholder="输入书封面的地址" autocomplete="off" v-model="book.bookCover">
        </div>
        <div class="form-group">
          <label for="bookPrice" class="control-label">价格</label>
          <input type="text" class="form-control" id="bookPrice" autocomplete="off"  placeholder="输入书的价格" v-model="book.bookPrice">
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="button" @click="add">添加</button>
        </div>
      </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                book:{
                  bookName:'',
                  bookCover:'',
                  bookPrice:''
                }
            }
        },
        components: {},
        methods: {
            add(){
                this.$http.post('/book', this.book).then(()=>{
                    this.$router.push('/list')//添加后跳转到列表页
                })

            }
        }
    }
</script>
<style scoped>

</style>
