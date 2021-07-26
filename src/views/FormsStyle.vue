<template>
  <div class="form">
   
    <form-login></form-login>
  </div>
</template>

<script>
// @ is an alias to /src
import FormLogin from '../components/FormLogin.vue';

export default {
  name: 'FormsStyle',
  components: {
    'form-login':FormLogin
  }
}
</script>
