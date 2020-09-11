<template>
  <div class="dhx_sample-container__widget" ref="pivot"></div>
</template>

<script>
import fromCDN from "from-cdn";
import dataset from "../../../public/static/dataset.json";
export default {
  name: "PivotCustomFormattingCdn",
  data: () => ({
    pivot: null,
    fields: {
      rows: ["form", "name"],
      columns: ["year"],
      values: [
        { id: "oil", method: "count" },
        { id: "gdp", method: "sum" },
      ],
    },
    fieldList: [
      { id: "name", label: "Name" },
      { id: "year", label: "Year" },
      { id: "continent", label: "Continent" },
      { id: "form", label: "Form" },
      {
        id: "gdp",
        label: "GDP",
        cellTemplate: function (val) {
          return "&euro; " + val;
        },
      },
      { id: "oil", label: "Oil" },
      { id: "balance", label: "Balance" },
      { id: "when", label: "When", type: "date", format: "%d/%m/%Y" },
    ],
    customFormat: function (cellValue, method) {
      if (method === "count") {
        return cellValue;
      }
      return cellValue.toLocaleString("de");
    },
    layout: {
      footer: true,
    },
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js", "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.pivot = new dhx.Pivot(this.$refs.pivot, {
        data: dataset,
        fields: this.fields,
        fieldList: this.fieldList,
        customFormat: this.customFormat,
        layout: this.layout,
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
