<template>
   <div class="vx-form-select">
      <el-select v-bind="$attrs" v-model="Value"  >
         <el-option v-for="item in Options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
   </div>
</template>
<style lang="less" scoped>
.vx-form-select {
   .el-input__icon {
      line-height: 30px;
   }
   .el-input__inner {
      height: 30px;
      line-height: 30px;
   }
   select {
      height: 30px;
   }
   .el-popper[x-placement^='bottom'] .popper__arrow {
      top: 0px;
      left: 50%;
      margin-right: 3px;
      border-top-width: 0;
      border-bottom-color: #ebeef5;
   }
}
.el-popper[x-placement^='bottom'] .popper__arrow {
   top: -6px;
   left: 50%;
   margin-right: 3px;
   border-top-width: 0;
   border-bottom-color: #ebeef5;
}
</style>

<script>
Vue.component("vx-form-select", {
   template: template,
   props: {
      "value":{
         default:""
      }, //下拉的value
      "label":{
         default:""
      }, //下拉的label
      "options":{
         default:function(){ return [] }
      }, //下来数据数组
      "valuefield":{
         default:"value"
      }, //下拉的value字段
      "labelfield":{
         default:"label"
      }, //下拉的label字段
   },
   data() {
      return {
         LoaderDict: LoaderDict,
         TypeList: {
         }
      };
   },
   created(){
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            var result = {};
            for (var i = 0; i < this.options.length; i++) {
               if (this.options[i].value == val) {
                  result = this.options[i];
                  break;
               }
            }
            this.$emit("update:label", result.label);
            this.$emit("input", val);
         }
      },
      Options: {
         get() {
            var list=[]
            for (var index = 0; index < this.options.length; index++) {
               var element = this.options[index];
               list.push({
                  value:element[this.valuefield],
                  label:element[this.labelfield]
               })
            }
            return list;
         }
      }
   },
   methods: {
   }
});
</script>
