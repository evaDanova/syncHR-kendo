<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Buttons msg="Buttons"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Buttons from '@/components/Buttons.vue'

export default {
  name: 'ButtonsStyle',
  components: {
    Buttons
  }
}
</script>
