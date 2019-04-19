<template>
   <div class="vx-basic-tree">
      <el-tree :data="options" @check="getNodes" @node-click="getNodes" :show-checkbox="showcheckbox" ref="tree" node-key="Id" :default-checked-keys="TreeIds" :props="defaultprops" :default-expanded-keys="defaultkeys">
      </el-tree>
      <slot></slot>
   </div>
</template>
<style lang="less">
</style>
<script>
Vue.component("vx-basic-tree", {
   
   props: {
      "options":{
         default:function(){return []}
      }, /// 获取数据路径
      "defaultprops":{
         default:function(){return {}}
      }, /// 指定标签
      "defaultkeys":{
         default:function(){return []}
      }, /// 默认展开节点的 key
      "fulltreeids":{
         default:function(){return []}
      }, /// 包括路径的选中菜单数据Id []
      "treeids":{
         default:function(){return []}
      }, /// 选中的菜单数据Id []
      "showcheckbox":{
         default:true
      }, /// 是否多选 true/false
      "treenode":{
         default:function(){return []}
      }, ///选中的菜单数据 []
      "fulltreenode":{
         default:function(){return []}
      }, ///包括路径的选中菜单数据 []
      "currentnode":{
         default:function(){return {}}
      } /// 当前节点
   },
   data() {
      return {};
   },
   computed: {
      TreeIds: {
         get() {
            return this.treeids;
         }
      }
   },
   watch: {
      TreeIds() {
         this.setDefaultkeys();
      }
   },
   methods: {
      setDefaultkeys() {
         if (this.$refs.tree) {
            if (this.treeids) this.$refs.tree.setCheckedKeys(this.treeids);
            else this.$refs.tree.setCheckedKeys([]);
         }
      },
      getNodes(data, node) {
         let treeids = this.$refs.tree.getCheckedKeys(true);
         let treenode = this.$refs.tree.getCheckedNodes(true);

         let fulltreeids = [];
         let fulltreenode = [];
         let currentnode = data;
         if (node) {
            fulltreenode = [];
            fulltreeids = [];
            if (node.checkedNodes && node.checkedNodes.length > 0) {
               node.checkedNodes.forEach(item => {
                  fulltreeids.push(item.Id);
                  fulltreenode.push(item);
               });
            }
            if (node.halfCheckedNodes && node.halfCheckedNodes.length > 0) {
               node.halfCheckedNodes.forEach(item => {
                  fulltreeids.push(item.Id);
                  fulltreenode.push(item);
               });
            }
         }
         this.$emit("update:currentnode", currentnode);
         this.$emit("update:treeids", treeids);
         this.$emit("update:treenode", treenode);
         this.$emit("update:fulltreeids", fulltreeids);
         this.$emit("update:fulltreenode", fulltreenode);
      }
   }
});
</script>
