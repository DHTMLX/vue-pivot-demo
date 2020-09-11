import PivotInitCdn from "../components/pivot/PivotInitCdn";
import PivotLoadDataCdn from "../components/pivot/PivotLoadDataCdn";
import PivotExportCdn from "../components/pivot/PivotExportCdn";
import PivotSetDataCdn from "../components/pivot/PivotSetDataCdn";
import PivotStructureReloadCdn from "../components/pivot/PivotStructureReloadCdn";
import PivotCustomMarkCdn from "../components/pivot/PivotCustomMarkCdn";
import PivotCustomFormattingCdn from "../components/pivot/PivotCustomFormattingCdn";
import PivotFooterCdn from "../components/pivot/PivotFooterCdn";
import PivotEventsCdn from "../components/pivot/PivotEventsCdn";
import PivotGridEventsCdn from "../components/pivot/PivotGridEventsCdn";

import "../index.css";

export default {
  title: "Pivot",
};

export const initialization = () => ({
  components: { PivotInitCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Pivot initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-pivot-demo/blob/master/src/components/pivot/PivotInitCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__initialization.html#initializingpivot"
            target="_blank"
          >
            Initialization.
          </a>
          <a
            href="https://docs.dhtmlx.com/pivot/guides__loading_data.html#loadinginlinedata"
            target="_blank"
          >
            Loading Inline Data
          </a>
        </div>
      </div>
      <PivotInitCdn></PivotInitCdn>
    </section>
  `,
});

export const loadingData = () => ({
  components: { PivotLoadDataCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Load data in Json and Csv formats</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-pivot-demo/blob/master/src/components/pivot/PivotLoadDataCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__loading_data.html#externaldataloading"
            target="_blank"
          >
            External Data Loading
          </a>
        </div>
      </div>
      <PivotLoadDataCdn></PivotLoadDataCdn>
    </section>
  `,
});

export const exportData = () => ({
  components: { PivotExportCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>You can export Pivot to the Excel or CSV format</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-pivot-demo/blob/master/src/components/pivot/PivotExportCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__export.html"
            target="_blank"
          >
            Exporting Pivot
          </a>
        </div>
      </div>
      <PivotExportCdn></PivotExportCdn>
    </section>
  `,
});

export const setData = () => ({
  components: { PivotSetDataCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>You can load inline data into Pivot after initialization via the setData method</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-pivot-demo/blob/master/src/components/pivot/PivotSetDataCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__loading_data.html#loadinginlinedata"
            target="_blank"
          >
            Loading Inline Data
          </a>
        </div>
      </div>
      <PivotSetDataCdn></PivotSetDataCdn>
    </section>
  `,
});

export const structureReload = () => ({
  components: { PivotStructureReloadCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Structure reload</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-pivot-demo/blob/master/src/components/pivot/PivotStructureReloadCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/api__pivot_setfields.html"
            target="_blank"
          >
            SetFields.
          </a>
          <a
            href="https://docs.dhtmlx.com/pivot/api__pivot_setdata.html"
            target="_blank"
          >
            SetData
          </a>
        </div>
      </div>
      <PivotStructureReloadCdn></PivotStructureReloadCdn>
    </section>
  `,
});

export const customMark = () => ({
  components: { PivotCustomMarkCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>You can specify your own function that will define the logic of applying styles to cells with certain values</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-pivot-demo/blob/master/src/components/pivot/PivotCustomMarkCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__customization.html#conditionalformattingofcells"
            target="_blank"
          >
            Conditional Formatting of Cells.
          </a>
          <a
            href="https://docs.dhtmlx.com/pivot/api__pivot_mark_config.html"
            target="_blank"
          >
            Mark
          </a>
        </div>
      </div>
      <PivotCustomMarkCdn></PivotCustomMarkCdn>
    </section>
  `,
});

export const customFormatting = () => ({
  components: { PivotCustomFormattingCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>It is possible to set custom format for values of cells</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-pivot-demo/blob/master/src/components/pivot/PivotCustomFormattingCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__customization.html#customformatforcells"
            target="_blank"
          >
            Custom Format for Cells.
          </a>
          <a
            href="https://docs.dhtmlx.com/pivot/api__pivot_customformat_config.html"
            target="_blank"
          >
            CustomFormat
          </a>
        </div>
      </div>
      <PivotCustomFormattingCdn></PivotCustomFormattingCdn>
    </section>
  `,
});

export const footer = () => ({
  components: { PivotFooterCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>You can specify a footer row for the grid of pivot to show a total result of the operation set for a column</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-pivot-demo/blob/master/src/components/pivot/PivotFooterCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/guides__configuration.html#totaloperationpercolumn"
            target="_blank"
          >
            Total Operation per Column
          </a>
        </div>
      </div>
      <PivotFooterCdn></PivotFooterCdn>
    </section>
  `,
});

export const events = () => ({
  components: { PivotEventsCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Pivot events</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-pivot-demo/blob/master/src/components/pivot/PivotEventsCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/api__refs__pivot_events.html"
            target="_blank"
          >
            Events
          </a>
        </div>
      </div>
      <PivotEventsCdn></PivotEventsCdn>
    </section>
  `,
});

export const gridEvents = () => ({
  components: { PivotGridEventsCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Grid events</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-pivot-demo/blob/master/src/components/pivot/PivotGridEventsCdn.vue"
          target="_blank"
        >
          Source code
        </a>
        <div>
          Check documentation:
          <a
            href="https://docs.dhtmlx.com/pivot/api__refs__grid_events.html"
            target="_blank"
          >
            Grid Events
          </a>
        </div>
      </div>
      <PivotGridEventsCdn></PivotGridEventsCdn>
    </section>
  `,
});
