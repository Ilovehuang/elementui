<template>
   <div class="form-header-nav">
      <ul>
         <!-- <transition-group name="bounce" tag="ul"> -->
         <li :class="item.active?'active':''" v-if="index<8" v-for="(item,index) in navList" @click="navClick(index)" :key="item">
            <template v-if="item.href">
               <a target="_blank" :href="item.href" >{{item.title}}</a>
            </template>
            <template v-else>
               {{item.title}}
            </template>
         </li>
         <li :class="item.active?'active':''" v-if="index>=8" v-show="showMore" v-for="(item,index) in navList" @click="navClick(index)" :key="item">
            <template v-if="item.href">
               <a :href="item.href" target="_blank" >{{item.title}}</a>
            </template>
            <template v-else>
               {{item.title}}
            </template>
         </li>
         <!-- </transition-group> -->
      </ul>

      <h5 >当前是：<span>{{label}}</span> 模式</h5>
      <!-- <transition name="bounce"  >
               <div tabindex=1 v-if="item.key=='more'" class="more" v-show="showMore" >
                  <p v-for="more in moreList" :key="more" :href="item.href"> <a :href="more.href">{{more.title}}</a></p>
               </div>
            </transition> -->
   </div>
</template>
<script>



Vue.component("vp-header-nav", {
   template: template,
   props: [],
   data() {
      return {
         showMore:false,
         navList:[{
            active:true,
            title:"客流分时",
            key:"timeSharing"

         },{
            title:"客流分布",
            key:"distribution"
         },{
            title:"大屏展示",
            key:"exhibition",
            href:"/largescreen/LargeScreen.html"
         },{
            title:"用户画像",
            key:"portrait"
         },{
            title:"热力图",
            key:"heat"
         },{
            title:"场馆客流",
            key:"stadium"
         },{
            title:"实时点位图",
            key:"scatter"
         },{
            title:"更多",
            key:"more"
         },{
            title:"单人驻留时长图",
            key:"residence"
         },{
            title:"单人轨迹图",
            key:"trace"
         },{
            title:"密度图",
            key:"density"
         },{
            title:"用户上网行为",
            key:"behavior"
         },{
            title:"在线用户",
            key:"online"
         },{
            title:"上网时长流量",
            key:"timeflow",
            // href:"/online/OnlineTime.html"
         },{
            title:"访问日志",
            key:"log",
            // href:"/online/OnlineUserBehavior.html"
         },{
            title:"EG易网关",
            key:"Eg",
            href:"http://192.168.200.1/"
         },{
            title:"桑基图",
            key:"sankey",
         },{
            title:"商铺关系图",
            key:"graph"
         }],
         label:"客流分时"
      };
   },
   computed: {
   },
   watch: {
   },
   methods: {
      navClick(activeIndex){
         var me=this;
         for (let index = 0; index < this.navList.length; index++) {
            const element = this.navList[index];
            if(activeIndex==index){
               if(element.key=="more"){
                  this.showMore=!this.showMore
                  element.title=this.showMore?"收起":"更多";
                  return
               }
               if(!element.href){
                  PubSub.publish("HeaderNavKey",element.key)
                  // return
               }
               this.navUnactive()
               // setTimeout(function(){
                  element.active=true
               // },1000)
               this.label=element.title
               me.$set(me.navList, index, element)
               if(!element.href)
                  location.search="?key="+element.key
            }
         }
      },
      navUnactive(){
         for (let index = 0; index < this.navList.length; index++) {
            const element = this.navList[index];
            element.active=false
         }
      }
   },
   created() {},
   mounted() {
      var search=location.search.replace("?","").split("=")
      var isOpen=true;
      if(search[0]=="key"){
         for (let index = 0; index < this.navList.length; index++) {
            const element = this.navList[index];
            element.active=false;
            if(element.key==search[1]){
               element.active=true;
               this.label=element.title
               isOpen=false;
               if(index>=8){
                  this.showMore=true
                  this.navList[7].title="收起";
               }
            }
         }
      }else{
         // location.search="?key="+this.navList[0].key
      }
      if(isOpen){
         this.navList[0].active=true
      }
   },
});
</script>


<style lang="less">
.form-header-nav {
   ul{
      cursor: pointer;
      background: #fff;
      margin-top: 15px;
      font-size: 0;
      li{
         font-size: 16px;
         width: 12.5%;
         display:inline-block;
         text-align: center;
         position: relative;
         line-height: 40px;
         &::before{
            content:"";
            display: block;
            float: left;
            width: 1px;
            height:24px;
            background: #f0f3fc;
            margin-top: 8px
         }
         &:first-child::before{
            display: none;
         }
         a{
            color: #000;
            display: block
         }
         div{
            width: 100%;
            outline: none;
            position: absolute;
            top: 40px;
            font-size: 14px;
            z-index: 1;
            box-shadow: 0px 5px 5px 2px  rgba(0, 0, 0, 0.1);
            p{
               background: #fff;
               border-top: 1px solid #f0f3fc;

            }
            p:frsit-child{
               border-top: 0;

            }
         }
      }
      li.active{
         color: #486bc9;
         font-weight: 900;
      }
   }
   h5{
      margin-top: 15px;
      line-height: 40px;
      font-size: 16px;
      span{
         color: #486bc9
      }
   }
}
</style>
