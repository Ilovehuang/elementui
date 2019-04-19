<template>
   <vb-grid-conditionoption>
      <vb-form-conditionoption></vb-form-conditionoption>
   </vb-grid-conditionoption>
</template>
<script>
$VueFactory.businessPage({
   template: template,
   name: "vb-page-conditionoption",
   created() {
      console.log("form");
   }
});
</script>
