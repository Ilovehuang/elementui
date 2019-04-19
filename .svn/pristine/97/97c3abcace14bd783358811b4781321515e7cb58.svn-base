<template>
   <div>
      <span style="margin-right:10px">{{LoaderDict.Business.PageSize}}</span>
      <el-radio-group v-bind="$attrs" :size="size" v-model="Value">
         <template v-for="item in list" >
             <el-radio-button :label="item" :key="item"></el-radio-button>
         </template>
      </el-radio-group>
   </div>
</template>
<script>
Vue.component("vx-view-pagesize", {
   template: template,
   //value：选择值,list:数据列表,size:大小
   props: {
      list:{
         default:["1","2","3"]
      },
      value:{
         default:"1"
      },
      size:{
         default:"mini"
      }
   },
   data() {
      return {
         LoaderDict:LoaderDict,
         data:"11"
      };
   },
   mounted () {
      this.load();
      console.log(111);
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val){
            this.$emit("input",val);
         }
      }
   },
   methods:{
      load(){
         console.log(this.size)
      }
   }
});
</script>
<style lang="less">

</style>
