<template>
  <vx-container-dialog :form="FormData" :rules="Rules" :title="LoaderDict.Business.T_PhysicalZone.Title" :visible.sync="Visible" :trigger.sync="SaveTrigger">
    <vd-company-physicalzone operate="save" :trigger.sync="SaveTrigger" :query="Query" :data="FormData" :result.sync="SaveResult"></vd-company-physicalzone>
    <vx-container-item :label="LoaderDict.Business.CompanyId" :rule="Rules.CompanyId">
      <vm-select-company v-model="FormData.CompanyId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.CompanyId" :label.sync="FormData.CompanyName"></vm-select-company>
    </vx-container-item>
    <vx-container-item :label="LoaderDict.Business.T_Mall.Name" :rule="Rules.MallId">
      <vm-select-mall v-model="FormData.MallId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_Mall.Name" :label.sync="FormData.MallName"></vm-select-mall>
    </vx-container-item>
    <vx-container-item :label="LoaderDict.Business.T_PhysicalZone.ZoneName" :rule="Rules.Name">
      <vx-form-input v-model="FormData.Name" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_PhysicalZone.ZoneName"></vx-form-input>
    </vx-container-item>
    <vx-container-item :label="LoaderDict.Business.T_PhysicalZone.ZoneType" :rule="Rules.ZoneTypeId">
      <vm-select-zonetype v-model="ZoneTypeId" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_PhysicalZone.ZoneTypeName" :label.sync="FormData.ZoneTypeName"></vm-select-zonetype>
    </vx-container-item>
    <vx-container-item label="楼层" v-if="type==3||type==4">
      <vm-select-floor v-model="FormData.FloorId" :mapurl.sync="imgUrl" :placeholder="LoaderDict.Placeholder.PleaseInput + LoaderDict.Business.T_PhysicalZone.ZoneTypeName"></vm-select-floor>
    </vx-container-item>
    <vx-container-item label="上传底图" v-if="type==2">
      <vx-form-upload></vx-form-upload>
    </vx-container-item>
    <vx-container-item label="中心点坐标" v-if="type==3||type==4">
      x
      <vx-form-input :close="false" :disabled="true" style="width:80px;display:inline-block" v-model="FormData.LocationX"></vx-form-input>
      y
      <vx-form-input :close="false" :disabled="true" style="width:80px;display:inline-block" v-model="FormData.LocationY"></vx-form-input>
      <vx-basic-button @click="SelectXY" borderColor="none" background="none" color="#000" btnColor="" style="display:inline-block" icon="" :label="label" type="none"></vx-basic-button>
    </vx-container-item>
    <!-- <vx-container-item label="X轴坐标">
         <vx-form-input v-model="FormData.LocationX" :placeholder="LoaderDict.Placeholder.PleaseInput"></vx-form-input>
      </vx-container-item>
      <vx-container-item label="Y轴坐标">
         <vx-form-input v-model="FormData.LocationY" :placeholder="LoaderDict.Placeholder.PleaseInput"></vx-form-input>
      </vx-container-item> -->
    <vx-container-item label="员工数量" v-if="type==3">
      <vx-form-input v-model="FormData.Clerks" :placeholder="LoaderDict.Placeholder.PleaseInput + '员工数量'"></vx-form-input>
    </vx-container-item>
    <vx-container-item label="营业面积" v-if="type==3">
      <vx-form-input v-model="FormData.Area" :placeholder="LoaderDict.Placeholder.PleaseInput + '营业面积'"></vx-form-input>
    </vx-container-item>
    <vx-container-item label="商铺位置" v-if="type==3">
      <vx-form-input v-model="FormData.RoomNo" :placeholder="LoaderDict.Placeholder.PleaseInput + '商铺位置'"></vx-form-input>
    </vx-container-item>
    <vx-container-item :label="LoaderDict.Common.Enabled">
      <vx-form-radio v-model="FormData.Enabled" type="EnabledStatus"></vx-form-radio>
    </vx-container-item>
  </vx-container-dialog>
</template>
<script>
Vue.component("vm-form-physicalzone", {
   data() {
      return {
         ZoneTypeId: null,
         type: 0,
         label: "无底图",
         imgUrl: "",
         FormData: {
            Id: null,
            Name: null,
            MallName: null,
            ZoneTypeId: null,
            ZoneTypeName: null,
            ZoneType: null,
            Enabled: 1,
            MallId: null,
            CompanyId: null,
            CompanyName: null,
            FloorId: null,
            LocationX: null,
            LocationY: null,
            Clerks: null,
            Area: null,
            RoomNo: null
         },
         Rules: {
            CompanyId: { required: true },
            MallId: { required: true },
            Name: { required: true },
            ZoneTypeId: { required: true }
         }
      };
   },
   created() {},
   mounted() {
      this.$Bus.$on("SelectXY.callback", obj => {
         this.FormData.LocationX = obj.x;
         this.FormData.LocationY = obj.y;
      });
   },
   methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      SelectXY() {
         if (!this.imgUrl) return;
         this.$Bus.$emit("SelectXY.Visible");
         this.$Bus.$emit("SelectXY.Src", this.imgUrl);
      }
   },
   watch: {
      imgUrl(val){
        if(val){
          this.label="选择中心点"
        }
      },
      ZoneTypeId(val) {
         //type 1.主出入口,2.楼层,3.商铺,4.通道、区域、试衣间、展区
         if (val == "7509ea53292f4b7c97ddcbe70c8fd318") {
            this.type = 1;
         } else if (val == "21a9fe6fe9be432589dea9167e748364") {
            this.type = 2;
         } else if (val == "268dece4837b484d92abc389bad3f2ec") {
            this.type = 3;
         } else if (
            val == "1f41336b31a4400eabae2f099d99be17" ||
            val == "40c7933d20c74240bba6e6cc863782dd" ||
            val == "7a1bb04e55744ad1bae8b22e21b5b311" ||
            val == "b111a8c427ae4387a43c3bd299cd4e6f"
         ) {
            this.type = 4;
         } else {
            this.type = 0;
         }
         this.FormData.ZoneTypeId=val
         console.log("val", val);
      }
   },
   mixins: ["defaultBusinessForm"]
});
</script>
