<template>
   <div class="form-nav">
      <ul>
         <li v-for="item in navList" :key="item.key">
            <a :href="item.href+'?key='+item.key">
               <p class="img"><img :src="item.src" ></p>
               <p>{{item.title}}</p>
            </a>
         </li>
         <!-- <li><a href=""><p class="img"><img src="images/common/customer.png" alt=""></p><p>客流分布</p></a></li>
         <li><a href=""><p class="img"><img src="images/common/bigScreen.png" alt=""></p><p>实时大屏</p></a></li>
         <li><a href=""><p class="img"><img src="images/common/hot.png" alt=""></p><p>热力图</p></a></li>
         <li><a href=""><p class="img"><img src="images/common/portrait.png" alt=""></p><p>用户画像</p></a></li> -->

         <!-- <li><p class="img"><img src="images/common/store.png" alt=""></p><p>门店</p></li>
         <li><p class="img"><img src="images/common/weekly.png" alt=""></p><p>周报</p></li>
         <li><p class="img"><img src="images/common/monthly.png" alt=""></p><p>月报</p></li>
         <li><p class="img"><img src="images/common/activityReport.png" alt=""></p><p>活动报表</p></li>
         <li><p class="img"><img src="images/common/hot.png" alt=""></p><p>热力图</p></li>
         <li><p class="img"><img src="images/common/all.png" alt=""></p><p>全部</p></li> -->
      </ul>
   </div>
</template>
<script>
Vue.component("vp-nav-homeicon", {
   template: template,
   props: [],
   data() {
      var navList=[{
         href:"/report/report.html",
         src:"images/common/customertime.png",
         title:"客流分时",
         key:"timeSharing"
      },{
         href:"/report/report.html",
         src:"images/common/customer.png",
         title:"客流分布",
         key:"distribution"
      },{
         href:"/largescreen/LargeScreen.html",
         src:"images/common/bigScreen.png",
         title:"实时大屏",
         key:"exhibition"
      },{
         href:"/report/report.html",
         src:"images/common/hot.png",
         title:"热力图",
         key:"heat"
      },{
         href:"/report/report.html",
         src:"images/common/portrait.png",
         title:"用户画像",
         key:"portrait"
      }]
      return {
         navList:navList
      };
   },
   computed: {
      Menu: {
         get() {
            return store.state.Menu;
         },
      },
   },
   watch: {
   },
   methods: {
   },
   created() {
   },
   mounted() {},
});
</script>


<style lang="less">
@headerheight: 50px;
.form-nav {
   overflow: auto;
   background: #fff;
   font-size: 16px;
   li{
      a{
         color:#000;
      }
      float: left;
      width: 20%;
      height: 160px ;
      text-align: center;
      .img{
         margin:0 auto;
         border-radius: 50%;
         background: #fff;
         box-shadow: 0px 5px 15.52px 0.48px rgba(64, 139, 214, 0.4);
         width: 62px;
         height: 62px;
         line-height: 62px;
         position: relative;
         margin-top: 35px;
         margin-bottom: 5px;
         img{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
         }
      }
      p.active::after{
         content: '';
         display: inline-block;
         background: red;
         width: 15px;
         height: 15px;
         border-radius: 50%;
         position: absolute;
         right: -6px;
         top:6px;
      }
   }

   // li:nth-child(1) p:first-child{background:#de3a3a}
   // li:nth-child(2) p:first-child{background:#4b8dd1}
   // li:nth-child(3) p:first-child{background:#5a7bef}
   // li:nth-child(4) p:first-child{background:#4fc285}
   // li:nth-child(5) p:first-child{background:#f39542}
   // li:nth-child(6) p:first-child{background:#77b0eb}
   // li:nth-child(7) p:first-child{background:#9d75e0}
   // li:nth-child(8) p:first-child{background:#5ad591}
   // li:nth-child(9) p:first-child{background:#f1ce2b}
   // li:nth-child(10) p:first-child{background:#42ccca}
   li:nth-child(1) p:first-child{background:#77b0eb}
   li:nth-child(2) p:first-child{background:#5ad591}
   li:nth-child(3) p:first-child{background:#f39542}
   li:nth-child(4) p:first-child{background:#f1ce2b}
   li:nth-child(5) p:first-child{background:#9d75e0}
}
</style>
