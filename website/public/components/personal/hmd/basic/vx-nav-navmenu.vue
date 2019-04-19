<template>
   <div class="vx-nav-navmenu">
      <slot></slot>
      <el-row class="tac">
         <el-col :span="24">
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened="true" :background-color="background" :text-color="color" active-text-color="#ffd04b">
               <el-submenu v-for="item in Data" :key="item.Id" :index="item.Id">
                  <template slot="title">
                     <i :class="item.PageIcon"></i>
                     <span disabled>{{item.Name}}</span>
                  </template>
                  <el-menu-item type="success" v-if="item.children" v-for="i in item.children" :key="i.Id" :index="i.Id">
                     <template slot="title">
                        <a :style="'color:' + fontcolor" class="block" :href="i.PageUrl">{{i.Name}}</a>
                     </template>
                  </el-menu-item>
               </el-submenu>
            </el-menu>
         </el-col>
      </el-row>
   </div>
</template>
<style lang="less">
.vx-nav-navmenu {
   .el-submenu .el-menu-item {
      padding: 0 0 0 45px;
   }
   .el-menu-item {
      height: 38px;
      line-height: 38px;
   }
   .el-submenu__title {
      height: 48px;
      line-height: 48px;
   }
   .block {
      display: block;
   }
}
</style>
<script>
Vue.component("vx-nav-navmenu", {
   template: template,
   props: {
      "data":{
         default:""
      }, //导航栏数据
      "color":{
         default:"#ffffff"
      }, //第一层导航字体颜色
      "background":{
         default:"#555D64"
      }, //导航栏背景颜色
      "fontcolor":{
         default:"red"
      } //第二层导航字体颜色
   },
   data() {
      var id = "xdp" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1))); //生成随机Id
      return {
         Id: id
      };
   },
   computed: {
      Data: {
         get() {
            return this.data;
         }
      }
   },
   methods: {
      handleOpen(key, keyPath) {
         console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
         console.log(key, keyPath);
      }
   },
   watch: {
      data() {
         console.log(this.data);
      }
   }
});
</script>
