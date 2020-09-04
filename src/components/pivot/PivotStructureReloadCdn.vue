<template>
  <div class="dhx-container_inner structure_reload">
    <section class="dhx_sample-controls">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="setConfig(1)">Set first dataset</button>
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="setConfig(2)">Set second dataset</button>
    </section>
    <div class="dhx_sample-container__widget" ref="pivot"></div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
const firstConfig = {
  data: [
    {
      "name": "Belgium",
      "year": 2013,
      "continent": "Europe",
      "form": "Constitutional monarchy",
      "gdp": 476.796,
      "oil": 51.684,
      "balance": -0.623,
      "when": "5/9/2013",
    },
    {
      "name": "Brazil",
      "year": 2014,
      "continent": "South America",
      "form": "Republic",
      "gdp": 881.754,
      "oil": 11.779,
      "balance": 13.984,
      "when": "6/10/2014",
    },
  ],
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
  fields: {
    rows: ["form", "name"],
    columns: ["year"],
    values: [{ id: "oil", method: "max" }, { id: "oil", method: "sum" }],
  },
};
const secondConfig = {
  data: [
    {
      "make_id": "alfa-romeo",
      "make_display": "Alfa Romeo",
      "make_is_common": 1,
      "make_country": "Italy",
    },
    { "make_id": "allard", "make_display": "Allard", "make_is_common": 1, "make_country": "UK" },
    { "make_id": "porsche", "make_display": "Porsche", "make_is_common": 5, "make_country": "Germany" },
    {
      "make_id": "proton",
      "make_display": "Proton",
      "make_is_common": 150,
      "make_country": "Malaysia",
    },
    { "make_id": "reliant", "make_display": "Reliant", "make_is_common": 9, "make_country": "UK" },
  ],
  fieldList: [
    { id: "make_id", label: "Id" },
    { id: "make_display", label: "Name" },
    { id: "make_is_common", label: "Common" },
    { id: "make_country", label: "Country" },
  ],
  fields: {
    rows: ["make_id"],
    columns: ["make_country"],
    values: [{ id: "make_is_common", method: "max" }],
  },
};
export default {
  name: "PivotStructureReloadCdn",
  data: () => ({
    pivot: null,
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js",
      "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.pivot = new dhx.Pivot(this.$refs.pivot, {
        fieldList: [],
				fields: {
					rows: [],
					columns: [],
					values: [],
				},
      });
    });
  },
  methods: {
    resetPivot() {
      this.pivot.setFields({
        rows: [],
        columns: [],
        values: [],
      });
      this.pivot.setData([]);
    },
    setConfig(data) {
      let config;
      if (data === 1) {
        config = firstConfig;
      }
      if (data === 2) {
        config = secondConfig;
      }
      this.resetPivot();
      this.pivot.config.fieldList = config.fieldList;
      this.pivot.setFields(config.fields);
      this.pivot.setData(config.data);
    }
  },
  beforeDestroy() {
    if (this.pivot) {
      this.pivot.destructor();
    }
  },
};
</script>
