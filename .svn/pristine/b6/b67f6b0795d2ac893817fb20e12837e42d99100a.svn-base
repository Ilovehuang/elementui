<template>
   <div class="vx-form-cascader">
      <el-cascader :options="Options" v-model="Value">
      </el-cascader>
   </div>
</template>
<style lang="less">
.vx-form-cascader {
   .el-input__icon {
      line-height: 30px;
   }
   .el-input__inner {
      height: 30px;
      line-height: 30px;
   }
   .el-cascader {
    line-height: 30px;
   }
}
</style>
<script>
Vue.component("vx-form-cascader", {
   
   props: {
      "value":{
         default:function(){ return[] }
      }, //下拉的value
      "label":{
         default:""
      }, //下拉的label
      "options":{
         default:function(){ return [] }
      }, //下来数据数组
      "valuefield":{
         default:"Id"
      }, //下拉的value字段
      "labelfield":{
         default:"Name"
      } //下拉的label字段
   },
   data() {
      return {
      };
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set: function(val) {
            let values = {};
            var result = null;
            for(var i = 0; i < val.length; i++) {
               let list = i == 0 ? this.options : result;
               if(list) result = _.getFieldValue(list, this.valuefield, val[i], [this.labelfield, this.valuefield], values);
            }
            this.$emit("update:label", values[this.labelfield].join(" / "));
            this.$emit("input", val);
         }
      },
      Options: {
         get() {
            if (this.options) {
               for (var i in this.options) {
                  _.replaceField(this.options[i], [[this.valuefield ? this.valuefield : "value", "value"], [this.labelfield ? this.labelfield : "label", "label"]], "children");
               }
            }
            return this.options;
         }
      }
   }
});
</script>
