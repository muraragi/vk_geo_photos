<template>
  <div id="app" class="container">
    <coordinates-input></coordinates-input>
  </div>
</template>

<script>
import CoordinatesInput from './components/CoordinatesInput.vue'

export default {
  name: 'App',
  components: {
    CoordinatesInput
  },
  data() {
    return {
      coordinates: null
    }
  }
}
</script>

<style lang="scss"></style>
