<template>
  <v-row>
    <v-col>
      <v-breadcrumbs :items="value" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TheBreadcrumbs",
  props: {
    value: {
      type: Array,
    },
  },
};
</script>
