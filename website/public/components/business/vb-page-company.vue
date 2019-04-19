<template>
   <vb-grid-company>
      <vb-form-company></vb-form-company>
      <vb-form-companyplugin subscribe="PluginForm"></vb-form-companyplugin>
   </vb-grid-company>
</template>
<script>
$VueFactory.businessPage({
   template: template,
   name: "vb-page-company"
});
</script>
