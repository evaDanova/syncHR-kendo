<template>
  <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap">
    <div v-for="(card, index) in cards" :key="index">
      <card class="card-box">
          <cardHeader>
              <cardTitle class="size-18 text-green text-left">{{card.headerTitle}}</cardTitle>
          </cardHeader>
        <cardBody class="k-hbox" style="background: transparent">
          <div class="card no-border">
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
                    <div :style="{ width: 'auto' }" :class="size-14">
                      <upload
                        :class="size-14"
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
                      <div class="k-form-hint size-14">
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
        </cardBody>
      </card>
    </div>
  </div>
</template>

<script>
import { Upload } from "@progress/kendo-vue-upload";
import { Input } from "@progress/kendo-vue-inputs";
import { Button } from "@progress/kendo-vue-buttons";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "@progress/kendo-vue-layout";

const cardsData = [
  {
   
    headerTitle: "Some Title 1",
  },
  {
  
    headerTitle: "Some Title 2",
  },
  {
    
    headerTitle: "Some Title 3",
  },
];

export default {
  components: {
    card: Card,
    cardHeader: CardHeader,
    cardBody: CardBody,
    cardTitle: CardTitle,

    "k-button": Button,
    "k-input": Input,
    upload: Upload,
  },
  data: function () {
    return {
      cards: cardsData,
    };
  },
  methods: {},
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



</style>