module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "./src/main.js",
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_variables.scss";
          @import "bootstrap/scss/bootstrap.scss";
          @import "@/scss/_globals.scss";
        `
      },
    },
  },
};
