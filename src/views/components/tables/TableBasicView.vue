<template>
  <v-container fluid>
    <TheBreadcrumbs v-model="breadcrumbs" />

    <div>
      <DataTable
        :headers="tableHeaders"
        :items="tableItems"
        :loading="tableLoading"
      />
    </div>
  </v-container>
</template>

<script>
import TheBreadcrumbs from "@/components/common/TheBreadcrumbs.vue";
import DataTable from "@/components/common/DataTable.vue";
export default {
  name: "TableBasicView",
  components: {
    TheBreadcrumbs,
    DataTable,
  },
  data() {
    return {
      breadcrumbs: [
        { text: "테이블", disabled: false },
        { text: "기본", disabled: false },
      ],

      tableHeaders: [
        {
          text: "No.",
          value: "index",
          sortable: false,
        },
        {
          text: "이메일",
          value: "email",
          sortable: false,
        },
        {
          text: "이름",
          value: "name",
          sortable: false,
        },
        {
          text: "전화번호",
          value: "mobile",
          sortable: false,
        },
      ],
      tableItems: [],
      tableLoading: false,
    };
  },
};
</script>
