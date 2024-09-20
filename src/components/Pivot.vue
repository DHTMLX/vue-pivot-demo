<script>
import { Pivot } from "@dhx/trial-pivot";
import "@dhx/trial-pivot/dist/pivot.css";

export default {
    props: ["fields", "dataset"],

    mounted() {
        this.table = new Pivot(this.$refs.container, {
            fields: this.fields,
            data: this.dataset,
            headerShape: {
                collapsible: true
            },
            tableShape: {
                tree: true,
                templates: ["profit", "sales"].reduce((acc, field) => (acc[field] = v => (v ? Math.ceil(v) : ""), acc), {})
            },
            columnShape: {
                autoWidth: {
                    auto: true,
                    columns: {
                        type: true,
                        title: true
                    },
                    firstOnly: false
                }
            },
            config: {
                rows: ["state", "product_type"],
                columns: ["product_line", "type"],
                values: [
                    {
                        field: "profit",
                        method: "sum"
                    },
                    {
                        field: "sales",
                        method: "sum"
                    },
                    {
                        field: "date",
                        method: "min"
                    }
                ]
            }
            // other configuration properties
        });
    },

    unmounted() {
        this.table.destructor();
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
