<template>
   <div class="vx-form-location">
      <label >{{LoaderDict.Common.Longitude}}:</label>
      <vx-form-input :placeholder="LoaderDict.Common.Longitude" :label="LoaderDict.Common.Longitude" v-model="longitude" size="small"></vx-form-input>
      &nbsp;
      <label >{{LoaderDict.Common.Latitude}}:</label>
      <vx-form-input :placeholder="LoaderDict.Common.Latitude" v-model="latitude" size="small"></vx-form-input>
      <el-button type="primary" @click="open" size="small">{{LoaderDict.Common.Search}}</el-button>
      <vx-view-dialog :title="LoaderDict.Common.Prompt" :visible.sync="dialogVisible" :width="Width">
         <div id="allmap" :style="'width:'+width+';height:'+height"></div>
      </vx-view-dialog>
   </div>
</template>

<script>
Vue.component("vx-form-location", {
   template: template,
   props: {
      "longitude":{
         default:0
      },//经度
      "latitude":{
         default:0
      },//维度
      "address":{
         default:""
      },//模糊查询地址
      "width":{
         default:"500px"
      },//地图宽度
      "height":{
         default:"500px"
      },//地图高度
      // "clickhide"//是否点击消失
   },
   data() {
      var LoaderDict = {
         Common: {
            Map: "地图",
            Longitude:"经度",
            Latitude:"维度",
            Search:"查询",
            Prompt:"提示"
         }
      }
      return {
         dialogVisible: false,
         LoaderDict:LoaderDict
      };
   },
   mounted() {
   },
   computed: {
      Width:{
         get(){
            return Number(this.width)+50
         }
      }
   },
   methods: {
      //打开地图
      open() {
         var me = this;
         this.dialogVisible = true;
         setTimeout(() => {
            var map = new BMap.Map("allmap"); // 创建Map实例
            if(!me.longitude && !me.latitude && me.address){
               // 将地址解析结果显示在地图上,并调整地图视野
               var myGeo = new BMap.Geocoder();
            	myGeo.getPoint(me.address, function(point){
            		if (point) {
                     // me.$emit("update:longitude", point.lng);
                     // me.$emit("update:latitude", point.lat);
            			map.centerAndZoom(point, 16);
            			// map.addOverlay(new BMap.Marker(point));
            		}else{
            			alert("您输入的地址没有解析到结果!");
            		}
            	});
            }else{
               map.centerAndZoom(new BMap.Point(me.longitude, me.latitude), 11); // 初始化地图,设置中心点坐标和地图级别
               var marker = new BMap.Marker(new BMap.Point(me.longitude, me.latitude));
               map.addOverlay(marker);
            }
            //添加地图类型控件
            var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
            var top_left_navigation = new BMap.NavigationControl();
            map.addControl(top_left_control)
            map.addControl(top_left_navigation)

            map.enableScrollWheelZoom(true);
            //点击打标
            map.addEventListener("click", function(e) {
               map.clearOverlays();
               var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));
               map.addOverlay(marker);
               me.$emit("update:longitude", e.point.lng);
               me.$emit("update:latitude", e.point.lat);
               console.log(me)
               if(me.clickhide){
                  setTimeout(() => {
                     me.dialogVisible = false;
                  }, 500);
               }
            });
         }, 0);
      }
   }
});
</script>
<style lang="less">
.vx-form-location {
   #allmap {

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
