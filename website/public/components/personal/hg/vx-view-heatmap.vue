<template>
   <div class="vx-view-heatmap">
      <div :id="Id" :radius="radius" class="heatmapbox"></div>
      <!-- <div style="width:220px; height: 60px; float: right; margin-top: 720px; margin-right: 140px; background-color: aliceblue; opacity: 0.7; border-radius: 5px;">
         <div id="heatmap_min" style="float: left;margin: 3px 0 0 5px;">0</div>
         <div id="heatmap_max" style="float: right;margin: 3px 5px 0 0;">0</div>
         <img style="height: 20px; margin: 10px; float: left;" id="gradient" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAKCAYAAABCHPt+AAAAnklEQVRYR+2WQQqDQBAES5wB/f8/Y05RcMWwSu6JIT0Dm4WlH1DUdHew7/z6WYFhhnGRpnlhAEaQpi/ADbh/np0MiBhGhW+2ymFU+DZfg1EhaoB4jCFuMYYcQKZrXwPEVvm5Og0pcYakBvI35G1jNIZ4jCHexxjSpz9ZFUjAynLbpOvqteaODkm9sloz5JF+ZTVmSAWSu9Qb65AvgDwBQoLgVDlWfAQAAAAASUVORK5CYII=">
      </div> -->
   </div>
</template>
<style lang="less">
.vx-view-heatmap {
   .heatmapbox {
      width: auto;
      height: 100%;
   }
}
</style>
<script>
Vue.component("vx-view-heatmap", {
   
   props: {
      "radius":{
         default:45
      }, ///热力点半径
      "data":{
         default:function(){return []}
      }, ///热力数据列表
      "gradient":{
         default:null
      } /// 色阶变化
   },
   data() {
      var id = "HT" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      return {
         Id: id,
         MaxValue: 0,
         Mounted: false
      };
   },
   mounted() {
      this.Mounted = true;
      this.updateHeatmap();
   },
   watch: {
      data: {
         handler() {
            this.updateHeatmap();
         },
         immediate: true,
         deep: true
      },
      radius() {
         this.updateHeatmap();
      },
      gradient() {
         this.updateHeatmap();
      }
   },
   methods: {
      /// 更新热力图显示
      updateHeatmap: function() {
         if (!this.Mounted) return;
         let valueList = this.data;
         let me = this;
         let container = document.querySelector("#" + this.Id);
         $("#" + this.Id).empty();
   		var gradientCfg = {
   			'0.02': 'white',
   			'0.1': "rgb(128, 128, 255)",
   			'0.2': 'cyan',
   			'0.5': 'yellow',
   			'0.9': 'red'
   		};
         let heatmap = h337.create({
            container: container,
            radius: this.radius,
            gradient: gradientCfg
         });

         let max = 0;
         let min = 0;
         valueList.forEach(function(item) {
            if (max < item.value) {
               max = item.value;
            }
            if (min > item.value) {
               min = item.value;
            }
         });

         // $("#heatmap_min").text(min);
         // if (this.MaxValue < max) {
         //    this.MaxValue = max;
         // }
         // $("#heatmap_max").text(this.MaxValue);

         heatmap.setData({ max: max, data: valueList });
      }
   }
});
</script>
