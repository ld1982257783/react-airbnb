const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  // webpack
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      // "@mui/styled-engine": resolve("@mui/styled-engine-sc"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
};
