<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="currentPage === 1 ? 'disabled' : ''">
        <router-link
          :to="{ name: 'Recipes', query: { page: 1 } }"
          class="page-link"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      <li
        class="page-item"
        :class="currentPage == page ? 'active' : ''"
        v-for="page in totalPages"
        :key="page.id"
      >
        <router-link
          :to="{ name: 'Recipes', query: { page: page } }"
          class="page-link"
          href="#"
          >{{ page }}</router-link
        >
      </li>
      <li class="page-item" :class="currentPage == totalPages ? 'disabled' : ''">
        <router-link
          :to="{ name: 'Recipes', query: { page: totalPages } }"
          class="page-link"
          href="#"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentPage: null,
    };
  },
  props: {
    totalPages: Number,
  },
  mounted() {
    this.currentPage = parseInt(this.$route.query?.page, 10) || 1;
  },
  watch: {
    $route(to) {
      this.currentPage = parseInt(to.query?.page, 10) || 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-item {
  &.active .page-link {
    background: transparent;
    color: $secondary;
  }

  &.disabled .page-link {
    color: $gray-light;
  }

  .page-link {
    border: none;
    border-radius: 0;

    &:hover,
    &:focus {
      background: transparent;
      color: $secondary;
      outline: none;
      box-shadow: none;
    }
  }
}
</style>