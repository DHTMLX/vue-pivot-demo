<template>
  <div class="dhx-container_inner export">
    <section class="dhx_sample-controls">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="runExport('xlsx')">Export xlsx</button>
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="runExport('csv')">Export csv</button>
    </section>
    <div class="dhx_sample-container__widget" ref="pivot"></div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
import dataset from "../../../public/static/dataset.json";
export default {
  name: "PivotExportCdn",
  data: () => ({
    pivot: null,
    fields: {
      rows: ["form", "year"],
      columns: [{"id": "when", "group": "dateByQuarter"}],
      values: [{id: "oil", method: "max"}, {id: "oil", method: "min"}],
    },
    mark: {
      min: "min_cell",
      max: "max_cell",
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
        data: dataset,
        fields: this.fields,
        fieldList: this.fieldList,
        mark: this.mark
      });
    });
  },
  methods: {
    runExport(type) {
      if (type === "xlsx") {
        this.pivot.export.xlsx({
          url: "//export.dhtmlx.com/excel",
        });
      }
      if (type === "csv") {
        this.pivot.export.csv();
      }
    }
  },
  beforeDestroy() {
    if (this.pivot) {
      this.pivot.destructor();
    }
  },
};
</script>
