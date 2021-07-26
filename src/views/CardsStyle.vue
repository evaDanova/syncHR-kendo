<template>
  <div class="cards">
   
    <card-contact-style></card-contact-style>
    <card-form-style></card-form-style>
  </div>
</template>

<script>
// @ is an alias to /src
import CardContact from '../components/CardContact.vue';
import CardForm from '../components/CardForm.vue';

export default {
  name: 'CardsStyle',
  components: {
    'card-contact-style':CardContact,
    'card-form-style':CardForm
  }
}
</script>
