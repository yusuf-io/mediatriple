import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vueI18n from "vue-i18n";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  vueI18n,
  render: (h) => h(App),
}).$mount("#app");
