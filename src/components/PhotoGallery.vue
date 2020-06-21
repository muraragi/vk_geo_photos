<template>
  <div class="photo-gallery mt-6">
    <masonry :cols="5" :gutter="24">
      <a
        v-for="(photo, index) in photos"
        :key="index"
        :href="getProfilePage(photo)"
        target="_blank"
      >
        <v-img class="mb-6" :src="photo.sizes[4].url"></v-img>
      </a>
    </masonry>
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  props: {
    photos: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getProfilePage(photo) {
      return `https://vk.com/id${photo.owner_id}`
    }
  }
}
</script>
