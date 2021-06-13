<template>
  <div :style="heroImage" class="hero d-flex justify-end align-center px-4">
    <v-btn fab small outlined :class="['mx-lg-16', 'border-custom']">
      <v-icon :class="{ 'rtl-element': $vuetify.rtl }">
        mdi-volume-high
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Hero",

  computed: {
    heroImage() {
      return {
        backgroundImage: `url(${require("../assets/background.png")})`,
      };
    },
  },
};
</script>
