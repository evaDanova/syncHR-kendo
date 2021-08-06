<template>
  <div>
    <div
      v-if="!isMobile"
      class="
        header-desctop
        d-flex
        flex-row
        justify-content-between
        align-items-center
        px-4
      "
    >
      <div
        class="
          header-left-pat
          d-flex
          flex-row
          justify-content-start
          align-items-center
        "
      >
        <img class="logo me-4" src="img/logo.png" />
        <div
          class="
            search-holder
            d-flex
            flex-row
            justify-content-start
            align-items-center
          "
        >
          <span class="k-icon k-i-search text-green size-24"></span>
          <kendo-autocomplete
            :data-source="dataSourceArray"
            :placeholder="'Search...'"
          >
          </kendo-autocomplete>
        </div>
      </div>
      <div class="header-right-pat">
        <kendo-menu @select="onSelect">
          <li class="me-2">
            <span class="k-icon k-i-user text-dark-blue size-20"></span>
            <span class="size-14 text-dark-blue">Item 1</span>
            <ul>
              <li>
                Sub Item 1
                <ul>
                  <li>Sub Item 1.1</li>
                  <li>Sub Item 1.2</li>
                  <li>Sub Item 1.3</li>
                </ul>
              </li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
            </ul>
          </li>
          <li class="me-2">
            <span class="k-icon k-i-notification text-dark-blue size-20"></span>
             <span class="size-14 text-dark-blue">Item 2</span>
            <ul>
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
            </ul>
          </li>
          <li>
            <span class="k-icon k-i-gears text-dark-blue size-20"></span> 
             <span class="size-14 text-dark-blue">Item 3</span>
            <ul>
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
            </ul>
          </li>
        </kendo-menu>
      </div>
    </div>
    <div
      v-if="isMobile"
      class="header-mobile fixed-bottom shadow-green back-white py-3 px-4"
    >
      <div
        class="
          menu-btn-mobile
          d-flex
          flex-row
          justify-content-center
          align-items-center
          full-width
        "
      >
        <div class="col-md-2 mx-4">
          <button
            class="
              d-flex
              flex-column
              justify-content-start
              align-items-center
            "
            @click="alert"
          >
            <span class="k-icon k-i-user text-dark-blue size-24"></span>
            <span>Item 1</span>
          </button>
        </div>
        <div class="col-md-2 mx-4">
          <button
            class="
              d-flex
              flex-column
              justify-content-start
              align-items-center
            "
            @click="alert"
          >
            <span class="k-icon k-i-notification text-dark-blue size-24"></span>
            <span>Item 2</span>
          </button>
        </div>
        <div class="col-md-2 mx-4">
          <button
            class="
              d-flex
              flex-column
              justify-content-start
              align-items-center
            "
            @click="alert"
          >
            <span class="k-icon k-i-gears text-dark-blue size-24"></span>
            <span>Item 3</span>
          </button>
        </div>
        <div class="col-md-2 mx-4">
          <button
            class="
              d-flex
              flex-column
              justify-content-start
              align-items-center
              
            "
            @click="alert"
          >
            <span class="k-icon k-i-grid-layout text-dark-blue size-24"></span>
            <span>Item 4</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Menu, MenuItem } from "@progress/kendo-layout-vue-wrapper";
import { AutoComplete } from "@progress/kendo-dropdowns-vue-wrapper";
import { KendoDataSource } from "@progress/kendo-datasource-vue-wrapper";
import { Dialog, DialogAction } from "@progress/kendo-dialog-vue-wrapper";

export default {
  components: {
    "kendo-menu": Menu,
    "kendo-menu-item": MenuItem,
    "kendo-autocomplete": AutoComplete,
    "kendo-datasource": KendoDataSource,
    "kendo-dialog": Dialog,
    "kendo-dialog-action": DialogAction,
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    },
  },
  methods: {
    onSelect: function (e) {
      var currentItemText = $(e.item.firstChild).text().trim();
      console.log(currentItemText + " clicked.");
    },
    alert() {
      kendo.alert("This is a Kendo UI Alert message.");
    },
  },
  data: function () {
    return {
      autocompleteValue: "",
      dataSourceArray: [
        "Albania",
        "Andorra",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia & Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "Netherlands",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "United Kingdom",
        "Vatican City",
      ],
    };
  },
};
</script>
<style>

</style>