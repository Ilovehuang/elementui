(function(window) {
   function Widget() {}
   Widget.Methods = {
      ShowEchart: function(id, option) {
         let myChart = echarts.init(document.getElementById(id));
         myChart.setOption(option);
      },
      ShowHeatmap: function(id, data) {
         console.log(id);
         console.log(data);
         let valueList = data.PositionList;
         let container = document.querySelector("#" + id);
         let canvaswidth = $("#" + id).width();
         let canvasheight = $("#" + id).height();
         let canvaswidthratio = Math.floor((canvaswidth / 2921) * 1000) / 1000;
         let canvasheightratio = Math.floor((canvasheight / 1558) * 1000) / 1000;

         $("#" + id)
            .empty()
            .css({
               "background-image": "url(" + data.MapUrl + ")",
               // zoom: "0.25",
               "background-repeat": "no-repeat",
               "background-size": "100%"
            });
            
         let heatmap = h337.create({
            container: container,
            radius: this.radius,
            gradient: this.gradient
         });

         let max = 0;
         let min = 0;
         let results = [];
         if (valueList && valueList.length > 0) {
            valueList.forEach(function(item) {
               item.x = Math.floor(item.x * canvaswidthratio);
               item.y = Math.floor(item.y * canvasheightratio);
               if (max < item.value) {
                  max = item.value;
               }
               if (min > item.value) {
                  min = item.value;
               }
               results.push(item);
            });
         }

         // $("#heatmap_min").text(min);
         // if (this.MaxValue < max) {
         //    this.MaxValue = max;
         // }
         // $("#heatmap_max").text(this.MaxValue);

         console.log(results);
         heatmap.setData({ max: max, data: results });
      },
      ShowRankingPage: function(id, data) {
         console.log(data);
         this.$Bus.$emit("Widget.PageLoadRanking", data);
      }
   };
   window.Widget = window.Widget || Widget;
})(window);
