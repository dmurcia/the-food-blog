<template>
  <h1>My Recipe</h1>
</template>

<script>
import { ref } from 'vue';
// import { getRecipeById } from '@/api/recipes';

export default {
  props: {
    id: String,
  },
  setup(props) {
    const data = ref(null);
    const loading = ref(true);
    
    data.value = "s";
    console.log(data.value, loading.value);
    
    const fetchData = async () => {
    //   // data.value = await getRecipeById({ id: route.params.slug }, { information: { includeNutrition: false }});
      console.log('id', props.id);
    //   console.log('data', data.value);
    }

    fetchData();
  }
}
</script>