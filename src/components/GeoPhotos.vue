<template>
  <div class="geo-photos">
    <coordinates-input
      @coordinatesUpdated="updateCoordinates"
      :loading="loading"
    ></coordinates-input>
    <v-container>
      <photo-gallery :photos="photos"></photo-gallery>
    </v-container>
  </div>
</template>

<script>
import jsonp from 'jsonp'
import config from '../../config.json'

import CoordinatesInput from './CoordinatesInput.vue'
import PhotoGallery from './PhotoGallery.vue'

export default {
  name: 'GeoPhotos',
  components: {
    CoordinatesInput,
    PhotoGallery
  },
  data: () => ({
    coordinates: null,
    loading: false,
    photos: []
  }),
  watch: {
    coordinates(newValue) {
      if (newValue) {
        this.getPhotos()
      }
    }
  },
  methods: {
    updateCoordinates(coordinates) {
      this.coordinates = coordinates
    },
    getPhotos() {
      this.loading = true
      jsonp(
        'https://api.vk.com/method/photos.search?v=5.80&radius=800&access_token=' +
          config.apikey +
          '&lat=' +
          this.coordinates.lat +
          '&long=' +
          this.coordinates.long +
          '&count=100',
        null,
        (err, data) => {
          if (err) {
            console.log(err)
            this.loading = false
          } else {
            this.photos = data.response.items
            this.loading = false
          }
        }
      )
    }
  }
}
</script>
