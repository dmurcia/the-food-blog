<template>
  <Gallery :show-header="false" :items="24" />
</template>

<script>
import Gallery from "@/components/Gallery/GalleryList.vue";

export default {
  components: {
    Gallery,
  },
};
</script>