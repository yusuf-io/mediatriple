<template>
  <div>
    <Hero />
    <Carousel class="pt-12 mt-1 blur" />
  </div>
</template>
<script>
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel.vue";

export default {
  components: {
    Hero,
    Carousel,
  },
};
</script>
