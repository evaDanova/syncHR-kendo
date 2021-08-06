<template>
  <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap">
    <div v-for="(card, index) in cards" :key="index">
      <card class="card-box">
        <cardActions class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <span class="k-icon k-i-information k-i-info"></span>
            <div class="size-18 text-green text-left p-2">Contact</div>
          </div>
          <div class="d-flex justify-content-between">
            <button class="k-button k-flat">
              <span
                :class="
                  card.postLiked
                    ? 'k-icon k-i-heart'
                    : 'k-icon k-i-heart-outline'
                "
              />
            </button>
            <button class="k-button k-flat">
              <span class="k-icon k-i-comment" />
            </button>
            <button class="k-button k-flat">
              <span class="k-icon k-i-share" />
            </button>
          </div>
          <span style="font-size: 13px; align-self: center; color: #656565">
            {{ card.postLikes }} likes
          </span>
        </cardActions>
        <cardBody class="k-hbox" style="background: transparent">
          <kendo-avatar type="image" size="large" shape="circle">
            <img class="profile-picture" :src="card.thumbnailSrc" />
          </kendo-avatar>
          <div class="card-info">
            <cardTitle class="text-light-gray size-14 mb-0 text-left">
              {{ card.headerTitle }}
            </cardTitle>
            <cardSubtitle class="text-dark-gray size-16 mb-1 bold text-left">
              {{ card.headerSubtitle }}
            </cardSubtitle>
            <cardTitle class="text-light-gray size-14 mb-0 text-left">
              {{ card.headerTitle1 }}
            </cardTitle>
            <cardSubtitle class="text-dark-gray size-16 bold text-left">
              {{ card.headerSubtitle1 }}
            </cardSubtitle>
          </div>
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
  CardTitle,
  CardSubtitle,
  CardImage,
  CardActions,
  Avatar,
} from "@progress/kendo-vue-layout";

const cardsData = [
  {
    thumbnailSrc: "img/image1.jpg",
    headerTitle: "bg_traditions",
    headerSubtitle: "Bulgaria, Europe",
    headerTitle1: "bg_traditions",
    headerSubtitle1: "Bulgaria, Europe",
    postLiked: false,
    postLikes: 174,
  
  },
  {
    thumbnailSrc: "img/image2.jpg",
    headerTitle: "bg_mountains",
    headerSubtitle: "Bulgaria, Europe",
    headerTitle1: "bg_mountains",
    headerSubtitle1: "Bulgaria, Europe",
    postLiked: false,
    postLikes: 962,
  
  },
  {
    thumbnailSrc: "img/image3.jpg",
    headerTitle: "bg_mountains",
    headerSubtitle: "Bulgaria, Europe",
    headerTitle1: "bg_mountains",
    headerSubtitle1: "Bulgaria, Europe",
    postLiked: true,
    postLikes: 962,
  
  },
  {
    thumbnailSrc: "img/image4.jpg",
    headerTitle: "bg_mountains",
    headerSubtitle: "Bulgaria, Europe",
    headerTitle1: "bg_mountains",
    headerSubtitle1: "Bulgaria, Europe",
    postLiked: true,
    postLikes: 962,
  
  },
];

export default {
  components: {
    card: Card,
    cardHeader: CardHeader,
    cardBody: CardBody,
    cardTitle: CardTitle,
    cardSubtitle: CardSubtitle,
    cardImage: CardImage,
    cardActions: CardActions,
    avatar: Avatar,
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
.card-box .k-avatar-image {
  display: block;
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
  border: 4px solid #81be41;
  border-radius: 50%;
      background-position: center center;
    background-size: 100%;
}
.card-info {
  width: calc(100% - 90px);
  padding-left: 15px;
}
</style>