<template>
   <div class="vx-form-radio">
      <el-radio-group v-bind="$attrs" :id="Id"  v-model="checkedValue"  >
         <el-radio v-for="item in radioList" :label="item.value" :key="item.value">{{item.label}}</el-radio>
      </el-radio-group>
   </div>
</template>
<style lang="less">
.vx-form-radio {
   font-size: 13px;
   height: 30;
   line-height: 28px;
   padding-top: 6px;
}
</style>
<script>
Vue.component("vx-form-radio", {
   template: template,
   props: {
      "type":{
         default:""
      }, /// 常用单选 EnabledStatus
      "value":{
         default:""
      }, /// 单选框的value
      "list":{
         default:function(){ return [] }
      }, //单选框列表
      "valuefield":{
         default:""
      }, //下拉的value字段
      "labelfield":{
         default:""
      } //下拉的label字段
   },
   created() {
      this.newvalue = this.radioList[0].label;
      console.log(this.newvalue);
      // console.log(this.FirstText)
   },
   data() {
      var id = "radio" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      var newvalue = {};
      return {
         LoaderDict: LoaderDict,
         Id: id,
         TypeList: {
            EnabledStatus: [
               {
                  label: LoaderDict.Status.Enabled,
                  value: 1
               },
               {
                  label: LoaderDict.Status.Disabled,
                  value: -1
               }
            ],
            Reverse: [
               {
                  label: LoaderDict.Business.T_Device.Forward,
                  value: 1
               },
               {
                  label: LoaderDict.Business.T_Device.Backward,
                  value: -1
               }
            ],
            Visible: [
               {
                  label: LoaderDict.Status.Display,
                  value: 1
               },
               {
                  label: LoaderDict.Status.Hide,
                  value: -1
               }
            ],
            RoleLevel: [
               {
                  label: LoaderDict.Status.Yes,
                  value: 1
               },
               {
                  label: LoaderDict.Status.No,
                  value: -1
               }
            ]
         }
      };
   },
   computed: {
      checkedValue: {
         get() {
            return this.value;
         },
         set(val) {
            this.$emit("input", val);
         }
      },
      radioList: {
         get() {
            var list = [];
            console.log("radioList",this.type)
            if (this.type && this.TypeList[this.type]) {
               list = this.TypeList[this.type] ? this.TypeList[this.type] : [];
            } else if (this.list) {
               for (var i in this.list) {
                  var item = this.list[i];
                  item["value"] = this.valuefield ? item[this.valuefield] : item["value"];
                  item["label"] = this.labelfield ? item[this.labelfield] : item["label"];
                  list.push(item);
               }
            }
            return list;
         }
      }
   }
});
</script>
