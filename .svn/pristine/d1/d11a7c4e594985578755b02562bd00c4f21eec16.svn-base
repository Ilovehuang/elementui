<template>
   <div class="vx-form-transfer" style="margin: 0 auto;width: 92%;">
      <slot></slot>
      <!-- ['未选择', '已选择']  ['移除', '选择'] -->
      <el-transfer v-model="selected" filterable :titles="[LoaderDict.Status.NotChoose, LoaderDict.Status.HasChoosen]" :data="Options">
      </el-transfer>
   </div>
</template>
<style lang="less">
.vx-form-transfer.transfer {
   width: 100%;
   margin: 0 auto;
}
.vx-form-transfer {
   .el-transfer {
      .el-transfer-panel {
         width: 44%;
      }
   }
   .el-checkbox-group.el-transfer-panel__list.is-filterable {
      padding-bottom: 36px !important;
   }
   .el-transfer-panel .el-transfer-panel__header .el-checkbox {
      display: block;
      line-height: 40px;
      padding-top: 10px;
   }
}
</style>

<script>

Vue.component("vx-form-transfer", {
   
   props: {
      "value":{
         default:""
      }, //选中的key值数组
      "values":{
         default:function(){ return [] }
      }, ///object时返回对象数组，string时返回key值数组
      "options":{
         default:function(){ return [] }
      }, // options数据
      "mode":{
         default:"object"
      }, //返回数据类型 object/string
      "labelfield":{
         default:"Name"
      }, /// Label的字段
      "valuefield":{
         default:"Id"
      } /// Value的字段
   },
   data() {
      return {
         LoaderDict: LoaderDict
      };
   },
   computed: {
      selected: {
         get() {
            var selected = this.value;
            if (!selected) selected = [];
            return selected;
         },
         set(val) {
            var me = this;
            var selected = [];
            if (this.mode == "object") {
               val.forEach(function(key) {
                  me.options.forEach(function(option) {
                     if (key == option[me.KeyField]) {
                        selected.push(option);
                     }
                  });
               });
            } else {
               selected = val;
            }
            this.$emit("input", val);
            this.$emit("update:values", selected);
         }
      },
      Options: {
         get() {
            if(this.options) {
               for (var i in this.options) {
                  _.replaceField(this.options[i], [[this.valuefield ? this.valuefield : "value", "key"], [this.labelfield ? this.labelfield : "label", "label"]]);
               }
            }
            return this.options;
         }
      }
   },
   methods: {
   }
});
</script>
