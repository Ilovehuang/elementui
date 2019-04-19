<template>
   <!-- <div class="vm-check-location" :style="{'width':sty.width}"> -->
   <div class="vm-check-location" >
      <slot> </slot>
      <h3 >
         <!-- <h3 :style="{'background-color':sty.bg}"> -->
         {{title}}
         <i class="fa fa-chevron-down" v-if="ishow&&ishow.toString()=='true' ?true:false"></i>
      </h3>
      <!-- <ul :style="{'min-height':sty.minheight, 'max-height':sty.maxheight, 'border': sty.border}"> -->
      <ul >
         <!-- <li v-if="show&&show.toString()=='true' ?true:false" :style="{'text-align':sty.algin}" class="search"> -->
         <li v-if="show&&show.toString()=='true' ?true:false"  class="search">
            <input type="text" autocomplete="off" placeholder="请输入关键字搜索" class="el-input__inner">
         </li>
         <!-- <li v-for="item in checkboxList " :key="item[KeyField] " :label="item[KeyField]" :style="{'text-align':sty.algin}"> -->
         <li v-for="item in checkboxList " :key="item[KeyField] " :label="item[KeyField]">
            <el-checkbox-group v-model="checkedValue" :id="id ">
               <el-checkbox :key="item[valuefield] " :label="item[valuefield] ">{{item[labelfield]}}</el-checkbox>
            </el-checkbox-group>
         </li>
      </ul>
   </div>
</template>
<style  lang="less">
.vm-check-location {
   text-align: center;
   h3 {
      height: 30px;
      line-height: 30px;
      background-color: #ece9e9;
      i {
         font-size: 12px;
         color: #b3b2b2;
      }
   }
   ul {
      padding: 0 10px;
      border: 1px solid #ccc;
      min-height: 90px;
      max-height: 120px;
      overflow: auto;
      li {
         height: 30px;
         line-height: 30px;
      }
      .search {
         height: auto;
         margin: 10px 0;
      }
   }
}
</style>
<script>
Vue.component("vm-check-location", {
   
   props: [
      "title", /// 模块标题
      "options", /// 数据
      "value", /// 选中数据的值
      "valuefield", //选择框的value字段
      "labelfield", //选择框的label字段
      "sty", /// 样式
      "show", ///是否需要搜索框
      "ishow"
   ],
   created() {
      let me = this;
      this.$Bus.$on("Grid.delMallId", function( data) {
         me.checkedValue = [];
      });
      this.$Bus.$on("Grid.delMallIds", function( data) {
         me.checkedValue = [];
      });
   },
   data() {
      let id = "check" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      return {
         id: id,
         checkedValue: []
      };
   },
   watch: {
      checkedValue() {
         this.$emit("update:value", this.checkedValue);
      }
   },
   computed: {
      checkboxList: {
         get() {
            var list = [];
            if (this.options) {
               for (var i in this.options) {
                  var item = this.options[i];
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
