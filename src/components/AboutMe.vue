<template>
  <div class="container">
    <section>
      <div class="row justify-content-between align-items-center">
        <div class="col-md-4">
          <img src="../assets/about-Image.jpg" alt="" />
        </div>
        <div class="col-md-8">
          <h2 class="mb-0">{{ title }}</h2>
          <h3 class="sub-title mb-4">{{ subtitle }}</h3>
          <p>{{ description }}</p>
          <button class="btn btn-primary">Learn more</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hi, I’m Laura!",
      subtitle: "Creator of simple food",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est. ed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam",
    };
  },
};
</script>