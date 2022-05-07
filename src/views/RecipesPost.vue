<template>
  <h1>My post</h1>
</template>

<script>
// import { ref } from 'vue';
// import { useRoute } from 'vue-router';

export default {
  setup() {
    // const route = useRoute();

    // const data = ref(null);
    // const loading = ref(null);
    // const error = ref(null);

    
  },
  methods: {
    getPost() {
      console.log(`route`, this.$route.params.slug);
    }
  },
  created() {
    this.getPost();
  }
}
</script>