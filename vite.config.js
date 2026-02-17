import legacy from "@vitejs/plugin-legacy";

export default {
  plugins: [
    legacy({
      modernTargets: [
        "edge>=79",
        "firefox>=67",
        "chrome>=64",
        "safari>=11",
        "chromeAndroid>=64",
        "iOS>=11",
        "samsung>=4",
        "opera>=50",
        "op_mob>=50",
      ],
      modernPolyfills: true,
      renderLegacyChunks: false,
    }),
  ],
};
