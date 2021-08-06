<template>
  <div class="main-container-width">
    <kendo-grid v-if="!isMobile" :data-source="localDataSources">
      <kendo-grid-column
        :field="'ProductID'"
        :title="'ID'"
        :width="40"
      ></kendo-grid-column>
      <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
      <kendo-grid-column
        :field="'UnitPrice'"
        :title="'Unit Price'"
        :width="120"
        :format="'{0:c}'"
      ></kendo-grid-column>
      <kendo-grid-column
        :field="'UnitsInStock'"
        :title="'Units In Stock'"
        :width="120"
      ></kendo-grid-column>
      <kendo-grid-column
        :field="'Discontinued'"
        :width="120"
      ></kendo-grid-column>
    </kendo-grid>
<div v-if="isMobile" class="col-md-10 col-10 col-sm-10 mx-auto">
    <kendo-panelbar v-for="(localData, index) in localDataSources" :key="index">
      <li>
        <span
          class="
            rounded-3
            full-width
            py-4
            px-2
            d-flex
            flex-row
            align-items-center
            justify-content-between
          "
        >
          <span class="flex-column d-flex align-items-start">
            <span class="size-16 text-dark-gray d-flex flex-column align-items-start">
              Product Name:<strong class="size-18 text-uppercase fw-bolder"> {{ localData.ProductName }}</strong>
            </span>
          </span>
          <span class="size-16 text-green d-flex flex-column align-items-start">
            Product ID:<strong class="size-18"> {{ localData.ProductID }}</strong>
          </span>
        </span>
        <ul>
          <li>Unit Price: <strong>{{ localData.UnitPrice }}</strong></li>
          <li>Units In Stock: <strong>{{ localData.UnitsInStock }}</strong></li>
          <li>Discontinued: <strong>{{ localData.Discontinued }}</strong></li>
        </ul>
      </li>
    </kendo-panelbar>
</div>

 
  </div>
</template>

<script>
import { Grid, GridColumn } from "@progress/kendo-grid-vue-wrapper";
import { ListView } from "@progress/kendo-listview-vue-wrapper";
import { PanelBar } from "@progress/kendo-layout-vue-wrapper";

const localDataSource = [
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18,
          UnitsInStock: 39,
          Discontinued: false,
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitPrice: 17,
          UnitsInStock: 40,
          Discontinued: false,
        },
        {
          ProductID: 3,
          ProductName: "Aniseed Syrup",
          UnitPrice: 10,
          UnitsInStock: 13,
          Discontinued: false,
        },
        {
          ProductID: 4,
          ProductName: "Chef Anton's Cajun Seasoning",
          UnitPrice: 22,
          UnitsInStock: 53,
          Discontinued: false,
        },
        {
          ProductID: 5,
          ProductName: "Chef Anton's Gumbo Mix",
          UnitPrice: 21.35,
          UnitsInStock: 0,
          Discontinued: true,
        },
        {
          ProductID: 6,
          ProductName: "Grandma's Boysenberry Spread",
          UnitPrice: 25,
          UnitsInStock: 120,
          Discontinued: false,
        },
      ];

export default {
  components: {
    "kendo-grid": Grid,
    "kendo-grid-column": GridColumn,
    "kendo-listview": ListView,
    "kendo-panelbar": PanelBar,
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    },
  },
  
  methods: {},
  data: function () {
    return {
        localDataSources: localDataSource,
  
    };
  },
};
</script>
<style>

</style>