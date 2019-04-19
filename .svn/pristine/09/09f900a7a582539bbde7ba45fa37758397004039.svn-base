<template>
   <div>
      <vd-bd-loaddata v-if="OperateLoad" :autoload="Autoload" :url="Url" :method="QueryMethod" :query="query" :trigger.sync="LoadTrigger" :result.sync="Result"></vd-bd-loaddata>
      <vd-bd-savedata v-if="OperateSave" :url="Url" :method="saveMethod" :data="data" :query="query" :trigger.sync="SaveTrigger" :result.sync="SaveResult"></vd-bd-savedata>
   </div>
</template>
<script>
Vue.component("vd-company-physicalunlinkeddevice", {
   data(){
      return {
         saveMethod:"",
         url:"/PhysicalZoneService.html"
      }
   },
   created() {
      var me = this;
      this.$Bus.$on("Grid.SaveUnLinkedPhysicalZone", function(data) {
         if (data.Checked.length > 0) {
            me.$set(me.query, "Checked", data.Checked);
            me.$set(me.query, "Id", data.Id);
            me.$set(me.query, "DeviceZones", data.DeviceZones);
            console.log("save")
            console.log("data.Idunlinked")
            console.log(data.Id)
            me.saveMethod = "save";
            me.LoadTrigger = true;
         }
      });
   },
   mixins:["defaultBusinessData"]
});
</script>
