import ReactivityTransform from "@vue-macros/reactivity-transform/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@unocss/nuxt", "@nuxt/eslint", "@element-plus/nuxt"],
  vite: {
    plugins: [ReactivityTransform()],
  },
  
});