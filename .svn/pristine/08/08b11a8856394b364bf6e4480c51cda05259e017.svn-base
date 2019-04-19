<template>
   <div>
      <vm-choose-locationchoose :options="List" labelfield="Name" valuefield="Id" :value.sync="Value" :label.sync="Label" :title="title" :sty="sty" :ishow="ishow">
         <vd-company-mall operate="load" :query="Query" method="select" :result.sync="List"> </vd-company-mall>
      </vm-choose-locationchoose>
   </div>
</template>
<script>
Vue.component("vm-mall-locations-mall", {
   
   props: [
      "value", /// 选中数据的值
      "label" /// 选中数据的文字
   ],
   // 选择区域中的案场
   data() {
      return {
         Query: {},
         List: null,
         title: "案场",
         ishow: true,
         MallId: [],
         sty: {
            algin: "center", /// 文字显示位置
            width: "200px", /// 容器的宽度 包含标题头
            color: "#409EFF", /// 点击之后的颜色
            class: "Mall",
            minheight: "210px", ///容器的最小高度
            maxheigh: "120px" ///容器的最大高度
         }
      };
   },
   computed: {
      Label:{
         get(){
            return this.label;
         },
         set(){
            this.$emit("update:label", this.label);
         }
      },
      Value: {
         get() {
            return this.value;
         },
         set(val) {
            let me = this;
            if (!me.MallId || me.MallId.length == 0) {
               me.MallId = [];
               me.MallId.push(val);
            } else {
               for (let i = me.MallId.length - 1; i >= 0; i--) {
                  if (me.MallId[i] == val) {
                     me.MallId.splice(i, 1);
                     if (me.MallId.length == 0) me.MallId = [];
                     break;
                  } else {
                     me.MallId.push(val);
                     break;
                  }
               }
            }
            this.$Bus.$emit("Grid.Mall", { MallId: me.MallId, label: me.label });
            this.$emit("update:value", val);
            this.$emit("update:label", this.label);
         }
      }
   }
});
</script>
