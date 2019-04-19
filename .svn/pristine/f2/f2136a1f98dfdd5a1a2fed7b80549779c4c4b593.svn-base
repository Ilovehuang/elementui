<template>
   <div class="vx-item-location">
      <label >{{LoaderDict.Business.Longitude}}:</label>
      <el-input :placeholder="LoaderDict.Business.Longitude" :label="LoaderDict.Business.Longitude" v-model="Longitude" size="small"></el-input>
      &nbsp;
      <label >{{LoaderDict.Business.Latitude}}:</label>
      <el-input :placeholder="LoaderDict.Business.Latitude" v-model="Latitude" size="small"></el-input>
      <el-button type="primary" @click="open" size="small">{{LoaderDict.Common.Search}}</el-button>
   </div>
</template>
<script>
Vue.component("vx-form-location", {
   props: {
      "longitude":{
         defalut:0
      },//经度
      "latitude":{
         defalut:0
      },//维度
      "address":{
         default:""
      },//模糊查询地址
      "width":{
         default:500
      },//地图宽度
      "height":{
         default:500
      },//地图高度
      "clickhide":{
         default:true
      }//是否点击消失
      
   },
   data() {
      // var LoaderDict = {
      //    Common: {
      //       Map: "地图",
      //       Longitude:"经度",
      //       Latitude:"维度",
      //       Search:"查询",
      //       Prompt:"提示"
      //    }
      // }
      var id="map"+new Date().getTime()
      return {
         FormData: {},
         Rules: {},
         id:id,
         dialogVisible: false,
         LoaderDict:LoaderDict
      };
   },
   mounted() {
   },
   computed: {
      Longitude:{
         get(){
            return this.longitude
         },
         set(val){
            this.$emit("update:longitude", val);
         }
      },
      Latitude:{
         get(){
            return this.latitude
         },
         set(val){
            this.$emit("update:latitude", val);
         }
      }
   },
   methods: {
      //打开地图
      open() {
         this.$Bus.$emit('Map.Visible');
         this.$Bus.$emit("getUpdateLatitude",this.Latitude)
         this.$Bus.$emit("getUpdateLongitude",this.Longitude)
         this.$Bus.$on("UpdateLatitude", (val)=>{
            this.Latitude=val
         });
         this.$Bus.$on("UpdateLongitude", (val)=>{
            this.Longitude=val
         });
         // var me = this;
         // this.dialogVisible = true;
         // setTimeout(() => {
         //    var map = new BMap.Map(this.id); // 创建Map实例
         //    if(!me.longitude && !me.latitude && me.address){
         //       // 将地址解析结果显示在地图上,并调整地图视野
         //       var myGeo = new BMap.Geocoder();
         //    	myGeo.getPoint(me.address, function(point){
         //    		if (point) {
         //             // me.$emit("update:longitude", point.lng);
         //             // me.$emit("update:latitude", point.lat);
         //    			map.centerAndZoom(point, 16);
         //    			// map.addOverlay(new BMap.Marker(point));
         //    		}else{
         //    			alert("您输入的地址没有解析到结果!");
         //    		}
         //    	});
         //    }else{
         //       map.centerAndZoom(new BMap.Point(me.longitude, me.latitude), 11); // 初始化地图,设置中心点坐标和地图级别
         //       var marker = new BMap.Marker(new BMap.Point(me.longitude, me.latitude));
         //       map.addOverlay(marker);
         //    }
         //    //添加地图类型控件
         //    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
         //    var top_left_navigation = new BMap.NavigationControl();
         //    map.addControl(top_left_control)
         //    map.addControl(top_left_navigation)

         //    map.enableScrollWheelZoom(true);
         //    //点击打标
         //    map.addEventListener("click", function(e) {
         //       map.clearOverlays();
         //       var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));
         //       map.addOverlay(marker);
         //       me.$emit("update:longitude", e.point.lng);
         //       me.$emit("update:latitude", e.point.lat);
         //       if(me.clickhide){
         //          setTimeout(() => {
         //             me.dialogVisible = false;
         //          }, 500);
         //       }
         //    });
         // }, 0);
      }
   }
});
</script>
<style lang="less">
.vx-item-location {
   .allmap {

      overflow: hidden;
      margin: 0;
      font-family: '微软雅黑';
   }
   .el-input{
      width: auto;
      max-width: 120px;
   }
}
</style>
