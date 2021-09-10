<template>
  <div v-for="data in dataList" :key="data.id">
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
  </div>
</template>

<script>
export default {
  props: {
    dataList: Array
  }
}
</script>