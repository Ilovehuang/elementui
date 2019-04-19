<template>
   <div>
      <vd-bd-loaddata v-if="OperateLoad" :autoload="Autoload" :url="Url" :method="QueryMethod" :query="query" :trigger.sync="LoadTrigger" :result.sync="Result"></vd-bd-loaddata>
      <vd-bd-savedata v-if="OperateSave" :url="Url" :method="SaveMethod" :data="data" :query="query" :trigger.sync="SaveTrigger" :result.sync="SaveResult"></vd-bd-savedata>
   </div>
</template>
<script>
$VueFactory.businessData({
   template: template,
   props:["autoload"],
   created(){
      var me = this;
      // PubSub.subscribe("Grid.LinkedPhysicalZone", function (msg, data) {
      //    console.log(data)
      //    console.log(me.autoload)
      //    me.autoload = true
      // });
      // PubSub.subscribe("Grid.UnLinkedPhysicalZone", function (msg, data) {
      //    console.log(data)
      // });
   },
   computed:{
      Autoload:{
         get(){
            return this.autoload !== undefined? this.autoload:true;
         }
      }
   },
   name: "vd-bd-device",
   Url: "/DeviceService.html"
});
</script>
