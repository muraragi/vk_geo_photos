<template>
  <v-container class="coordinates">
    <v-row align="center" justify="center">
      <v-col align-self="center" lg="3">
        <h2 class="mb-2">Enter coordinates</h2>
        <v-text-field v-model="lat" label="Lat" solo></v-text-field>
        <v-text-field v-model="long" label="Long" solo></v-text-field>
        <v-btn :loading="loading" @click="find" large>Find photos</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CoordinatesInput',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    lat: '',
    long: ''
  }),
  methods: {
    find() {
      this.$emit('coordinatesUpdated', { lat: this.lat, long: this.long })
    }
  }
}
</script>
