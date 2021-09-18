<template>
  <div class="container">
    <section>
      <header class="mb-5" v-if="showHeader">
        <h3>{{ title }}</h3>
        <a href="#" class="d-flex justify-content-start align-items-center">
          See all
          <img :src="require(`@/assets/icon-angle-right.svg`)" alt="" />
        </a>
      </header>
      <div class="content-gallery d-flex flex-wrap">
        <GalleryItem :data-list="filterData()" />
      </div>
    </section>
    <div class="d-flex justify-content-center">
      <Pagination :total-pages="totalPages" />
    </div>
  </div>
</template>

<script>
import GalleryItem from "@/components/Gallery/GalleryItem.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    GalleryItem,
    Pagination,
  },
  props: {
    showHeader: {
      type: Boolean,
      default: true,
    },
    title: String,
  },
  data() {
    return {
      data: [],
      totalPages: null,
      currentPage: 1
    };
  },
  async beforeCreate() { 
    this.data = await fetch("/data/recipes.json")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.error(err));
    this.totalPages = this.getPages(this.data);
  },
  methods: {
    getPages(data) {
      return Math.ceil(data.length / this.$pagination.perPage);
    },
    filterData() {
      return this.data.slice((this.currentPage - 1) * this.$pagination.perPage, this.currentPage * this.$pagination.perPage);
    },
  },
  watch: {
    $route(to) {
      this.currentPage = to.query.page;
      this.filterData();
    },
  },
};
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