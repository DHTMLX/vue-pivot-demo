<template>
  <div class="dhx-container_inner">
    <section class="dhx_sample-controls">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="runSetData(1)">Set data 1</button>
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="runSetData(2)">Set data 2</button>
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="restore()">Restore</button>
    </section>
    <div class="dhx_sample-container__widget" ref="pivot"></div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
import dataset from "../../../public/static/dataset.json";
let data1 = [];
let data2 = [];
for (let i = 0; i < dataset.length - 1; i += 2) {
  data1.push(dataset[i]);
  data2.push(dataset[i + 1]);
}
export default {
  name: "PivotSetDataCdn",
  data: () => ({
    pivot: null,
    fields: {
      rows: ["form", "name"],
      columns: [{ id: "when", group: "dateByYear" }],
      values: [
        { id: "oil", method: "max" },
        { id: "oil", method: "sum" },
      ],
    },
    fieldList: [
      { id: "name", label: "Name" },
      { id: "year", label: "Year" },
      { id: "continent", label: "Continent" },
      { id: "form", label: "Form" },
      { id: "gdp", label: "GDP" },
      { id: "oil", label: "Oil" },
      { id: "balance", label: "Balance" },
      { id: "when", label: "When", type: "date", format: "%d/%m/%Y" },
    ],
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js", "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.pivot = new dhx.Pivot(this.$refs.pivot, {
        fields: this.fields,
        fieldList: this.fieldList,
      });
    });
  },
  methods: {
    runSetData(data) {
      if (data === 1) {
        this.pivot.setData(data1);
      }
      if (data === 2) {
        this.pivot.setData(data2);
      }
    },
    restore() {
      this.pivot.setData([]);
    },
  },
  beforeDestroy() {
    if (this.pivot) {
      this.pivot.destructor();
    }
  },
};
</script>
