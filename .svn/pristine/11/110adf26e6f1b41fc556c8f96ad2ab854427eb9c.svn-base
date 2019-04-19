<template>
   <div :id="Id" class="vx-view-baidumap">
   </div>
</template>
<style lang="less">
.vx-view-baidumap {
   width: 1000px;
   height: 800px;
}
</style>

<script>
Vue.component("vx-view-baidumap", {
   
   props: {
      "city":{
         defult:""
      }, //中心点
      "level":{
         defult:""
      } //缩放级别
   },
   data() {
      var id = "BDMap" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1))); //生成随机Id
      return {
         Id: id,
         MapChart: null
      };
   },
   watch: {
      city() {
         if(this.city) this.loadData();
      }
   },
   mounted() {
      this.MapChart = echarts.init(document.getElementById(this.Id));
      setTimeout(() => {
         this.loadData();
      }, 500);
   },
   methods: {
      showMap(option) {
          this.MapChart.setOption(option);
          //获取echart中使用的bmap实例
          var map = this.MapChart.getModel().getComponent('bmap').getBMap();
          map.disableDoubleClickZoom();
          map.centerAndZoom(this.city, 12);
      },
      loadData() {
         $.ajaxPost("/BaidumapService.html?op=mapgrid", { Query: { City: this.city} }, (res) => {
            if(res.status == 1000) {
               let data = JSON.parse(res.data, function(k,v) {
                 if(v && v.indexOf && v.indexOf('=>') > -1){
                    return eval("(function(){return " + v +" })()")
                 }
                 return v;
               });
               console.log(data.series[0].data.length);
               this.showMap(data);
            }
         });
      }
   }
});
</script>

