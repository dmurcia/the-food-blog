<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">The Food Blog</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarContent">
      <div class="navbar-nav me-auto mg-2 mg-lg-0">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/recipes">Recipes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  box-shadow: $box-shadow;
  @include media-breakpoint-up(md) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
.nav-item {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  color: #707070;
  font-size: $paragraph-f-size;
  font-weight: 400;
}
</style>