<template>
   <div>
      <vd-bd-loaddata v-if="OperateLoad" :autoload="Autoload" :url="Url" :method="QueryMethod" :query="query" :trigger.sync="LoadTrigger" :result.sync="Result"></vd-bd-loaddata>
      <vd-bd-savedata v-if="OperateSave" :url="Url" :method="queryMethod" :data="data" :query="query" :trigger.sync="SaveTrigger" :result.sync="SaveResult"></vd-bd-savedata>
   </div>
</template>
<script>
Vue.component("vd-company-physicallinkeddevice", {
   data(){
      return {
         queryMethod:"",
         url:"/PhysicalZoneService.html"
      }
   },
   created() {
      var me = this;
      this.$Bus.$on("Grid.SaveLinkedPhysicalZone", function(data) {
         console.log("SaveLinkedPhysicalZone+++");
         me.$set(me.query, "Checked", data.Checked);
         me.$set(me.query, "Id", data.Id);
         console.log("save")
         console.log("data.Idlinked")
         console.log(data.Id)
         me.queryMethod = "save";
         me.LoadTrigger = true;
      });
   },
   mixins:["defaultBusinessData"]
});
</script>
