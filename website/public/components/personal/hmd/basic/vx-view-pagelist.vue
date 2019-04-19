<template>
   <div class="vx-view-pagelist" >
      <ul class="pagination" >
            <li  @click="Value>1 && Value-- && goto(Value)" >
               <a :class="Value<=1?'nao':''">{{LoaderDict.DataTable.Previous}}</a></li><li v-for="index in pages" @click="goto(index)" :class="{'active':Value == index}" :key="index">
              <a >{{index}}</a>
            </li><li @click="Value<allpage && Value++ && goto(Value++)">
               <a :class="Value>=allpage?'nao':''">{{LoaderDict.DataTable.Next}}</a></li>
        </ul>
   </div>
</template>

<script>
Vue.component("vx-view-pagelist", {
   template: template,
   props: {
      "value":{
         default:""
      },//选中值
      "showItem":{
         default:15
      },//显示项数
      "allpage":{
         default:15
      },//总页数
   },
   data() {
      return {
         define:{
            showItem:15,
            allpage:15
         },
         LoaderDict:LoaderDict
      };
   },
   mounted(){
   },
   computed: {
      Value: {
         get() {
            return this.value
         },
         set(val){
            this.$emit("input",val)
            return this.value
         }
      },
      pages:function(){
       var pag = [];
         if( this.Value < this.showItem ){ //如果当前的激活的项 小于要显示的条数
              //总页数和要显示的条数那个大就显示多少条
              var i = Math.min(this.showItem,this.allpage);
              while(i){
                  pag.unshift(i--);
              }
          }else{ //当前页数大于显示页数了
              var middle = this.Value - Math.floor(this.showItem / 2 ),//从哪里开始
                  i = this.showItem;
              if( middle >  (this.allpage - this.showItem)  ){
                  middle = (this.allpage - this.showItem) + 1
              }
              while(i--){
                  pag.push( middle++ );
              }
          }
        return pag
      }
   },
   methods:{
      goto:function(index){
         // if(Value == 1){
         //    Value++
         //    return
         // }
         // if(allpage == Value && allpage == 0 ){
         //    Value--
         //    return
         // }
         if(index == this.Value) return;
            this.Value = index;
         //这里可以发送ajax请求
      }
   }
})
</script>
<style lang="less">
   .vx-view-pagelist{
    li{
      list-style:none;
    }
    a{
      text-decoration:none;
          cursor: pointer;
    }
    .pagination {
       user-select: none;
        position: relative;
      }
      .pagination li{
        display: inline-block;
        line-height: 1;
        height: 37px;
        & a.nao{
           background: #eee;
           color: #999;
           cursor: not-allowed;
        }
      }
      .pagination li:first-child a{
         border-left: 1px solid #ddd;
         border-radius: 5px 0 0 5px;

      }
      .pagination li:last-child a{
         border-radius: 0 5px 5px 0
      }
      .pagination li a{
        padding:.5rem 1rem;
        display:inline-block;
        border:1px solid #ddd;
        border-left: 0;
        background:#fff;
        color:#0E90D2;
      }
      .pagination li a:hover{
        background:#eee;
      }
      .pagination li.active a{
        background:#0E90D2;
        color:#fff;
      }
   }
</style>
