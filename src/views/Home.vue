<template>
  <div class="home bg-combined">
    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-6">
            <h2>A blog for people who like simple food</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore
            </p>
            <button type="button" class="btn btn-primary">
              See popular recipes
            </button>
          </div>
        </div>
      </section>
    </div>
    <Carousel />
    <Gallery title="Popular Recipes" />
    <Subscribe />
    <AboutMe />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel/CarouselList.vue";
import Gallery from "@/components/Gallery/GalleryList.vue";
import Subscribe from "@/components/Subscribe.vue";
import AboutMe from "@/components/AboutMe.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Gallery,
    Subscribe,
    AboutMe,
  },
};
</script>

<style scoped>
section {
  padding: 8rem 0 4rem;
}
</style>