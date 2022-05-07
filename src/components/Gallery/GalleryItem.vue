<template>
  <router-link
    :to="'/recipes/' + data.id"
    v-for="data in dataList"
    :key="data.id"
  >
    <div class="card">
      <div class="card-body">
        <img :src="`${data.image}`" alt="" />
      </div>
      <div class="card-footer">
        <p>{{ data.id }}</p>
        <span>{{ displayCategories(data.dishTypes) }}</span>
        <h4>{{ data.title }}</h4>
        <p>{{ data.weightWatcherSmartPoints }}</p>
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
  transition: transform 0.2s;
  width: 100%;

  &:hover {
    transform: scale(1.02);
  }
}
</style>