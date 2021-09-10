<template>
  <div class="container">
    <section>
      <header class="mb-5">
        <h3>{{ title }}</h3>
        <a href="#" class="d-flex justify-content-start align-items-center">
          See all
          <img :src="require(`@/assets/icon-angle-right.svg`)" alt="" />
        </a>
      </header>
      <div class="content-gallery d-flex flex-wrap">
        <GalleryItem :data-list=data />
      </div>
    </section>
  </div>
</template>

<script>
import GalleryItem from '@/components/Gallery/GalleryItem.vue';

const data = [
  {
    title: "Butternut Squash Soup",
    categories: [
      "Recipes",
      "Soup"
    ],
    cookTime: "45 min",
    portions: "6 - 8 portions",
    imageName: "avocado-toast-1@2x.jpg"
  },
  {
    title: "Berries Smoothie",
    categories: [
      "Recipes",
      "drinks",
      "Breakfast"
    ],
    cookTime: "15 min",
    portions: "2 - 4 portions",
    imageName: "cayla1-w6ftFbPCs9I-unsplash@2x.jpg"
  },
  {
    title: "Butternut Squash Soup",
    categories: [
      "Recipes",
      "Soup"
    ],
    cookTime: "45 min",
    portions: "6 - 8 portions",
    imageName: "berries-blackberries-close-up-cocktail-434295@2x.jpg"
  },
  {
    title: "Butternut Squash Soup",
    categories: [
      "Recipes",
      "Soup"
    ],
    cookTime: "45 min",
    portions: "6 - 8 portions",
    imageName: "charles-deluvio-D-vDQMTfAAU-unsplash@2x.jpg"
  },
  {
    title: "Butternut Squash Soup",
    categories: [
      "Recipes",
      "Soup"
    ],
    cookTime: "45 min",
    portions: "6 - 8 portions",
    imageName: "appetizer-bowl-chili-close-up-286283@2x.jpg"
  },
  {
    title: "Butternut Squash Soup",
    categories: [
      "Recipes",
      "Soup"
    ],
    cookTime: "45 min",
    portions: "6 - 8 portions",
    imageName: "appetizer-bowls-cream-creamy-262947@2x.jpg"
  },
]

export default {
  components: {
    GalleryItem
  },
  props: {
    title: String
  },
  data() {
    return {
      data
    }
  }
}
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;

  a {
    color: #595c69;
    img {
      display: inline-block;
      height: 0.8rem;
      margin-left: 10px;
    }
  }
}
.content-gallery {
  gap: 1.8rem;
}
</style>