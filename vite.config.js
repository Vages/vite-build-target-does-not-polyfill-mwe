import legacy from "@vitejs/plugin-legacy";

export default {
  plugins: [
    legacy({
      modernTargets: ["edge>=88", "firefox>=78", "chrome>=87", "safari>=14"],
      modernPolyfills: true,
      renderLegacyChunks: false,
    }),
  ],
};
