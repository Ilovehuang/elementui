<template>
   <div></div>
</template>

<script>
Vue.component("vd-bd-loaddata", {
   template: template,
   props: [
      "autoload", /// 是否自动加载，默认true
      "url", /// 发送的地址
      "method", /// 发送方式
      "query", /// 发送的数据
      "trigger", /// 加载标记，为true时自动加载，加载完成自动设置为false
      "result", /// 返回的结果
      "isloading", /// 查看是否在加载数据
      "interval" /// 定时刷新时间毫秒
   ],
   mounted() {
      if (this.interval) setInterval(this.loadData, this.interval);
      if (this.autoload === undefined || this.autoload) this.loadData();
   },
   watch: {
      trigger() {
         if (this.trigger !== false && this.trigger !== "false") this.loadData();
      }
   },
   methods: {
      loadData() {
         let me = this;
         let method = "grid";
         if (this.method) method = this.method;
         let url = this.url + "?op=" + method;
         me.$emit("update:isloading", true);
         var query = this.query ? this.query : {};
         console.warn(url, query);
         $.ajaxPost(url, { Query: query }, function(res) {
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
