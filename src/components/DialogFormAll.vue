<template>
  <div class="col-md-2 col-sm-3 col-3 mx-auto">
    <span v-if="!visibleDialog">
      <button class="k-button" @click="toggleDialog">Open Dialog</button>
    </span>
    <k-dialog
      :width="350"
      :height="600"
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
  DateTimePicker,
} from "@progress/kendo-vue-dateinputs";
import {
  Input,
  Slider,
} from "@progress/kendo-vue-inputs";
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import { Button  } from '@progress/kendo-vue-buttons';
export default {
  components: {
    "k-dialog": Dialog,
    datetimepicker: DateTimePicker,
    "k-input": Input,
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

</style>