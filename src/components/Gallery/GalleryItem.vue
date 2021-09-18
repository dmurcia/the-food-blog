<template>
  <router-link to="#" v-for="data in dataList" :key="data.id">
    <div class="card">
      <div class="card-body">
        <img :src="require(`@/assets/${data.imageName}`)" alt="" />
      </div>
      <div class="card-footer">
        <p>{{data.id}}</p>
        <span>{{ displayCategories(data.categories) }}</span>
        <h4>{{ data.title }}</h4>
        <p>{{ data.portions }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    dataList: Array,
  },
  methods: {
    displayCategories(categories) {
      return categories.join(" - ");
    },
  },
};
</script>

<style lang="scss" scoped>
  .card img {
    box-shadow: $box-shadow;
    border-radius: $border-radius;
    transition: transform .2s;

    &:hover {
      transform: scale(1.02);
    }
  }
</style>