<template>
   <vb-grid-company>
      <vb-form-company></vb-form-company>
      <vb-form-companyplugin subscribe="CompanyOptionsForm"></vb-form-companyplugin>
      <vb-form-companyindex subscribe="CompanyIndexForm"></vb-form-companyindex>
   </vb-grid-company>
</template>
<script>
$VueFactory.businessPage({
   template: template,
   name: "vb-page-company"
});
</script>
