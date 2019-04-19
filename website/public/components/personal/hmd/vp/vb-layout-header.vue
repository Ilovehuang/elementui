<template>
   <div>
      <div class="unify-header">
         <el-row type="flex" class="header-row-bg">
            <el-col :span="3" class="logo">
               <a><img src="images/common/logo.png" alt="Int-Force Logo" class="img-responsive"></a>
            </el-col>
            <el-col :span="11" class="font">
               <el-row type="flex">
                  <el-col :span="3" v-for="menu in MainMenu" :key="menu.Id" class="navbar">
                     <p class="navhover">
                        <a :href="menu.PageUrl" :target="menu.Target" :title="menu.Name">
                           <i class="menuicon" :class="menu.ImageUrl"></i>
                           <span>{{menu.Name}}</span>
                        </a>
                     </p>
                  </el-col>
               </el-row>
            </el-col>
            <el-col :span="10" class="choosePerson">
               <el-dropdown trigger="click" class="fr mr" @command="handleCommand">
                  <span class="el-dropdown-link">
                     <img src="/images/common/avatar3.jpg"> {{UserName}}
                     <i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                     <el-dropdown-item command="a">
                        <i class="fa fa-key" style="margin-right:5px;"></i></el-dropdown-item>
                     <el-dropdown-item command="b">
                        <i class="fa fa-globe" style="margin-right:5px;"></i></el-dropdown-item>
                     <el-dropdown-item command="c">
                        <i class="fa fa-power-off" style="margin-right:5px;"></i></el-dropdown-item>
                  </el-dropdown-menu>
               </el-dropdown>
            </el-col>
         </el-row>
      </div>
   </div>
</template>

<script>
Vue.component("vb-layout-header", {
   template: template,
   props: ["eventname"],
   data() {
      return {
         logotitle: '',
         mallevent: null,
         MainMenu: [],
         PageUrl: null,
         Level2Path: null,
         Level3Path: null,
         ActivePage: null,
         visible: false,
         LoaderDict: LoaderDict,
         Create: false,
         UserName: "系统管理员",
      };
   },
   computed: {
      // Menu: {
      //    get() {
      //       return store.state.Menu;
      //    },
      // },
   },
   watch: {
      mallevent() {
      },
      visible() {

      },
   },
   methods: {
      findMenu(level, menuList) {},
      handleCommand(command) {},
   },
   created() {
   },
   mounted() {},
});
</script>

<style lang="less">
@headerheight: 50px;
.unify-header {
   z-index: 11;
   top: 0px;
   position: fixed;
   width: 100%;
   height: @headerheight;
   @media screen and (max-width: 1366px) {
      .logo.el-col.el-col-3 {
         width: 16.5%;
      }
   }
   .mallDrop {
      position: absolute;
      top: @headerheight;
      left: 0;
      width: 100%;
      display: none;
      height: 825px;
      background-color: #f5f6f6;
   }
   .header-row-bg {
      background: #2780c4;
      height: @headerheight;
      min-height: @headerheight;

      .font {
         color: #fff;
         font-size: 14px;
         font-weight: 800;
         margin-left: 15px;
      }

      .logo {
         // padding: 15px;
         font-family: Heiti SC;
         color: #fff;
         font-size: 25px;
         text-align: center;
         line-height: 50px;
         font-weight: 700;
         user-select: none;
      }

      .menuicon {
         padding: 5px;
      }
      .navhover {
         text-align: center;
      }

      .navhover:hover {
         background: #388fd2;
      }
      .navbar {
         line-height: @headerheight; // margin-left:-35px;
         width: auto;
      }
      .navbar a {
         padding: 10px 15px;
         color: #fff;
      }
      .choosePerson {
         text-align: center;
         .mr {
            margin-right: 15px;
         }
         img {
            position: relative; // top: 8px;
            width: 29px;
            height: 29px;
            border-radius: 99px;
            vertical-align:middle
         }
      }
      .el-dropdown-link {
         color: #fff;
         line-height: 50px;
         padding: 15px 0px;
         cursor: pointer;
      }
   }
   .img-responsive {
      display: block;
      max-width: 100%;
      height: auto;
   }
   .logo img {
      position: absolute;
      max-width: 60%;
      top: 16px;
      left: 32px;
      vertical-align: middle;
   }
}
</style>
