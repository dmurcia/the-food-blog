<template>
  <div class="card" v-for="data in dataList" :key="data.id">
    <div class="card-body">
      <img :src="require(`@/assets/${data.imageName}`)" alt="" />
    </div>
    <div class="card-footer">
      <span>{{ displayCategories(data.categories) }}</span>
      <h4>{{ data.title }}</h4>
      <p>{{ data.portions }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: Array
  },
  methods: {
    displayCategories(categories) {
      return categories.join(' - ');
    }
  }
}
</script>