<template>
  <v-container class="coordinates">
    <v-row align="center" justify="center">
      <v-col align-self="center" lg="5">
        <h2 class="mb-2">Click on needed location</h2>
        <GmapMap
          :center="{ lat: 55.578255, lng: 37.598849 }"
          :zoom="4"
          ref="gmap"
          map-type-id="roadmap"
          @click="mapClicked"
          style="width: 100%; height: 350px"
        >
        </GmapMap>
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
    },
    mapClicked(event) {
      this.lat = event.latLng.lat()
      this.long = event.latLng.lng()
      this.find()
    }
  }
}
</script>
