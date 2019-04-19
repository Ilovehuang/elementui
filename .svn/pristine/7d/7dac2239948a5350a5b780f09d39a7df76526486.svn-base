<template>
   <vx-container-row>
      <vx-container-col :span="8">
         <vx-container-item :label="'所属集团'">
            <vm-select-company v-model="company"></vm-select-company>
         </vx-container-item>
      </vx-container-col>
      <vx-container-col :span="8">
         <vx-container-item :label="'案场名称'">
            <vm-select-mall v-model="mall"></vm-select-mall>
         </vx-container-item>
      </vx-container-col>
      <vx-container-col :span="8">
         <vx-container-item :label="'更新范围'">
            <vx-form-daterangepicker v-model="DateTime"></vx-form-daterangepicker>
         </vx-container-item>
      </vx-container-col>
      <vx-container-col :span="8">
         <vx-container-item :label="'调整比例'">
            <vx-form-input v-model="DateTime"></vx-form-input>
         </vx-container-item>
      </vx-container-col>
      <vx-container-col :span="24">
         <vx-container-col :span="14" class="datatype">
            <vx-container-item :label="'数据类型'">
               <vx-form-check v-model="radio" :list="radioList"></vx-form-check>
            </vx-container-item>
         </vx-container-col>
         <vx-container-col :span="6" style="min-height: 1px">
         </vx-container-col>
         <vx-container-col :span="4">
            <vx-basic-button :type="Button.type" :label="Button.label" :icon="Button.icon" :btncolor="Button.btncolor" :color="Button.color" :round="Button.round" :plain="Button.plain" :disabled="Button.disabled" :background="Button.background" @click="FormVisible">
            </vx-basic-button>
         </vx-container-col>
      </vx-container-col>
   </vx-container-row>
</template>
<script>
Vue.component("vm-manager-dataadjustment", {
   template: template,
   //value：选择值,list:数据列表,size:大小
   props: [],
   data() {
      return {
         Button: {
            type: "check",
            btncolor: "primary",
            round: false,
            plain: false,
            disabled: false,
            background: "",
            visible: false,
            label: "数据调整",
            icon: "btnIcon fa fa-flash",
            color: ""
         },
         company: "",
         mall: "",
         devicecode: "",
         radioList: [
            { label: "Count", value: 1 },
            { label: "Passby", value: 2 },
            { label: "Fitting", value: 3 },
            { label: "Dwell", value: 4 }
         ],
         radio: 1,
         DateTime: "",
         period: "1",
         label: "1",
         Query: {},
         trigger: false,
         options: [],
         List: []
      };
   },
   watch: {
      trigger() {
         console.log(this.List);
         var listOjb = this.List;
         var list = [];
         for (const key in listOjb) {
            list.push(listOjb[key]);
         }
         // this.List=list
      }
   },
   mounted() {},
   computed: {},
   methods: {
      FormVisible() {
         let DataFilds = [];
         let tableNmae = "";
         if (this.radio == 1) {
            DataFilds = ["Zone_Enter", "Zone_Exit"];
            tableNmae = "vb-grid-historicalcount";
         }
         if (this.radio == 2) {
            DataFilds = ["Zone_Passby"];
            tableNmae = "vb-grid-historicalpassby";
         }
         if (this.radio == 3) {
            DataFilds = ["Zone_Fitting"];
            tableNmae = "vb-grid-historicalfitting";
         }
         if (this.radio == 4) {
            DataFilds = ["Zone_NumberServed", "Zone_Duration"];
            tableNmae = "vb-grid-historicaldwell";
         }
         if (!this.devicecode) {
            return;
         }
         var Query = {
            DataFilds: DataFilds,
            Locations: { DeviceZoneCodes: [this.devicecode] },
            GroupBy: {
               Period: this.DateTime || 5
            },
            Times: {
               StartDate: "2018-07-27 00:00:00",
               EndDate: "2018-07-27 23:59:59"
            }
         };
         this.$Bus.$emit("ReportTable.Change", tableNmae);
         this.$Bus.$emit("ReportTime.Search", Query);

         // this.trigger=true
      }
   }
});
</script>
