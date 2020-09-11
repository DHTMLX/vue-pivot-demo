<template>
  <div class="dhx-container_inner events">
    <section class="dhx_sample-controls">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="clearAll()">Clear events</button>
    </section>
    <div class="dhx-events">
      <div class="dhx_sample-container__widget" ref="pivot"></div>
      <div class="dhx_sample-container__sidebar">
        <div class="events-list--element" v-if="isEmpty">
          No events yet
        </div>
        <div class="events-list--element dhx_sample-event" v-else v-for="event in events" :key="event.keyId">
          <p>{{ event.name }}</p>
          <p>{{ event.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
import dataset from "../../../public/static/dataset.json";
export default {
  name: "PivotFooterCdn",
  data: () => ({
    pivot: null,
    isEmpty: true,
    fields: {
      rows: ["form", "name"],
      columns: ["year"],
      values: [
        { id: "oil", method: "count" },
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
    layout: {
      liveReload: false,
    },
    events: [],
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/pivot/pro/edge/pivot.js", "https://cdn.dhtmlx.com/pivot/pro/edge/pivot.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.pivot = new dhx.Pivot(this.$refs.pivot, {
        data: dataset,
        fields: this.fields,
        fieldList: this.fieldList,
        layout: this.layout,
      });

      this.pivot.events.on("fieldClick", (e, id, type) => {
        this.isEmpty = false;
        const keyId = Math.random();
        this.events = [{ keyId, name: "fieldClick", value: `${JSON.stringify(e)}, ${id}, ${type}` }].concat(this.events);
      });
      this.pivot.events.on("applyButtonClick", () => {
        this.isEmpty = false;
        const keyId = Math.random();
        this.events = [{ keyId, name: "applyButtonClick", value: "" }].concat(this.events);
      });
      this.pivot.events.on("change", () => {
        this.isEmpty = false;
        const keyId = Math.random();
        this.events = [{ keyId, name: "change", value: "" }].concat(this.events);
      });
      this.pivot.events.on("filterApply", (field, settings) => {
        this.isEmpty = false;
        const keyId = Math.random();
        this.events = [{ keyId, name: "filterApply", value: `${field}, ${JSON.stringify(settings)}` }].concat(this.events);
      });
    });
  },
  methods: {
    clearAll() {
      this.isEmpty = true;
      this.events.length = 0;
    },
  },
  beforeDestroy() {
    if (this.pivot) {
      this.pivot.destructor();
    }
  },
};
</script>
