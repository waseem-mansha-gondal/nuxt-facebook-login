export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  auth: {
    redirect: {
      login: "/login",
      callback: "/login",
      home: "/",
    },

    strategies: {
      facebook: {
        clientId: "1181717872527509",
        clientSecret: "9c0a1b3c7820752bfafa6840924aa0f7",
        scope: ["public_profile", "email"],

        endpoints: {
          userInfo:
            "https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}",
        },
      },
    },
  },
  head: {
    title: "facebook",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],
  axios: {
    proxy: true,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],
  router: {
    middleware: ["auth"],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["defu"],
  },
};
