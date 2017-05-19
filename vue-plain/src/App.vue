<template>
  <div>
   <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-3">
            <Slidebar />
          </div>
          <div class="col-md-9">
            <transition enter-active-class="animated rotateIn" leave-active-class="animated rotateOut" mode="out-in">
              <router-view class="position"></router-view>
            </transition>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import Slidebar from '@/components/Slidebar.vue'
export default {
 components:{
   Navbar,
   Slidebar
 }
}
</script>

<style>
.position{
  position: absolute;
  width:90%;
}
</style>
