<template>
 <nav>
    <a>Home</a>
    <a>Posts</a>
    <a>Contact</a>
  </nav>
</template>

<script lang="ts">
import { Button, ButtonGroup } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'k-button': Button,
        'buttongroup': ButtonGroup
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
