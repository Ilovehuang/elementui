<template>
   <div>
      <vd-bd-loaddata v-if="OperateLoad" :autoload="Autoload" :url="Url" :method="QueryMethod" :query="query" :trigger.sync="LoadTrigger" :result.sync="Result"></vd-bd-loaddata>
      <vd-bd-savedata v-if="OperateSave" :url="Url" :method="SaveMethod" :data="data" :query="query" :trigger.sync="SaveTrigger" :result.sync="SaveResult"></vd-bd-savedata>
   </div>
</template>
<script>
$VueFactory.businessData({
   template: template,
   name: "vb-bd-physicalunlinkeddevice",
   Url: "/PhysicalZoneService.html",
   created() {
      var me = this;

      PubSub.subscribe("Grid.SaveUnLinkedPhysicalZone", function(msg, data) {
         if (data.Checked.length > 0) {
            me.$set(me.query, "Checked", data.Checked);
            me.$set(me.query, "Id", data.Id);
            me.$set(me.query, "DeviceZones", data.DeviceZones);
            me.SaveMethod = "save";
            me.LoadTrigger = true;
         }
      });
   }
});
</script>
