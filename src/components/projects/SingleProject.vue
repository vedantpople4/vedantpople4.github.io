<template>
  <router-link
    to="/projects/single-project"
    class="col-12 col-lg-4 mb-3 mb-md-5"
    aria-label="Single Project"
  >
    <div
      class="card rounded-0 border-0 shadow-sm mb-lg-0"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-anchor-placement="top-bottom"
    >
      <div class="card-body">
        <h4 class="card-title text-truncate text-center mb-0">
          <a class="text-link" :href="project.url">{{ project.title }}</a>
        </h4>
        <p class="card-text">{{ project.description }}</p>
      </div>
      <div class="text-center">
        <div class="tags mb-3 has-text-weight-semibold">
          <span class="tag" v-for="tag in project.tags" :key="tag">{{
            tag
          }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SingleProject",
  props: ["project"],
};
</script>
<style>
.card-body {
  text-align: center;
}
</style>
