<template>
  <v-container fluid>
    <TheBreadcrumbs v-model="breadcrumbs" />
  </v-container>
</template>

<script>
import TheBreadcrumbs from "@/components/common/TheBreadcrumbs.vue";
export default {
  name: "TableBasicView",
  components: {
    TheBreadcrumbs,
  },
  data() {
    return {
      breadcrumbs: [
        { text: "지도", disabled: false },
        { text: "기본", disabled: false },
      ],
    };
  },
};
</script>
