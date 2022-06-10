<template>
  <router-link to="#" v-for="data in dataList" :key="data.id">
    <div class="card">
      <div class="card-body">
        <img :src="require(`@/assets/${data.imageName}`)" alt="" />
      </div>
      <div class="card-footer">
        <span>{{ data.category }}</span>
        <h4>{{ data.title }}</h4>
        <p>{{ data.description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    dataList: Array,
  },
};
</script>

<style lang="scss" scoped>
.card {
  img {
    transition: transform 0.2s; /* Animation */

    &:hover {
      transform: scale(1.02);
    }
  }
}
</style>