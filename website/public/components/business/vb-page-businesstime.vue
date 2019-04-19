<template>
   <vb-grid-businesstime>
      <vb-form-businesstime></vb-form-businesstime>
      <vb-form-businesstimeplugin subscribe="PluginForm"></vb-form-businesstimeplugin>
   </vb-grid-businesstime>
</template>
<script>
$VueFactory.businessPage({
   template: template,
   name: "vb-page-businesstime"
});
</script>
