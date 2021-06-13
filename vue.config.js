module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/scss/main.scss"',
      },
    },
  },
};
