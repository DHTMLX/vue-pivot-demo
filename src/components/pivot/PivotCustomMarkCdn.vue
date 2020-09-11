<template>
  <div class="dhx_sample-container__widget" ref="pivot"></div>
</template>

<script>
import fromCDN from "from-cdn";
import dataset from "../../../public/static/dataset.json";
export default {
  name: "PivotCustomMarkCdn",
  data: () => ({
    pivot: null,
    fields: {
      rows: ["form", "year"],
      columns: [{ id: "when", group: "dateByQuarter" }],
      values: [
        { id: "oil", method: "max" },
        { id: "oil", method: "min" },
      ],
    },
    mark: function (cell, columnData, row, column) {
      if (column.method === "max") {
        var max = Math.max.apply(null, columnData);
        if (max === parseFloat(cell)) {
          return "biggestMaxCell";
        }
        return "customMaxCell";
      }
      if (cell < 10 && cell !== null) {
        return "mark";
      }
      return false;
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
        data: dataset,
        fields: this.fields,
        fieldList: this.fieldList,
        mark: this.mark,
      });
    });
  },
  beforeDestroy() {
    if (this.pivot) {
      this.pivot.destructor();
    }
  },
};
</script>
