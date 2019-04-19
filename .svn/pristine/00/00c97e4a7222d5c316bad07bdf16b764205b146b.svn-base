<template>
   <!-- <div id="vm-choose-locationchoose" :idx="idx" :actidx="ActIdx" :style="{'width':sty.width}" @click="panechoose" :class="Shadowcolor"> -->
   <div id="vm-choose-locationchoose" :idx="idx" :actidx="ActIdx"  @click="panechoose" :class="Shadowcolor">
      <div :class="Shadowcolor">
         <slot> </slot>
         <!-- <h4 :style="{'background-color':sty.bg}" :class="Background"> -->
         <h4  :class="Background">
            <i v-if="ishow" class="red"> * </i>
            {{title}}
         </h4>
         <!-- <ul :style="{'min-height':sty.minheight, 'max-height':sty.maxheight, 'border': sty.border}" :class="Border" :id="styclass"> -->
         <ul :class="Border" :id="styclass">
            <slot name="Search"></slot>
            <!-- <li v-for="item in options" :key="item[KeyField]" :label="item[KeyField]" @click="choose" :style="{'text-align':sty.algin}" class="clickcolor">{{item[LabelField]}}</li> -->
            <li v-for="item in options" :key="item[KeyField]" :label="item[KeyField]" @click="choose" class="clickcolor">{{item[LabelField]}}</li>
         </ul>
      </div>
   </div>
</template>

<style  lang="less">
#vm-choose-locationchoose {
   margin: 0 auto;
   margin-bottom: 25px;
   text-align: center;
   h4 {
      height: 30px;
      line-height: 30px;
      background-color: #ece9e9;
      i {
         font-size: 12px;
         color: #b3b2b2;
      }
   }
   ul {
      // padding: 0 10px;
      border: 1px solid #ccc;
      min-height: 90px;
      max-height: 120px;
      overflow: auto;
      li {
         padding: 0 10px;
         height: 30px;
         line-height: 30px;
         &:hover {
            background-color: #f5f7fa;
         }
         &.search {
            background-color: white;
         }
      }
   }
   .red {
      color: red;
      font-weight: 700;
   }
   .search {
      height: auto;
      margin: 10px 0;
   }
   // .clickcolor {
   //    color: '#409EFF';
   // }
   //  设置阴影
   .shadowcolor {
      -webkit-box-shadow: #666 0px 0px 10px;
      -moz-box-shadow: #666 0px 0px 10px;
      box-shadow: #666 0px 0px 10px;
   }
   // 设置ul 边框
   .ulsty {
      border: 1px solid #409eff;
   }
   // 设置 标题背景色
   .titlesty {
      color: #ffffff;
      background-color: #409eff;
   }
}
</style>
<script>
Vue.component("vm-choose-locationchoose", {
   
   props: [
      "title", /// 模块标题
      "options", /// 数据
      "value", /// 选中数据的值
      "label", /// 选中数据的文字
      "valuefield", //选择框的value字段
      "labelfield", //选择框的label字段
      "sty", /// 样式
      "ishow", /// 是否必选
      "show", /// 是否显示搜索框
      "styclass",
      "idx",
      "actidx"
   ],
   data() {
      return {
         Border: "",
         Shadowcolor: "",
         Background: ""
      };
   },
   computed: {
      KeyField: {
         get() {
            return this.valuefield ? this.valuefield : "Id";
         }
      },
      LabelField: {
         get() {
            return this.labelfield ? this.labelfield : "Name";
         }
      },
      ActIdx: {
         get() {
            if (this.idx && this.actidx == this.idx) {
               this.Shadowcolor = "shadowcolor";
               this.Background = "titlesty";
               this.Border = "ulsty " + this.idx;
            } else {
               this.Shadowcolor = "";
               this.Background = "";
               this.Border = "";
            }
            return this.actidx;
         },
         set(val) {
            this.$emit("update:actidx", val);
         }
      }
   },
   updated() {
      this.setDefault();
   },
   methods: {
      choose(e) {
         let me = this;
         let value = $(e.target).attr("label");
         let StyObj = {};
         let items = $("#" + me.styclass + " li");

         if (typeof $(e.target).attr("style") == "string") {
            $(e.target)
               .attr("style")
               .split(";")
               .forEach(item => {
                  item.split(":");
                  StyObj[item.split(":")[0].trim()] = item.split(":")[1];
               });
         }

         if (!StyObj.color || StyObj.color == "") {
            $(e.target).css("color", this.sty.color);
            $(e.target).css("background-color", "#f5f7fa");
         } else {
            $(e.target).css("color", "");
            $(e.target).css("background-color", "");
         }
         if (items.length == 1) $(e.target).css("color", this.sty.color);
         me.$emit("update:label", e.target.innerText);
         me.$emit("update:value", value);
      },
      setDefault() {
         let me = this;
         let bool = false;
         let items = $("#" + me.styclass + " li");
         for (let i = 0; i < items.length; i++) {
            if (items[i].style.color == "rgb(64, 158, 255)") bool = true;
         }
         if (!bool) {
            // 设置默认点击样式值
            let $mall = $("#" + me.styclass);

            let $li = $mall.find("li").eq(0);

            if ($li.attr("label")) {
               let value = $li.attr("label");
               if ($mall) {
                  $li.css("color", this.sty.color);
                  $li.css("background-color", "#f5f7fa");
               }
               me.$emit("update:label", $li.text());
               me.$emit("update:value", value);
            }
         }
      },
      panechoose() {
         if (this.idx) this.ActIdx = this.idx;
      }
   }
});
</script>
