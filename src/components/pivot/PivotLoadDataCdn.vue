<template>
  <div class="dhx-container_inner">
    <section class="dhx_sample-controls">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="loadCSV()">Load CSV</button>
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="loadJSON()">Load JSON</button>
    </section>
    <div class="dhx_sample-container__widget" ref="pivot"></div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "PivotLoadDataCdn",
  data: () => ({
    pivot: null,
    fields: {
      rows: ["form", "name"],
      columns: ["year", { "id": "when", "group": "dateByQuarter" }],
      values: [{ id: "oil", method: "max" }, { id: "oil", method: "min" }],
    },
    fieldList: [
      {id: "name", label: "Name"},
      {id: "year", label: "Year"},
      {id: "continent", label: "Continent"},
      {id: "form", label: "Form"},
      {id: "gdp", label: "GDP"},
      {id: "oil", label: "Oil"},
      {id: "balance", label: "Balance"},
      {id: "when", label: "When", type: "date", format: "%d/%m/%Y"},
    ],
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js",
      "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.pivot = new dhx.Pivot(this.$refs.pivot, {
        fields: this.fields,
        fieldList: this.fieldList
      });
    });
  },
  methods: {
    loadCSV() {
      // eslint-disable-next-line no-undef
      this.pivot.load("./static/dataset.csv", new dhx.data.CsvDriver({
        names: ["name", "year", "continent", "form", "gdp", "oil", "balance", "when"],
      }));
    },
    loadJSON() {
      this.pivot.load("./static/dataset.json");
    },
  },
  beforeDestroy() {
    if (this.pivot) {
      this.pivot.destructor();
    }
  },
};
</script>
