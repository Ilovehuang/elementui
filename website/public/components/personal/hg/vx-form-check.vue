<template>
<div>
   <el-checkbox-group v-bind="$attrs"  v-model="checkedValue" class="vx-form-check"   >
      <el-checkbox v-for="item in checkboxList" :label="item.value" :key="item.value">{{item.label}}</el-checkbox>
   </el-checkbox-group>
</div>
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
      "mode":{
         default:"object"
      }, //返回数据类型 object/string
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
                  value: "1"
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Tuesday,
                  value:"2"
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Wednesday,
                  value:"3"
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Thursday,
                  value:"4"
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Friday,
                  value:"5"
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Saturday,
                  value:"6"
               },
               {
                  label: LoaderDict.Business.T_BusinessTime.Sunday,
                  value: "0"
               }]
         }
      };
   },
   methods:{

   },
   created(){
      console.log(this.type)
      if (this.type) {
         this.checkboxList = this.TypeList[this.type] ? this.TypeList[this.type] : this.list;
      }
   },
   watch:{
   },
   computed: {
      checkedValue: {
         get(val) {
            var selected = this.value;
            if (!selected) selected = [];
            if(typeof selected=="string"){
               selected = selected.split(',')
            }
            return selected;
         },
         set(val) {
            var me = this;
            var selected= ""
            var list=[]
            for (let i = 0; i < this.checkboxList.length; i++) {
               const element = this.checkboxList[i];
               var isTrue = val.indexOf(element[this.valuefield]);
               if(isTrue>-1)
                  list.push(element)
            }
            if (this.mode == "string") {
               selected = val.join(",")
            } else {
               selected = list;
            }
            this.$emit("input", selected);
            // this.$emit("update:label", this.label);
         }
      },
      checkboxList: {
         get() {
            if(this.list) {
               for (var i in this.list) {
                  _.replaceField(this.list[i], [[this.valuefield ? this.valuefield : "value", "value"], [this.labelfield ? this.labelfield : "label", "label"]]);
               }
            }
            if (this.type) {
               // this.checkboxList =
               return this.TypeList[this.type] ? this.TypeList[this.type] : this.list;
            }
            return this.list;
         },
         set(val){
            this.$emit("update:list", val);
         }
      }
   }
});
</script>
