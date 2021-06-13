<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      overlay-color="transparent"
      color="black"
      class="d-lg-none pt-16"
      app
      :right="$vuetify.rtl"
      height="100%"
      fixed
      temporary
    >
      <v-list-item v-for="link in links" :key="link" link class="px-8">
        <v-list-item-content>
          <v-list-item-title>{{ link }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group :value="false" prepend-icon="mdi-earth">
        <template v-slot:activator>
          <v-list-item-title class="text-uppercase">
            {{ lang }}
          </v-list-item-title>
        </template>
        <v-list-item
          v-for="lang in langs"
          :key="lang"
          link
          class="px-8"
          @click="switchLang(lang)"
        >
          <v-list-item-content>
            <v-list-item-title class="text-capitalize">{{
              lang
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="transparent"
      class="mx-lg-16 my-lg-10"
      flat
      absolute
      dark
    >
      <div class="text-h3 text-uppercase">Logo</div>
      <v-btn-toggle
        borderless
        tile
        group
        rounded
        outline
        class="d-none d-lg-block mx-16 border-custom"
        style="background-color: rgba(240, 240, 240, 0.2)"
      >
        <v-btn v-for="link in links" :key="link">{{ link }}</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              {{ lang }} <v-icon right dark> mdi-chevron-down </v-icon>
            </v-btn>
          </template>
          <v-list
            style="background-color: rgba(240, 240, 240, 0.2)"
            class="border-custom d-none d-lg-block"
          >
            <v-list-item
              v-for="(lang, index) in langs"
              :key="index"
              @click="switchLang(lang)"
            >
              <v-list-item-title class="text-center text-capitalize">{{
                lang
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn-toggle>
      <v-spacer></v-spacer>

      <v-btn
        depressed
        large
        outlined
        class="d-none d-lg-block border-custom"
        style="background-color: rgba(240, 240, 240, 0.2)"
      >
        {{ $t("SIGNIN") }}
      </v-btn>
      <v-icon class="d-lg-none" large @click="drawer = !drawer"
        >mdi-menu</v-icon
      >
    </v-app-bar>

    <v-main class="pa-0">
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./pages/Home";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    drawer: false,
    lang: null,
  }),
  computed: {
    langs() {
      return this.$i18n.availableLocales;
    },
    links() {
      return [this.$i18n.t("MENU1"), this.$i18n.t("MENU2")];
    },
  },
  mounted() {
    this.$vuetify.theme.isDark = true;
    this.lang = localStorage.getItem("language") || "tr";
    this.setRtl(this.lang);
  },
  methods: {
    switchLang(lang) {
      this.lang = lang;
      this.$i18n.locale = lang;
      this.setRtl(lang);
      localStorage.setItem("language", lang);
    },
    setRtl(lang) {
      if (lang == "ar") this.$vuetify.rtl = true;
      else this.$vuetify.rtl = false;
    },
  },
};
</script>
