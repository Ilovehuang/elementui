<template>
   <div class="vx-nav-dropmenu">
      <el-dropdown :trigger="trigger" @click="handleCommand">
         <el-button type="primary" :size="size" :style="{background:background}">
            {{ content }}
            <i class="el-icon-arrow-down el-icon--right"></i>
         </el-button>
         <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in Data" :key="item" :command="item">{{ item }}</el-dropdown-item>
         </el-dropdown-menu>
      </el-dropdown>
   </div>
</template>
<style lang="less">
.vx-nav-dropmenu {
   .el-dropdown {
      vertical-align: top;
   }
   .el-dropdown + .el-dropdown {
      margin-left: 15px;
   }
   .el-icon-arrow-down {
      font-size: 12px;
   }
}
</style>
<script>
Vue.component("vx-nav-dropmenu", {
   template: template,
   props:{
      "data":{
         default:function(){return []}
      }, //下拉数据
      "content":{
         default:"下拉菜单"
      }, //下拉框按钮内容
      "size":{
         default:""
      }, //下拉框尺寸
      "background":{
         default:"#409EFF"
      }, //下拉框背景颜色
      "trigger":{
         default:"hover"
      }, //触发方式
      "command":{
         default:""
      }
   },
   data() {
      var id = "xdp" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      return {
         Id: id
      };
   },
   watch: {
      trigger() {
         console.log(this.trigger);
      }
   },
   // computed: {
   // },
   methods: {
      handleCommand(command) {
         this.command = command;
         this.$emit("update:command", this.command);
         console.log(this.command);
      }
   }
});
</script>
