<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="itemsPerPage"
    :loading="loading"
    :loading-text="loadingText"
    :no-data-text="noDataText"
    :show-expand="showExpand"
    :show-select="showSelect"
    :single-expand="singleExpand"
    :single-select="singleSelect"
    :value="value"
    item-key="id"
    mobile-breakpoint="0"
    hide-default-footer
    class="data_table"
    @input="$emit('input', $event)"
    @click:row="$emit('clickRow', $event)"
  >
    <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="item">
      <slot :name="name" v-bind="item"></slot>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    headers: {
      type: Array,
    },
    items: {
      type: Array,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: "데이터를 가져오는 중입니다.",
    },
    noDataText: {
      type: String,
      default: "검색된 목록이 없습니다.",
    },

    showExpand: {
      type: Boolean,
      default: false,
    },
    showSelect: {
      type: Boolean,
      default: false,
    },
    singleExpand: {
      type: Boolean,
      default: false,
    },
    singleSelect: {
      type: Boolean,
      default: false,
    },

    value: {
      type: Array,
    },
  },
};
</script>
