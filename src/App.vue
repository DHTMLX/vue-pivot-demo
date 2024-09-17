<script>
import Pivot from "./components/Pivot.vue";
import { getData } from "./data";

export default {
  components: { Pivot },
  data() {
    const { fields, dataset } = getData();
    return {
      fields,
      dataset
    };
  }
};
</script>

<template>
  <Pivot :fields="fields" :dataset="dataset" />
</template>
