<template>
   <vx-view-datatable :options="GridOptions" :checked="Checked" :tabledata="List" :rowdata.sync="RowData" :modifyrow.sync="ModifyForm" :deleterow.sync="DeleteTrigger">
      <vd-company-device operate="load" :method="method" :autoload="autoload" :trigger.sync="LoadTrigger" :query="Query" :result.sync="List"></vd-company-device>
      <!-- <vd-bd-device operate="save" method="del" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-bd-device> -->
      <vd-company-physicalunlinkeddevice operate="save" :method="physicalmethod" :trigger.sync="DeleteTrigger" :query="RowData" :result.sync="DeleteResult"></vd-company-physicalunlinkeddevice>
         <div slot="BtnContainer">
            <slot name="BtnContainer"></slot>
         </div>
   </vx-view-datatable>
</template>

<script>
Vue.component("vm-grid-unlinkeddevicezone", {
   data() {
      return {
         method:"",
         physicalmethod:"",
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
                     var html = [];
                     html.push("<label class='el-radio' clearable=''>" + "<span class='el-radio__input ");

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
            afterDraw(maingrid) {
               CheckCheckbox.drawradio(maingrid, [
                  { Id: "12a3f524e2ea445db5dda88d07db79e8" },
                  { Id: "16f60b9c4a4c4e33a440d8bcf3e9b1c8" }
               ]);
            },
            cellClick(e, isChecked) {
               CheckCheckbox.cellClick(this, e, isChecked, [
                  { Id: "12a3f524e2ea445db5dda88d07db79e8" },
                  { Id: "16f60b9c4a4c4e33a440d8bcf3e9b1c8" }
               ]);
            },
            CheckAll(e, maingrid, allChecked) {
               CheckCheckbox.CheckAll(e, maingrid, allChecked, [
                  { Id: "12a3f524e2ea445db5dda88d07db79e8" },
                  { Id: "16f60b9c4a4c4e33a440d8bcf3e9b1c8" }
               ]);
            }
         }
      };
   },
   created() {
      var me = this;
      //默认不加载
      this.autoload = false;
      this.$Bus.$on("Grid.LinkedPhysicalZone", function(data) {
         if (data != undefined) {
            console.log("unlinkedId")
            console.log(data.Id)
            me.$set(me.Query, "DeviceZones", data.DeviceZones);
            me.$set(me.Query, "Id", data.Id);
            me.method = "unlinkedcamera";
            me.LoadTrigger = true;
            me.autoload = true;
         }
      });

      this.$Bus.$on("Grid.CheckedSave", function(data) {
         me.$set(me.Query, "Checked", me.Checked);
         console.log("me.Query+++")
         console.log(me.Query)
         me.$Bus.$emit("Grid.SaveUnLinkedPhysicalZone", me.Query);
         me.Checked = [];
         // PubSub.publish("Grid.LinkedPhysicalZone", me.Query);
      });
   },
   mixins: ["defaultBusinessGrid"]
});
</script>
