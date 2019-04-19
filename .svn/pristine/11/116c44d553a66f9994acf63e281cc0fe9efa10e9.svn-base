<template>
   <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Container.ChangePassword" width="580" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-bd-login method="changePass" operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-bd-login>
      <vx-container-item :label="'旧密码'" :rule="Rules.OldPassword">
         <vx-form-password v-model="FormData.OldPassword"></vx-form-password>
      </vx-container-item>
      <vx-container-item :label="'新密码'" :rule="Rules.NewPassword">
         <vx-form-password v-model="FormData.NewPassword"></vx-form-password>
      </vx-container-item>
      <vx-container-item :label="'确认密码'" :rule="Rules.Password">
         <vx-form-password v-model="FormData.Password"></vx-form-password>
      </vx-container-item>
      <div slot="footer">
         <vx-basic-button type="save" btncolor="primary" @click="saveForm"></vx-basic-button>
         <vx-basic-button type="cancel" @click="closeDialog"></vx-basic-button>
      </div>
   </vx-container-dialog>

</template>
<style lang="less">
</style>
<script>
Vue.component("vm-form-changepassword", {
   data() {
      return {
         FormData:{
            OldPassword:"",
            NewPassword:"",
            Password:""
         },
         Rules:{
            OldPassword:{ required: true },
            NewPassword:{ required: true },
            Password:{ required: true }
         },

      };
   },
   mounted(){
      this.$Bus.$on("System.ChangePassword",()=>{
         this.Visible=true
      })
   },
   methods:{
      saveForm(){
         var ruleResult = true;
         ruleResult = this.$validate.validRules(this.Rules, this.FormData);
         if(ruleResult){
            if(this.FormData.NewPassword==this.FormData.Password){
               this.SaveTrigger=true
            }else{
               this.$error("两次密码不一样！")
            }
         }
      },
      closeDialog(){
         this.Visible=false
      }
   },
   watch:{
   },
   mixins: ["defaultBusinessForm"]
});
</script>
