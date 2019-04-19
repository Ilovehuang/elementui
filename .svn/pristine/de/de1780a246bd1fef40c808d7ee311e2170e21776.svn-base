<template>
   <div>
      <vd-bd-loaddata v-if="OperateLoad" :autoload="Autoload" :url="Url" :method="QueryMethod" :query="query" :trigger.sync="LoadTrigger" :result.sync="Result"></vd-bd-loaddata>
      <vd-bd-savedata v-if="OperateSave" :url="Url" :method="SaveMethod" :data="data" :query="query" :trigger.sync="SaveTrigger" :result.sync="SaveResult"></vd-bd-savedata>
   </div>
</template>
<script>
Vue.component("vd-company-physicalzone", {
   data(){
      return {
         url:"/PhysicalZoneService.html"
      }
   },
   created(){
   },
   mixins:["defaultBusinessData"]
});
</script>
