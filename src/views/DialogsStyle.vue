<template>
  <div class="dialogs">
    <dialog-form-all></dialog-form-all>
  </div>
</template>

<script>
// @ is an alias to /src
import DialogsStyle from '../components/DialogFormAll.vue';


export default {
  name: 'DialogsStyle',
  components: {
    'dialog-form-all':DialogsStyle
  }
}
</script>
<style>

</style>

