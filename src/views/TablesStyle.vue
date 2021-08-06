<template>
  <div class="tables">
   
    <table-simple></table-simple>
  </div>
</template>

<script>
// @ is an alias to /src
import TableSimple from '../components/Table.vue';


export default {
  name: 'CardsStyle',
  components: {
    'table-simple':TableSimple,
  }
}
</script>
