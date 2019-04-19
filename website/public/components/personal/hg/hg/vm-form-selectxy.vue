<template>
   <vx-view-dialog :form="FormData" :title="LoaderDict.Pages.Business.TagManager" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <img :src="src" v-if="src" style="width:100%" @click="imgXy($event)"/>
      X : <vx-form-input style="display:inline-block" v-model="LocationX" :disabled="true"></vx-form-input>
      Y : <vx-form-input style="display:inline-block" v-model="LocationY" :disabled="true"></vx-form-input>
   </vx-view-dialog>
</template>
<script>
Vue.component("vm-form-selectxy", {
   data() {
      return {
         src:"",
         LocationX:"",
         LocationY:"",
         FormData:{

         }
      };
   },
   mounted(){
      this.$Bus.$on("SelectXY.Src",(val)=>{
         // this.$emit("update:src",val)
         this.src=val
      })
   },
   methods:{
      imgXy(event){
         var offsetX = event.offsetX;
         var offsetY = event.offsetY;
         var width = event.path[0].width;
         var height = event.path[0].height;
         var x = (Math.floor(offsetX/width*10000)/100)+"%"
         var y = (Math.floor(offsetY/height*10000)/100)+"%"
         this.LocationX=x
         this.LocationY=y
         this.$Bus.$emit("SelectXY.callback",{
            x:x,
            y:y
         })
      }
   },
   mixins: ["defaultBusinessForm"]
});
</script>
