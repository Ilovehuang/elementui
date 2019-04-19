<template>
   <div class="vx-form-select">
      <slot></slot>
      <el-select v-model="Value">
         <el-option-group :type="type" v-for="group in Options" :key="group.label" :label="group.label">
            <el-option v-for="item in group.options" :key="item.value?item.value:item.Id" :label="item.label?item.label:item.Name" :value="item.value?item.value:item.Id" :resultinfo="item.DeviceZones"></el-option>
         </el-option-group>
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
      type:{

      },
      value: {
         default: ""
      }, //下拉的value
      label: {
         default: ""
      }, //下拉的label
      options: {
         // default: function() {
         //    return [];
         // }
      }, //下来数据数组
      valuefield: {
         default: "value"
      }, //下拉的value字段
      labelfield: {
         default: "label"
      }, //下拉的label字段
      resultinfo: {} //整个数据
   },
   data() {
      return {
         // label:"",
         GroupField: this.groupfield,
         LoaderDict: LoaderDict,
      };
   },
   computed: {
      KeyField: {
         get() {
            return this.keyfield ? this.keyfield : "Id";
         }
      },
      LabelField: {
         get() {
            return this.labelfield ? this.labelfield : "Name";
         }
      },
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
            console.log(result);
            this.$emit("update:resultinfo", result);
            this.$emit("update:label", result.label);
            this.$emit("input", val);
         }
      },
      Options: {
         get() {
            if (this.type) {
               this.newOptions = this.TypeList[this.type] ? this.TypeList[this.type] : [];
            } else if (this.options) {
               this.updateOptions();
            }
            return this.newOptions ? this.newOptions : [];
         }
      }
   },
   methods: {
      updateOptions() {
         var me = this;
         var camerazone = [];
         this.newOptions = [];
         if (this.options) {
            this.options.forEach(function(item) {
               if (this.groupfield) {
                  item.value = item[me.KeyField];
                  item.label = item.Name + "(" + item[me.LabelField] + ")";
               } else {
                  item.value = item[me.KeyField];
                  item.label = item[me.LabelField];
               }
               var typeIndex = 0;
               switch (item[me.GroupField]) {
                  case "主出入口": //"楼层"
                     typeIndex = 1;
                     break;
                  case "通道": //"通道"
                     typeIndex = 2;
                     break;
                  case "楼层": //"商铺"
                     typeIndex = 3;
                     break;
                  case "区域": //"区域":
                     typeIndex = 4;
                     break;
                  case "商铺": //"展区":
                     typeIndex = 5;
                     break;
                  case "展区": //"试衣间":
                     typeIndex = 6;
                     break;
                  case "试衣间": //"试衣间":
                     typeIndex = 7;
                     break;
               }
               camerazone.push({
                  index: typeIndex,
                  TypeName: item[me.GroupField]
               });
            });
            var compare = function(obj1, obj2) {
               var val1 = obj1.index;
               var val2 = obj2.index;
               if (val1 < val2) {
                  return -1;
               } else if (val1 > val2) {
                  return 1;
               } else {
                  return 0;
               }
            };
            camerazone.sort(compare);
            var quchong = [];

            for (var j = 0; j < camerazone.length; j++) {
               if (quchong.indexOf(camerazone[j].TypeName) == -1) {
                  quchong.push(camerazone[j].TypeName);
               }
            }
            for (var k = 0; k < quchong.length; k++) {
               let tmp = {};
               tmp.label = quchong[k];
               tmp.options = [];
               for (let i = 0; i < this.options.length; i++) {
                  if (quchong[k] == this.options[i][this.GroupField]) {
                     tmp.options.push(this.options[i]);
                  }
               }
               me.newOptions.push(tmp);
            }
         }
      }
   }
});
</script>
