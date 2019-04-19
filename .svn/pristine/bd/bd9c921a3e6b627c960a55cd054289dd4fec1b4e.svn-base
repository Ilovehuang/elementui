<template>
   <div class="vx-view-echart">
      <div :id="Id" style="width:100%;height:100%;"></div>
   </div>
</template>
<style lang="less">
</style>
<script>
Vue.component("vx-view-echart", {
   
   props: {
      "options":{
         default:function(){ return [] }
      } // 显示chart数据
   },
   data() {
      return {
         Id: "chart" + moment().format("x") + parseInt(Math.random() * (100000000 + 1))
      };
   },
   created() {},
   mounted() {
      console.log(this.options);
      this.updataEchart();
   },
   watch: {
      options: {
         handler: function(val, oldVal) {
            this.options = val;
            this.updataEchart();
         },
         deep: true
      }
   },
   methods: {
      /// chart  数据显示
      updataEchart() {
         var me = this;
         var myChart = echarts.init(document.getElementById(me.Id));
         if (me.options) {
            myChart.setOption(me.options);
         }
      }
   }
});
</script>
