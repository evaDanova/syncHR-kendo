<template>
  <div>
    <span v-if="!visibleDialog">
      <button class="k-button" @click="toggleDialog">Open Dialog</button>
    </span>
    <k-dialog
      v-if="visibleDialog"
      :title="'Please confirm'"
      @close="toggleDialog"
    >
      <div class="col-12 col-md-12 example-col mb-2">
        <div class="d-flex flex-row align-items-center flex-wrap">
          <p class="text-green text-left mr8">Date Time Picker</p>
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
        "
      >
        <div class="d-flex flex-row align-items-center flex-wrap mb-2">
          <p class="text-green text-left mr8">Date Input</p>
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
        "
      >
        <p class="text-green text-left">Time Picker</p>
        <timepicker />
      </div>

      <div
        class="
          col-12 col-md-12
          example-col
          d-flex
          flex-column
          align-items-start
        "
      >
        <p class="text-green text-left">Input</p>
        <k-input :label="'First name'"></k-input>
      </div>

      <div
        class="
          col-12 col-md-12
          example-col
          d-flex
          flex-column
          align-items-start
        "
      >
        <p class="text-green text-left">NumericTextBox</p>
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
        "
      >
        <p class="text-green text-left">MaskedTextBox</p>
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
        "
      >
        <p class="text-green text-left">Slider</p>
        <slider :buttons="true" :step="1" :default-value="7" :min="1" :max="10">
        </slider>
      </div>
       <div class="col-xs-12 col-sm-7 example-col">
            <p>ComboBox</p>
            <combobox :data-items='sports' :default-value="'Basketball'" ></combobox>
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
<style scoped>
</style>