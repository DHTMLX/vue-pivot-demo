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
    eventsArray: [
      "scroll",
      "sort",
      "expand",
      "filterChange",
      "beforeResizeStart",
      "resize",
      "afterResizeEnd",
      "cellClick",
      "cellRightClick",
      "cellMouseOver",
      "cellMouseDown",
      "cellDblClick",
      "headerCellClick",
      "footerCellClick",
      "headerCellMouseOver",
      "footerCellMouseOver",
      "headerCellMouseDown",
      "footerCellMouseDown",
      "headerCellDblClick",
      "footerCellDblClick",
      "headerCellRightClick",
      "footerCellRightClick",
      "beforeEditStart",
      "afterEditStart",
      "beforeEditEnd",
      "afterEditEnd",
      "beforeKeyDown",
      "afterKeyDown",
    ],
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

      this.eventsArray.forEach(event => {
        this.pivot.grid.events.on(event, (...args) => {
          this.isEmpty = false;
          const keyId = Math.random();
          args = args.map(item => JSON.stringify(item));
          this.events = [{ keyId, name: event, value: `${args}` }].concat(this.events);
        });
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
