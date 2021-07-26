<template>
    <div style="display:flex; justify-content: space-evenly; flex-wrap: wrap;">
        <div v-for="(card, index) in cards" :key="index">
                <card class="card-box">
                    <cardActions style="display: flex; justify-content: space-between">
                        <div>
                            <button class="k-button k-flat">
                                <span :class= "card.postLiked ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline'" />
                            </button>
                            <button class="k-button k-flat">
                                <span class="k-icon k-i-comment" />
                            </button>
                            <button class="k-button k-flat">
                                <span class="k-icon k-i-share" />
                            </button>
                        </div>
                        <span style="font-size: 13px; align-self: center; color: #656565;">
                            {{card.postLikes}} likes
                        </span>
                    </cardActions>
                    <cardBody class="k-hbox" style="background: transparent">
                            <kendo-avatar type="image" size="large"  shape="circle">
                                <img class="profile-picture" :src="card.thumbnailSrc"/>
                            </kendo-avatar>
                            <div class="card-info">
                            <cardTitle class="text-light-gray size-14 mb-0 text-left">
                                {{card.headerTitle}}
                            </cardTitle>
                            <cardSubtitle class="text-dark-gray size-16 mb4 bold text-left">
                                {{card.headerSubtitle}}
                            </cardSubtitle>
                              <cardTitle class="text-light-gray size-14 mb-0 text-left">
                                {{card.headerTitle1}}
                            </cardTitle>
                            <cardSubtitle class="text-dark-gray size-16 bold text-left">
                                {{card.headerSubtitle1}}
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
  Avatar
} from "@progress/kendo-vue-layout";


const cardsData = [
  {
    thumbnailSrc:
      "http://localhost:8081/img/profilePicture.png",
    headerTitle: "bg_traditions",
    headerSubtitle: "Bulgaria, Europe",
    headerTitle1: "bg_traditions",
    headerSubtitle1: "Bulgaria, Europe",
    commentsExpanded: false,
    postLiked: false,
    comments: [],
    newCommentTextValue: "",
    postLikes: 174,
    scrollViewItems: {
      url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rose_festival.jpg",
    },
  },
  {
    thumbnailSrc:
      "http://localhost:8081/img/profilePicture2.png",
    headerTitle: "bg_mountains",
    headerSubtitle: "Bulgaria, Europe",
    headerTitle1: "bg_mountains",
    headerSubtitle1: "Bulgaria, Europe",
    commentsExpanded: false,
    postLiked: false,
    comments: [],
    newCommentTextValue: "",
    postLikes: 962,
    scrollViewItems: {
      url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg",
    },
  },
   {
    thumbnailSrc:
      "http://localhost:8081/img/profilePicture2.png",
    headerTitle: "bg_mountains",
    headerSubtitle: "Bulgaria, Europe",
    headerTitle1: "bg_mountains",
    headerSubtitle1: "Bulgaria, Europe",
    commentsExpanded: false,
    postLiked: false,
    comments: [],
    newCommentTextValue: "",
    postLikes: 962,
    scrollViewItems: {
      url: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg",
    },
  },
];

export default {
    components: {
        'card': Card,
        'cardHeader': CardHeader,
        'cardBody': CardBody, 
        'cardTitle': CardTitle,
        'cardSubtitle': CardSubtitle,
        'cardImage': CardImage, 
        'cardActions': CardActions,
        'avatar': Avatar
    },
    data: function(){
        return {
            cards: cardsData
        }
    },
    methods: {
       
    }
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
.card-box .k-avatar-image{
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
}
.card-info {
  width: calc(100% - 90px);
  padding-left: 15px;
}
</style>