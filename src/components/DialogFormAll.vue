<template>
  <div class="col-md-2 mx-auto">
    <span v-if="!visibleDialog">
      <button class="k-button" @click="toggleDialog">Open Dialog</button>
    </span>
    <k-dialog
      :width="400"
      :height="500"
      v-if="visibleDialog"
      :title="'Please confirm'"
      @close="toggleDialog"
    >
      <div class="col-12 col-md-12 example-col mb-4 mt-4">
        <div class="d-flex flex-row align-items-center flex-wrap">
          <label class="text-green text-left me-2 mb-1">Date Time Picker</label>
          <datetimepicker />
        </div>
      </div>

      <div
        class="
          col-12 col-md-12
          example-col
          d-flex
          flex-column
          align-items-start
          mb-4 mt-4
        "
      >
        <div class="d-flex flex-row align-items-center flex-wrap col-12">
          <label class="text-green text-left me-2 mb-1">Date Input</label>
          <date-input v-model="value"></date-input>
        </div>
      </div>
      <div
        class="
          col-12 col-md-12
          example-col
          d-flex
          flex-column
          align-items-start
          mb-4 mt-4
        "
      >
        <label class="text-green text-left mb-1">Time Picker</label>
        <timepicker />
      </div>

      <div
        class="
          col-12 col-md-12
          example-col
          d-flex
          flex-column
          align-items-start
          mb-4 mt-4
        "
      >
        <label class="text-green text-left mb-1">Input</label>
        <k-input :placeholder="'First name'"></k-input>
      </div>

      <div
        class="
          col-12 col-md-12
          example-col
          d-flex
          flex-column
          align-items-start
          mb-4 mt-4
        "
      >
        <label class="text-green text-left mb-1">NumericTextBox</label>
        <numerictextbox :default-value="123.45" :format="'c2'">
        </numerictextbox>
      </div>

      <div
        class="
          col-12 col-md-12
          example-col
          d-flex
          flex-column
          align-items-start
          mb-4 mt-4
        "
      >
        <label class="text-green text-left mb-1">MaskedTextBox</label>
        <maskedtextbox :mask="'9-000'" :default-value="'_-___'">
        </maskedtextbox>
      </div>

      <div
        class="
          col-12 col-md-12
          example-col
          d-flex
          flex-column
          align-items-start
          mb-4 mt-4
        "
      >
        <label class="text-green text-left mb-1">Slider</label>
        <slider :buttons="true" :step="1" :default-value="7" :min="1" :max="10">
        </slider>
      </div>
       <div class="col-12 col-md-12
          example-col
          d-flex
          flex-column
          align-items-start
          mb-4 mt-4">
            <label class="text-green text-left mb-1">ComboBox</label>
            <combobox :data-items='sports' :default-value="'Basketball'" ></combobox>
        </div>
          <div class="example-col mt-5">
              <k-button :primary="true"
                :icon="'check'" 
              >Save</k-button>
            </div>
    </k-dialog>
  </div>
</template>
<script>
import { Dialog } from "@progress/kendo-vue-dialogs";
import {
  DateInput,
  DateTimePicker,
  TimePicker,
} from "@progress/kendo-vue-dateinputs";
import {
  NumericTextBox,
  Input,
  MaskedTextBox,
  Slider,
} from "@progress/kendo-vue-inputs";
import { AutoComplete, ComboBox, DropDownList, MultiSelect } from '@progress/kendo-vue-dropdowns';
import { Button  } from '@progress/kendo-vue-buttons';
export default {
  components: {
    "k-dialog": Dialog,
    datetimepicker: DateTimePicker,
    "date-input": DateInput,
    timepicker: TimePicker,
    "k-input": Input,
    numerictextbox: NumericTextBox,
    maskedtextbox: MaskedTextBox,
    slider: Slider,
    'combobox': ComboBox,
    'k-button': Button,
  },
  data: function () {
    return {
      visibleDialog: false,
      sports: ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball" ],
    };
  },
  methods: {
    toggleDialog() {
      this.visibleDialog = !this.visibleDialog;
    },
  },
};
</script>
<style>
/* fix hover btn icons kendo - need only for big border-radius*/
 .k-link {
  border-radius: 0 0.625rem 0.625rem 0;
}
.k-link-increase{
  border-radius: 0 0.625rem 0 0;
}
.k-link-decrease{
  border-radius: 0 0 0.625rem 0;
} 


/* fix align btn icons kendo - need only for big border-radius*/
/* .k-icon{
 margin-right: 2px; 
} */


/* fix color btn arrow icons kendo */
.k-button .k-icon.k-i-arrow-e,
.k-button .k-icon.k-i-arrow-w{
  color: #fff;
}

/* fix height field kendo */
.k-widget input,
.k-widget select,
.k-numeric-wrap,
.k-dropdown-wrap,
.k-widget  .k-select{
  height: 44px;
  font-size: 16px;
  box-sizing: border-box;
} 
.k-clear-value{
    height: calc( 1.5rem + 1.2rem);
}

/* fix 100% width for form field */
.k-datepicker,
.k-datetimepicker,
 .k-timepicker,
.k-dateinput,
.k-textbox,
.k-combobox,
.k-slider-horizontal,
.k-maskedtextbox,
.k-numerictextbox,
.k-button{
  width: 100%;
}
</style>