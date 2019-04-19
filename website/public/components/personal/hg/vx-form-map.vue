<template>
   <vx-view-dialog :form="FormData" :rules="Rules" :title="'地图'" width="700" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <div class="allmap" :id="id" :style="'width:'+width+';height:'+height+';margin:0 auto;'"></div>
   </vx-view-dialog>
</template>
<script>
Vue.component("vx-form-map", {
   props: {
      "address":{
         default:""
      },//模糊查询地址
      "width":{
         default:500
      },//地图宽度
      "height":{
         default:400
      },//地图高度
      "clickhide":{
         default:true
      },//是否点击消失
      "subscribe":{
         default:"Map"
      }
   },
   data(){
      var id="map"+new Date().getTime()
      return {
         id:id,
         dialogVisible: false,
         LoaderDict:LoaderDict,
         FormData: {},
         Rules: {},
         longitude:0,
         latitude:0
      }
   },
   computed: {
      Longitude:{
         get(){
            return this.longitude
         },
         set(val){
            this.$Bus.$emit("UpdateLongitude", val);
         }
      },
      Latitude:{
         get(){
            return this.latitude
         },
         set(val){
            this.$Bus.$emit("UpdateLatitude", val);
         }
      },
      Width:{
         get(){
            return Number(this.width)+50
         }
      }
   },
   mounted(){
      
      this.$Bus.$on("getUpdateLatitude", (val)=>{
         this.latitude=val
         this.open()
         console.log('getUpdateLatitude',val)
      });
      this.$Bus.$on("getUpdateLongitude", (val)=>{
         this.longitude=val
         this.open()
      });
      
   },
   methods: {
      //打开地图
      open() {
         var me = this;
         this.dialogVisible = true;
         setTimeout(() => {
            var map = new BMap.Map(this.id); // 创建Map实例
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
               me.$Bus.$emit("UpdateLongitude", e.point.lng);
               me.$Bus.$emit("UpdateLatitude", e.point.lat);
               if(me.clickhide){
                  setTimeout(() => {
                     me.dialogVisible = false;
                  }, 500);
               }
            });
         }, 0);
      }
   },
   mixins:["defaultBusinessForm"]
});
</script>
