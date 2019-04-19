<template>
   <vd-bd-loaddata :url="url" :query="query" :method="method" :trigger.sync="trigger" :result.sync="result" :isloading.sync="isloading" ></vd-bd-loaddata>
</template>
<script>
Vue.component("vd-bd-grid", {
   template: template,
   props: [
      "query",
      "result",
      "trigger",
      "url"
   ],
   data(){
      return{
         method:"grid",
         data:{},
         isloading:null,
         define:{
            url:"/TagService.html",
            query:{

            },
            trigger:true,
            result:{}
         }
      }
   },
   mounted() {
      console.log(this)
      this.loadDefind()
   },
   watch: {
      result(){
         this.$emit("update:result", this.result);

      },
      trigger(){
         this.$emit("update:trigger", this.trigger);
      }
   },
   methods: {
      loadDefind(){
         setTimeout(() => {
            for (item in this.define) {
               if (!this[item] && this[item] != 0 && this[item] != false) {
               console.log(item)
                  this[item] = this.define[item];
               }
            }
            console.log(this)
         }, 0);
      }
   }
});
</script>
