<template>
  <swiper :options="swiperOption" :dir="{ rtl: $vuetify.rtl }">
    <swiper-slide v-for="(slide, i) in slides" :key="i">
      <v-hover v-slot="{ hover }">
        <v-card
          :class="[
            'card-custom smooth-transition',
            { 'card-hover': hover },
            { 'border-custom': hover },
          ]"
          max-width="350"
          tile
        >
          <v-img :src="slide.img" height="200px" />
          <div :class="['smooth-transition', { 'bg-dark-gradient': hover }]">
            <div
              :class="['d-flex justify-space-between', { 'bg-dark': !hover }]"
            >
              <v-card-title class="text-truncate">
                {{ slide.title }}
              </v-card-title>
              <v-card-title
                :class="[
                  'text-truncate text-caption opacity-0 smooth-transition',
                  { 'opacity-100': hover },
                ]"
              >
                {{ slide.year }} . {{ slide.duration }}
              </v-card-title>
            </div>

            <v-card-actions
              :class="[
                'd-none justify-center smooth-transition',
                { 'd-flex': hover },
              ]"
            >
              <div class="mb-3">
                <v-btn class="bg-dark-gradient mx-1" fab small>
                  <v-icon> mdi-heart-outline </v-icon>
                </v-btn>
                <v-btn class="bg-cyan-gradient mx-1" fab>
                  <v-icon> mdi-google-play </v-icon>
                </v-btn>
                <v-btn class="bg-dark-gradient mx-1" fab small>
                  <v-icon> mdi-heart-off-outline </v-icon>
                </v-btn>
              </div>
            </v-card-actions>
          </div>
        </v-card>
      </v-hover>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "Carousel",
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          1904: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1264: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      slides: [
        {
          title: "Bad Times at the El Royale",
          img: `${require("../assets/m1.jpg")}`,
          year: "2018",
          duration: "2h20m",
        },
        {
          title: "Bad Times at the El Royale",
          img: `${require("../assets/m1.jpg")}`,
          year: "2018",
          duration: "2h20m",
        },
        {
          title: "Bad Times at the El Royale",
          img: `${require("../assets/m1.jpg")}`,
          year: "2018",
          duration: "2h20m",
        },
        {
          title: "John Wick: 3",
          img: `${require("../assets/m2.jpg")}`,
          year: "2019",
          duration: "2h23m",
        },
        {
          title: "John Wick: 3",
          img: `${require("../assets/m2.jpg")}`,
          year: "2019",
          duration: "2h23m",
        },
        {
          title: "John Wick: 3",
          img: `${require("../assets/m2.jpg")}`,
          year: "2019",
          duration: "2h23m",
        },
      ],
    };
  },
};
</script>
