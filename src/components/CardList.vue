<template>
  <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap">
    <div v-for="(card, index) in cards" :key="index">
      <card class="card-box">
        <cardActions
          class="
            d-flex
            justify-content-between
            k-card-actions k-card-actions-start k-card-actions-k-card-horizontal
          "
        >
          <div class="d-flex flex-row align-items-center">
            <span class="k-icon k-i-information k-i-info"></span>
            <div class="size-18 text-green text-left p-2">Direct Deposit</div>
          </div>
        </cardActions>
        <cardBody class="k-hbox" style="background: transparent">
          <kendo-listview
            :bordered=false
            :data-source="card.dataitems"
            :template="`<div class='rounded-3 full-width py-4 px-2 border mb-4 d-flex flex-row align-items-center justify-content-between'><div class='flex-column d-flex align-items-start'><div class'size16 text-dark-gray'>#:title#</div><div class='size12 text-very-light-gray'>Deposit from  #:subTitle#</div></div><div class='size16 text-green'>+$ #:sum#</div></div>`"
          >
          </kendo-listview>
        </cardBody>
      </card>
    </div>
  </div>
</template>

<script>
import {
  Card,
  CardHeader,
  CardBody,
} from "@progress/kendo-vue-layout";
import { ListView } from "@progress/kendo-listview-vue-wrapper";
const cardsData = [
 
  {
    dataitems: [
      { title: "Savings", subTitle: '27.09.2021', sum: '12 43434' }, 
      { title: "Savings", subTitle: '07.06.2021', sum: '17 657' },
      { title: "Savings", subTitle: '06.05.2021', sum: '2 43434'  }
      ],
  },
  {
    dataitems: [
      { title: "Savings", subTitle: '03.09.2021', sum: '12 43434' }, 
      { title: "Savings", subTitle: '08.06.2021', sum: '17 657' },
      { title: "Savings", subTitle: '05.05.2021', sum: '2 43434'  }
      ],
  },
   {
    dataitems: [
      { title: "Savings", subTitle: '03.09.2021', sum: '12 43434' }, 
      { title: "Savings", subTitle: '08.06.2021', sum: '17 657' },
      { title: "Savings", subTitle: '05.05.2021', sum: '2 43434'  }
      ],
  },
   {
    dataitems: [
      { title: "Savings", subTitle: '03.09.2021', sum: '12 43434' }, 
      { title: "Savings", subTitle: '08.06.2021', sum: '17 657' },
      { title: "Savings", subTitle: '05.05.2021', sum: '2 43434'  }
      ],
  },
];

export default {
  components: {
    card: Card,
    cardHeader: CardHeader,
    cardBody: CardBody,
    "kendo-listview": ListView,
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
.k-listview.k-listview-bordered{
  border: 0px;
}
.k-listview div[role="listitem"]{
  width: 100%;
  border: 1px solid #ccc;
}
</style>