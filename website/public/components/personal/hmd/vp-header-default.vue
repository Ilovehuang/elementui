<template>
   <div class="form-header">
      <el-row type="flex" class="head">
         <el-col :span="6" >
            <a><img src="images/common/intforce-logo.png" alt="Int-Force Logo" class="logo" ></a>
         </el-col>
         <el-col :span="12">
            <ul class="nav">
               <li v-for="item in navList" :key="item"><a :class="item.active?'active':''" :href="item.href">{{item.title}}</a></li>
            </ul>
         </el-col>
         <el-col :span="2" :offset="4" class="user">
            <!-- <span><img src="images/common/news.png"   ><b>1</b></span>
            <span><img src="images/common/user.png"  ></span> -->
         </el-col>
      </el-row>
   </div>
</template>
<script>
Vue.component("vp-header-default", {
   template: template,
   props: [],
   data() {
      var urlList=["/report/index.html","/report/report.html","/report/ranking.html"]
      var navList=[{title:"首页",href:"/report/index.html"},{title:"分析报表",href:"/report/report.html"},{title:"排行榜",href:"/report/ranking.html"}]
      for (let index = 0; index < urlList.length; index++) {
         const element = urlList[index];
         if(element==location.pathname){
            navList[index].active=true
         }
      }
      return {
         navList:navList
      };
   },
   computed: {
   },
   watch: {
   },
   methods: {
   },
   created() {},
   mounted() {},
});
</script>


<style lang="less">
@headerheight: 50px;
@searchHeight: 44px;
.form-header {

   .head{
      height: 82 px;
      img{
         max-width: 100%;
      }
      .logo{
         width:190px;
         margin-top: 32px;
         margin-left: 25px;
         display: block
      }
      .nav{
         li{
            width: 33.3%;
            display: inline-block;
            text-align: center;
            font-size: 16px;
            background: 476bc8;
            a{
               color: #000;
               display: inline-block;
               margin-top:34px;
               width: 96px;
               height: 32px;
               line-height: 32px;
               border-radius: 15px
            }
            a.active{
               color: #fff;
               border-color: rgb(62, 124, 226);
               background-color: rgb(71, 107, 200);
               border-style: solid;
               border-width: 1px;
               box-shadow: 0px 7px 12.09px 0.91px rgba(0, 90, 255, 0.35);
            }
            a.active:after{
               content:" ";
               display: block;
               background: #476bc8;
               width: 16px;
               height: 4px;
               border-radius: 4px;
               margin: 0 auto;
               margin-top:11px
            }
         }
      }
      .user{
         margin-top: 35px;
         span{
            margin-left: 25px;
            position: relative;
            display: inline-block;
            b{
               background: #ff0000;
               color: #fff;
               border-radius: 50%;
               height: 15px;
               width: 15px;
               line-height: 15px;
               font-size: 12px;
               display: inline-block;
               text-align: center;
               position: absolute;
               right: -8px;
               top: -2px;
            }
         }
      }
   }

}
</style>
