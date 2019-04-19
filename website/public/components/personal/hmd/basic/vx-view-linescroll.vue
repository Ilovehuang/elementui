<template>
   <div class="vx-view-linescroll">
      <div class="list">
         <transition name="bounce"  >
            <!-- <template v-for="valueItem in value" > -->
            <div class="item" v-if="valueItem==index" v-for="(item,index)  in list" :key="item">{{item}}{{valueItem}}</div>
            <!-- </template> -->
         </transition>
      </div>
   </div>
</template>
<style lang="less">
.vx-view-linescroll{
   .list{position: relative;}
   .item{position: absolute;}
   .bounce-enter-active {
     animation: bounce-in .5s;
   }
   .bounce-leave-active {
     animation: bounce-out .5s;
   }
   height: 30px;

}
@keyframes bounce-out {
     0% {
       transform: translateY(0);
       opacity: 1
     }
     100% {
       transform: translateY(-20px);
       opacity: 0
     }
   }
   @keyframes bounce-in {
     0% {
       transform: translateY(20px);
       opacity: 0
     }
     100% {
       transform: translateY(0px);
       opacity: 1
     }
   }

</style>

<script>
Vue.component("vx-view-linescroll", {
   template: template,
   //value：选择值,list:数据列表
   props: {
      "list":{
         default:function(){ return [] }
      }
   },
   data() {
      return {
      };
   },
   mounted() {
   },
   computed: {
   },
   methods: {
   }
});
</script>
