<template>
   <div class="vx-form-cascader">
      <slot></slot>
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
         default:""
      }, //下拉的value字段
      "labelfield":{
         default:""
      } //下拉的label字段
   },
   data() {
      console.log(LoaderDict)
      return {
         GroupField: this.groupfield,
         LoaderDict: LoaderDict
      };
   },
   computed: {
      Value: {
         get() {
            return this.value;
         },
         set: function(val) {
            var Id = "";
            for (var i = 0; i < val.length; i++) {
               Id += "" + val[i];
            }
            var str = "";
            for (var i = 0; i < val.length; i++) {
               for (var j = 0; j < this.options.length; j++) {
                  if (val[i] == this.options[j].Id) {
                     str += this.options[j].Name; //省
                     i++;
                     if (i <= val.length - 1) {
                        for (var n = 0; n < this.options[j].children.length; n++) {
                           if (val[i] == this.options[j].children[n].Id) {
                              str += "/" + this.options[j].children[n].Name;
                              i++;
                              if (i <= val.length - 1) {
                                 for (var k = 0; k < this.options[j].children[n].children.length; k++) {
                                    if (val[i] == this.options[j].children[n].children[k].Id) {
                                       str += "/" + this.options[j].children[n].children[k].Name;
                                    }
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            }
            this.$emit("update:label", str);
            this.$emit("input", val);
         }
      },
      Options: {
         get() {
            var list = [];
            if (this.options) {
               for (var i in this.options) {
                  var item = this.options[i];
                  item["value"] = this.valuefield ? item[this.valuefield] : item["value"];
                  item["label"] = this.labelfield ? item[this.labelfield] : item["label"];
                  if (item.children) {
                     for (var k in item.children) {
                        var itemchild = item.children[k];
                        itemchild["value"] = this.valuefield ? itemchild[this.valuefield] : itemchild["value"];
                        itemchild["label"] = this.labelfield ? itemchild[this.labelfield] : itemchild["label"];

                        if (itemchild.children) {
                           for (var h in itemchild.children) {
                              var itemchild2 = itemchild.children[h];
                              itemchild2["value"] = this.valuefield ? itemchild2[this.valuefield] : itemchild2["value"];
                              itemchild2["label"] = this.labelfield ? itemchild2[this.labelfield] : itemchild2["label"];
                           }
                        }
                     }
                  }
                  list.push(item);
               }
            }
            return list;
         }
      }
   }
});
</script>
