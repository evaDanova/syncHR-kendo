<template>
  <div class="cards">
   
    <card-contact-style></card-contact-style>
    <card-form-style></card-form-style>
    <card-list-style></card-list-style>
  </div>
</template>

<script>
// @ is an alias to /src
import CardContact from '../components/CardContact.vue';
import CardForm from '../components/CardForm.vue';
import CardList from '../components/CardList.vue';


export default {
  name: 'CardsStyle',
  components: {
    'card-contact-style':CardContact,
    'card-form-style':CardForm,
    'card-list-style':CardList
  }
}
</script>
