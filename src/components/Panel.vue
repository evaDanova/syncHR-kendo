<template>
  <div class="flex-row flex-justify-content-center">
    <div class="card-box shadow horizontal p12">
      <div class="card-header flex-row flex-align-items-center mb8">
        <dropdownlist
          class="k-icon k-i-gear"
          :data-items="sports"
          :default-item="'ffsff'"
        >
        </dropdownlist>

        <div class="text-green size-18">Title</div>
        <span class="k-icon k-i-calendar"></span>
        <toolbar>
          <toolbar-item
            type="splitButton"
            text="Insert"
            :menu-buttons="[
              { text: 'Insert above', icon: 'insert-up' },
              { text: 'Insert between', icon: 'insert-middle' },
              { text: 'Insert below', icon: 'insert-down' },
            ]"
          >
          </toolbar-item>
        </toolbar>
      </div>
      <div class="flex-row flex-justify-content-space full-width">
        <div
          class="profile-picture"
          style="background-image: url('../../img/profilePicture.png')"
        ></div>
        <div class="flex-column card-info">
          <div class="text-light-gray size-14">Subtitle</div>
          <div class="text-dark-gray size-16 mb4 bold">Text area</div>
          <div class="text-light-gray size-14">Subtitle</div>
          <div class="text-dark-gray size-16 bold">Text area</div>
        </div>
      </div>
    </div>
    <div class="card-box shadow horizontal p12">
      <div class="card-header flex-row flex-align-items-center mb8">
        <toolbar>
          <toolbar-item
            type="splitButton"
            text="Insert"
            :menu-buttons="[
              { text: 'Insert above', icon: 'insert-up' },
              { text: 'Insert between', icon: 'insert-middle' },
              { text: 'Insert below', icon: 'insert-down' },
            ]"
          >
          </toolbar-item>
        </toolbar>
        <div class="text-green size-18">Title</div>
      </div>
      <div class="flex-row flex-justify-content-space full-width">
        <div
          class="profile-picture"
          style="background-image: url('../../img/profilePicture2.png')"
        ></div>
        <div class="flex-column card-info">
          <div class="text-light-gray size-14">Subtitle</div>
          <div class="text-dark-gray size-16 mb4 bold">Text area</div>
          <div class="text-light-gray size-14">Subtitle</div>
          <div class="text-dark-gray size-16 bold">Text area</div>
        </div>
      </div>
    </div>
    <div class="card-box shadow horizontal p12">
      <div class="card-header flex-row flex-align-items-center mb8">
        <div class="text-green size-18">Direct Deposit</div>
      </div>
      <div class="card">
        <div class="card-block">
          <form class="k-form k-form-horizontal" @submit="handleSubmit">
            <fieldset class="no-border flex-column">
              <div class="k-form-field">
                <label class="k-label k-form-label">Name:</label>
                <k-input
                  :name="'username'"
                  :style="{ width: '100%' }"
                  :pattern="'[A-Za-z]+'"
                  :min-length="2"
                  :required="true"
                >
                </k-input>
              </div>
              <div class="k-form-field">
                <label class="k-label k-form-label">Email:</label>
                <k-input
                  :name="'email'"
                  :type="'email'"
                  :style="{ width: '100%' }"
                  :required="true"
                />
              </div>
              <div class="k-form-field">
                <label class="k-label k-form-label">CV:</label>
                <div :style="{ width: '100%' }">
                  <upload
                    :files="files"
                    :batch="false"
                    :multiple="true"
                    :restrictions="{
                      allowedExtensions: ['.pdf', '.docx'],
                    }"
                    @add="onAdd"
                    @remove="onRemove"
                    @progress="onProgress"
                    @statuschange="onStatusChange"
                    :with-credentials="false"
                    :save-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/save'"
                    :remove-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'"
                  />
                  <div class="k-form-hint">
                    Accepted files: <strong> PDF and DOCX</strong>
                  </div>
                </div>
              </div>
            </fieldset>
            <div class="mt12">
              <k-button :primary="true" type="submit"
                >Submit Application</k-button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      v-if="success"
      class="alert alert-success"
      :style="{ position: 'absolute' }"
    >
      Form submitted!
    </div>
    <div
      v-if="addOneValidFile"
      class="alert alert-warning"
      :style="{ position: 'absolute' }"
    >
      Upload at least one valid file.
    </div>
  </div>
</template>



<script lang="ts">
import { ToolBar, ToolBarItem } from "@progress/kendo-buttons-vue-wrapper";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

import { Upload } from "@progress/kendo-vue-upload";
import { Input } from "@progress/kendo-vue-inputs";
import { Button } from "@progress/kendo-vue-buttons";

export default {
  name: "App",
  components: {
    toolbar: ToolBar,
    "toolbar-item": ToolBarItem,

    dropdownlist: DropDownList,

    "k-button": Button,
    "k-input": Input,
    upload: Upload,
  },
  data() {
    return {
      addOneValidFile: false,
      success: false,
      files: [],
      sports: ["Basketball", "Football", "Tennis", "Volleyball"],
    };
  },
  methods: {
    // hasOneValidFile() {
    //   return this.files.some((f) => f.status === 4);
    // },
    // onAdd(event) {
    //   this.files = event.newState;
    // },
    // onRemove(event) {
    //   this.files = event.newState;
    // },
    // onProgress(event) {
    //   this.files = event.newState;
    // },
    // onStatusChange(event) {
    //   this.files = event.newState;
    // },
    // handleSubmit(event) {
    //   event.preventDefault();
    //   this.addOneValidFile = !this.hasOneValidFile();
    //   setTimeout(() => {
    //     this.addOneValidFile = false;
    //   }, 3000);

    //   if (!this.addOneValidFile) {
    //     this.success = this.hasOneValidFile();
    //     setTimeout(() => {
    //       this.success = false;
    //     }, 3000);
    //   }
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-box {
  border-radius: 18px;
  box-sizing: border-box;
  background: #fff;
  width: 335px;
  margin: 10px;
}
.horizontal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.profile-picture {
  width: 90px;
  height: 90px;
  display: block;
  border-radius: 50%;
  border: 4px solid #81be41;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.card-info {
  width: calc(100% - 90px);
  padding-left: 15px;
}
</style>

