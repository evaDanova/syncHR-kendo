<template>
  <div class="panel">
   
    <panel-styles></panel-styles>
  </div>
</template>

<script>
// @ is an alias to /src
import Panel from '../components/Panel.vue';

export default {
  name: 'PanelStyle',
  components: {
    'panel-styles':Panel
  }
}
</script>
