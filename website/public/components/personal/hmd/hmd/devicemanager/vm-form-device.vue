<template>
   <vx-container-dialog :form="FormData" :rules="Rules" title='采集主机信息' width="700" :visible.sync="Visible" :trigger.sync="SaveTrigger">
      <vd-company-device operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-device>
      <vx-container-item :label="LoaderDict.Business.CompanyId" :rule="Rules.CompanyId">
         <vm-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.CompanyId" :label.sync="FormData.CompanyName"></vm-select-company>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Mall.Name" :rule="Rules.MallId">
         <vm-select-mall v-model="FormData.MallId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.MallId" :label.sync="FormData.MallName"></vm-select-mall>
      </vx-container-item>
      <vx-container-item label="主机码" :rule="Rules.DeviceCode">
         <vx-form-input v-model="FormData.DeviceCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DeviceCode"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.DeviceType">
         <vm-select-devicetype v-model="FormData.DeviceType"></vm-select-devicetype>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.RemoteCode">
         <vx-form-input v-model="FormData.RemoteCode" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.RemoteCode"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.DataClass">
         <vx-form-select v-model="FormData.TimeZone" :options='DataClass'  :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.DataClass"></vx-form-select>
      </vx-container-item>
      <vx-container-item label="楼层">
         <vx-form-input v-model="FormData.FloorId" :placeholder="LoaderDict.Placeholder.PleaseInput + '楼层'"></vx-form-input>
      </vx-container-item>
      <vx-container-item :label="LoaderDict.Business.T_Device.IPAddress">
         <vx-form-input v-model="FormData.IPAddress" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.IPAddress"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="数据接口">
         <vx-form-input v-model="FormData.DataUrl" :placeholder="LoaderDict.Placeholder.PleaseInput + '数据接口'"></vx-form-input>
      </vx-container-item>
      <!-- <vx-container-item :label="LoaderDict.Business.T_Device.Location">
         <vx-form-input v-model="FormData.Location" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Device.Location"></vx-form-input>
      </vx-container-item> -->
      <vx-container-item :label="LoaderDict.Common.Enabled">
         <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
      </vx-container-item>
   </vx-container-dialog>
</template>
<style lang="less">
</style>
<script>
Vue.component("vm-form-device", {
   data() {
      return {
         DataClass:[
                     {
                        label: LoaderDict.Business.Radio.Flow,
                        value: "Count"
                     },
                     {
                        label: "停留时长",
                        value: "PersonDwell"
                     },
                     {
                        label: LoaderDict.Business.Radio.Pass,
                        value: "PassBy"
                     },
                     {
                        label: LoaderDict.Business.Radio.FittingRoom,
                        value: 3
                     },
                     {
                        label: LoaderDict.Business.Radio.Service,
                        value: 4
                     },
                     {
                        label: LoaderDict.Business.Radio.Queue,
                        value: 5
                     },
                     {
                        label: LoaderDict.Business.Radio.Alarm,
                        value: 6
                     },
                     {
                        label: LoaderDict.Business.Radio.HeatMap,
                        value: 7
                     }
                  ],
         FormData: {
            Id: null,
            Enabled: 1,
            MallId: null,
            MallName: null,
            DeviceCode: null,
            IPAddress: null,
            DeviceType: null,
            Location: null,
            RemoteCode: null,
            DataClass: null,
            CompanyId: null,
            CompanyName: null
         },
         Rules: {
            CompanyId: { required: true },
            MallId: { required: true },
            DeviceCode: { required: true }
         }
      };
   },
   mixins: ["defaultBusinessForm"]
});
</script>
