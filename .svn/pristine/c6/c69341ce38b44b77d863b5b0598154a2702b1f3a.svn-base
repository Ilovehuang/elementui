<template>
   <el-checkbox-group v-bind="$attrs"  v-model="checkedValue" class="vx-form-check"   >
      <el-checkbox v-for="item in checkboxList" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
   </el-checkbox-group>
</template>
<style lang="less">
.vx-form-check {
   > label {
      margin-right: 15px;
      margin-bottom: 10px;
      margin-left: 0px !important;
   }
}
</style>
<script>
Vue.component("vx-form-check", {
   template: template,
   props: {
      "type":{
         default:""
      }, /// 常用多选
      "value":{
         default:""
      }, /// 复选框的value
      "list":{
         default:""
      }, /// 复选框列表
      "valuefield":{
         default:""
      }, //下拉的value字段
      "labelfield":{
         default:""
      }, //下拉的label字段,
      // "mode":{
      //    default:"object"
      // }, //返回数据类型 object/string
      // "stringlist":{
      //    default:"[]"
      // }
   },
   data() {
      return {
         LoaderDict: LoaderDict,
         TypeList:{
            "WeekData":[{
                  label: LoaderDict.Business.T_BusinessTime.Monday,
                  value: 1
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Tuesday,
                  value:2
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Wednesday,
                  value:3
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Thursday,
                  value:4
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Friday,
                  value:5
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Saturday,
                  value:6
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Sunday,
                  value: 7
               }]
         }
      };
   },
   methods:{

   },
   created(){
      console.log(this.type)
      if (this.type) {
         this.checkboxList = this.TypeList[this.type] ? this.TypeList[this.type] : [];
      }
   },
   watch:{
   },
   computed: {
      checkedValue: {
         get(val) {
            var selected = this.value;
            if (!selected) selected = [];
            // return selected;
            return selected;
         },
         set(val) {
            var me = this;
            var selected= ""
            // if (this.mode == "object") {
            //    selected = val.join(",")
            // } else {
               selected = val;
            // }
            this.$emit("input", val);
            this.$emit("update:label", this.label);
         }
      },
      checkboxList: {
         get() {
            var list = [];
            if(this.list) {
               for(var i in this.list) {
                  var item = this.list[i];
                  item["value"] = this.valuefield ? item[this.valuefield] : item["value"];
                  item["label"] = this.labelfield ? item[this.labelfield] : item["label"];
                  list.push(item);
               }
            }
            return list;
         },
         set(val){
            this.$emit("update:list", val);
         }
      }
   }
});
</script>
