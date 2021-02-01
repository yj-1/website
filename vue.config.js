module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '@/common/mixin.scss';`,
      },
    },
  },
};