<template>
  <v-container fluid>
    <TheBreadcrumbs v-model="breadcrumbs" />

    <div>
      <p>HomeView</p>
    </div>
  </v-container>
</template>

<script>
import TheBreadcrumbs from "@/components/common/TheBreadcrumbs.vue";
export default {
  name: "HomeView",
  components: {
    TheBreadcrumbs,
  },
  data() {
    return {
      breadcrumbs: [{ text: "홈", disabled: false }],
    };
  },
};
</script>
