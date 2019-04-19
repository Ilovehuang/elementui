<template>
   <vx-view-datatable :options="GridOptions" :checked="Checked" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <vd-company-device operate="load" :method="method" :autoload="autoload" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-device>
      <vd-bd-physicallinkeddevice operate="save"  :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-physicallinkeddevice>
      <div slot="BtnContainer">
         <slot name="BtnContainer"></slot>
      </div>
   </vx-view-datatable>
</template>
<style>
table {
   width: 100% !important;
}
</style>

<script>
Vue.component("vm-grid-linkeddevicezone", {
   props: {
      "autoload":{
         default:false
      },
      "resultinfo":{
         default:function(){ return [] }
      }
   },
   data(){
      return {
         method:"",
         GridOptions: {
            paging: true,
            autoWidth: true,
            order: [[1, "asc"]],
            columns: [
               {
                  checkbox: true,
                  width: 30,
                  sortable: false,
                  className: "text-center"
               },
               // "所属案场"
               {
                  title: LoaderDict.Business.T_Device.MallId,
                  width: 80,
                  className: "text-center",
                  data: "MallName"
               },
               {
                  title: LoaderDict.Business.T_Device.DeviceCode, //设备编码
                  width: 80,
                  className: "text-center",
                  data: "DeviceZoneCode"
               },
               {
                  title: LoaderDict.Business.T_Device.Location, //位置
                  width: 80,
                  className: "text-center",
                  data: "Location"
               },
               {
                  title: LoaderDict.Business.T_Device.DeviceType, //设备类型
                  width: 80,
                  className: "text-center",
                  data: "DataClass"
               },
               {
                  title: LoaderDict.Business.T_Device.BothWay, // "正反向",
                  width: 80,
                  className: "text-center",
                  data: function(row) {
                     let me = this;
                     // console.log("me.Query")
                     // console.log(me.resultinfo)
                     // console.log(row)
                     // let DeviceZones = [
                     //    { DataReverse: "-1", DeviceZoneId: "16f60b9c4a4c4e33a440d8bcf3e9b1c8" },
                     //    { DeviceZoneId: "16f60b9c4a4c4e33a440d8bcf3e9b1c9", DataReverse: "-1" }
                     // ];
                     // console.log("me.Query");
                     // console.log(me.Query);
                     var html = [];
                     // for (var i = 0; i < DeviceZones.length; i++) {
                     //    if (DeviceZones[i].DeviceZoneId == row.Id) {
                     //       row.DataReverse = DeviceZones[i].DataReverse;
                     //    }
                     // }
                     // console.log("row.DataReverse");
                     // console.log(row.DataReverse);
                     var isReverse = row.DataReverse * 1;
                     html.push("<label class='el-radio' clearable=''>" + "<span class='el-radio__input ");
                     if (isReverse != -1) html.push(" is-checked ");
                     html.push(
                        "'><span class='el-radio__inner'></span>" +
                           "<input type='radio' class='el-radio__original' value='1' id='" +
                           row.Id +
                           "' ></span>" +
                           "<span class='el-radio__label'>" +
                           LoaderDict.Business.T_Device.Forward +
                           "</span>" +
                           "</label>"
                     );
                     html.push("<label class='el-radio' clearable=''>" + "<span class='el-radio__input");
                     if (isReverse == -1) html.push(" is-checked ");
                     html.push(
                        "'><span class='el-radio__inner'></span>" +
                           "<input type='radio' class='el-radio__original' value='-1'  id='" +
                           row.Id +
                           "'></span><span class='el-radio__label'>" +
                           LoaderDict.Business.T_Device.Backward +
                           "</span></label>"
                     );
                     return html.join("");
                  }
               }
            ],

         }
      }
   },
   created() {
      var me = this;

      this.$Bus.$on("Grid.LinkedPhysicalZone", function(data) {
         if (data != undefined) {
            me.resultinfo = data;
            console.log("me.resultinfo");
            console.log(me.resultinfo);
            me.$set(me.Query, "DeviceZones", data.DeviceZones);
            me.$set(me.Query, "Id", data.Id);
            me.method = "linkedcamera";
            me.LoadTrigger = true;
            if (data.DeviceZones) {
               data.DeviceZones.forEach(function(item) {
                  item.Id = item.DeviceZoneId;
               });
            }
            me.Checked = data.DeviceZones;
         }
      });
      this.$Bus.$on("Grid.CheckedSave", (data)=> {
         me.$set(me.Query, "Checked", me.Checked);
         this.$Bus.$emit("Grid.SaveLinkedPhysicalZone", me.Query);
         me.Checked = [];
         this.$Bus.$emit("Grid.LinkedPhysicalZone", me.Query);
      });
   },
   methods: {
   },
   mixins:["defaultBusinessGrid"]
});
</script>
