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
      <div class="wrapper-gallery">
        <Transition name="slide-fade">
          <div
            class="gallery content-gallery d-flex flex-wrap justify-content-center"
            v-if="!loading && showGallery"
          >
            <GalleryItem
              :data-list="data"
            />
          </div>
        </Transition>
      </div>
    </section>
    <div
      class="d-flex justify-content-center"
      v-if="!loading && showPagination"
    >
      <Pagination :total-pages="getPages(data)" :page-name="pageName" />
    </div>
    <div class="content-loading d-flex justify-content-center">
      <div v-if="loading">
        <h2>loading...</h2>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div v-if="error">
        <h2>There is an error loading the data</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { getRamdomRecipes } from "@/api/recipes";
import { parseToInt10 } from "../../utils";

import GalleryItem from "@/components/Gallery/GalleryItem.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Gallery",
  components: { GalleryItem, Pagination },
  props: {
    showHeader: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Number,
      default: 6
    },
    title: String,
    pageName: String,
  },
  setup(props) {
    const route = useRoute();
    const data = ref({});
    const loading = ref(true);
    const error = ref(null);
    const currentPage = ref("1");
    const showPagination = ref(false);
    const showGallery = ref(true);
    const errorMessage = "";

    onMounted(fetchData);
    // You could use computed property which re-evaluates on route name updates
    // const routeName = computed(() => route.name);

    // You can watch the property for triggering some other action on change
    watch(() => route.query, fetchData);

    async function fetchData() {
      setGalleryHeight();
      loading.value = true;
      currentPage.value = route.query.page || 1;

      data.value = await getRamdomRecipes({ number: props.items }).then(({recipes}) => recipes);
      loading.value = false;
      if (data?.value === null) {
        return error.value = errorMessage;
      }
      if (data.value.length > 6) {
        showPagination.value = true;
      }
    }

    const setGalleryHeight = () => {
      const gallery = document.querySelector('.gallery');
      const contentGallery = document.querySelector('.wrapper-gallery');
      if (gallery) {
        const galleryHeight = gallery.clientHeight;
        contentGallery.style.height = `${galleryHeight}px`;
      }
    }    
    return { route, data, currentPage, loading, error, showPagination, showGallery };
  },
  methods: {
    getPages(data) {
      return Math.ceil(data.length / this.global.pagination.perPage);
    },
    filterData({ data, currentPage }) {
      return data.slice(
        (parseToInt10(currentPage) - 1) * this.global.pagination.perPage,
        parseToInt10(currentPage) * this.global.pagination.perPage
      );
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
.container {
  position: relative;
}
.content-gallery {
  gap: 1.8rem;
  img {
    min-height: 235px;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.content-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>