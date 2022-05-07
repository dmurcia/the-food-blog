<template>
  <div class="container">
    <section>
      <div class="carousel-list content-gallery d-flex flex-nowrap">
        <CarouselItem :data-list="data" />
      </div>
    </section>
  </div>
</template>

<script>
import CarouselItem from "@/components/Carousel/CarouselItem.vue";

const data = [
  {
    title: `How to pick the perfect peach`,
    category: `Tips`,
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore (…)`,
    imageName: `round-yellow-and-red-fruits-1028598.png`,
  },
  {
    title: `Minimalist kitchen`,
    category: `Lifestyle`,
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore (…)`,
    imageName: `round-yellow-and-red-fruits-1028598.png`,
  },
  {
    title: `Organise your space`,
    category: `Tips`,
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore (…)`,
    imageName: `round-yellow-and-red-fruits-1028598.png`,
  },
  // {
  //   title: "Butternut Squash Soup",
  //   categories: [
  //     "Recipes",
  //     "Soup"
  //   ],
  //   description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore (…)`,
  //   imageName: "appetizer-bowls-cream-creamy-262947@2x.jpg"
  // },
  // {
  //   title: "Berries Smoothie",
  //   categories: [
  //     "Recipes",
  //     "drinks",
  //     "Breakfast"
  //   ],
  //   description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore (…)`,
  //   imageName: "cayla1-w6ftFbPCs9I-unsplash@2x.jpg"
  // }
];
export default {
  components: {
    CarouselItem,
  },
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel-list {
  position: relative;
}
</style>