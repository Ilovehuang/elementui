<template>
   <div></div>
</template>

<script>
Vue.component("vd-bd-savedata", {
   template: template,
   props: [
      "url", /// 发送的地址
      "method", /// 发送方式
      "data", /// 发送的数据
      "query", /// 发送的数据
      "trigger", /// 强制操作
      "result", /// 返回的结果
      "isloading" /// 查看是否在加载数据
   ],
   mounted() {},
   watch: {
      trigger() {
         if (this.trigger !== false && this.trigger !== "false") this.saveData();
      }
   },
   methods: {
      saveData() {
         let me = this;
         let method = "save";
         if (this.method) method = this.method;
         me.$emit("update:isloading", true);
         let url = this.url + "?op=" + method;
         var query = this.query ? this.query : {};
         var data = this.data ? this.data : {};
         console.warn(url, query, data);
         $.ajaxPost(url, { Data: data, Query: query }, function(res) {
            console.warn(url, res);
            me.$emit("update:isloading", false);
            me.$emit("update:trigger", false);
            if (res.status == 1000) me.$emit("update:result", res.data);
            else me.$emit("update:result", null);
         });
         // this.$axios({
         //    method: method,
         //    url: this.url,
         //    params: this.postdata
         // }).then(res => {
         //    me.$emit("update:trigger", false);
         //    me.result = res.data;
         // });
      }
   }
});
</script>
