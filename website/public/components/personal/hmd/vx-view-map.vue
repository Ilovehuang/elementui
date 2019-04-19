<template>
   <div :id="Id" class="vx-view-map" style="height:500px" >
   </div>
</template>
<style lang="less">
.vx-view-map {
}
</style>

<script>
Vue.component("vx-view-map", {
   template: template,
   props: {
      center:{
         default:function(){return {latitude:116.475451,longitude:39.9764}}
      },//中心点需要值{latitude,longitude}
      level:{
         default:8
      },//缩放等级
      clickable:{
         default:true
      },//是否能点击
      click:{
         default:function(){return {latitude:116.475451,longitude:39.9764}}
      },//返回点击的坐标
      icon:{
         default:"fox"
      },//icon，点击
      markers:{
         default:function(){return []}
      },//标点，有坐标就打点
      tooltip:{
         default:false
      },//是否显示标致，现在暂定，还未决定怎么设置内容
      scrollwheel:{
         default:false
      }//是否运行拖动缩放

   },
   data() {
      var id = "BDMap" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1))); //生成随机Id
      return {
         Id:id,
         MapChart: null,
         map:null,
         markerIcon:[{
            name:"markerRed",
            url:""
         },{
            name:"markerBlur",
            url:""
         },{
            name:"fox",
            url:"/images/common/avatar3.jpg"
         }]
      };
   },
   watch: {

   },
   mounted() {
      var lng=this.center.longitude||0;
      var lat=this.center.latitude||0;
      var me=this;
      //创建百度地图map实例
      this.map = new BMap.Map(this.Id);
      //中心点
      this.map.centerAndZoom(new BMap.Point(lng,lat), this.level);
      //允许缩放
      if(this.scrollwheel) this.map.enableScrollWheelZoom();
      //地图打点
      if(this.markers.length) this.addMarker(this.markers)
      //注册点击事件
      this.map.addEventListener("click",function(e){
   		me.addMarker(new BMap.Point(e.point.lng, e.point.lat))
      });

   },
   methods: {
      addMarker(point){
         if(!this.clickable) return
         if(point.length){
            for (let i = 0; i < point.length; i++) {
               const p = point[i];
               this.addMarkerIcon(p)
            }
         }else{
            this.addMarkerIcon(point);
         }
      },
      addMarkerIcon(icon){
         var myIcon=null;
         if(this.icon.indexOf('.')>-1){
            myIcon = new BMap.Icon("markers.png", new BMap.Size(25, 25), { imageSize:"25,25" });
         }else if(this.icon){
            for (let i = 0; i < this.markerIcon.length; i++) {
               const element = this.markerIcon[i];
               if(element.name==this.icon){
                  myIcon = new BMap.Icon(element.url, new BMap.Size(25, 25), { imageSize:"25,25" })
               }
            }
         }
         if(myIcon){
            var marker = new BMap.Marker(icon,{icon:myIcon})
         }else{
            var marker = new BMap.Marker(icon)
         }
         this.map.addOverlay(marker)
         marker.addEventListener("click", function(e){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            this.map.removeOverlay(this);
         });

      },
      deleteMarker(point){

      }
   }
});
</script>

