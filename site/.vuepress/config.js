require("dotenv").config()

const webpack = require("webpack")
const MomentLocalesPlugin = require("moment-locales-webpack-plugin")

module.exports = {
  locales: {
    "/": {
      lang: "ja", // this will be set as the lang attribute on <html>
      title: "激辛歌会",
      description: "みんなで短歌の評を書くあつまり"
    }
  },
  head: [
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/favicon/site.webmanifest.json" }],
    ["link", { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#5bbad5" }],
    ["meta", { name: "msapplication-TileColor", content: "#2d89ef" }],
    ["meta", { name: "msapplication-TileImage", content: "/favicon/mstile-150x150.png" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/fork-awesome/1.1.7/css/fork-awesome.min.css", integrity: "sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=", crossorigin: "anonymous" }],
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/jsSocials/1.5.0/jssocials.min.css", integrity: "sha256-1tuEbDCHX3d1WHIyyRhG9D9zsoaQpu1tpd5lPqdqC8s=", crossorigin: "anonymous" }],
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/jsSocials/1.5.0/jssocials-theme-plain.min.css", integrity: "sha256-lytJoWXxuDd1JIbuJO8zrk6cykEiSgVV4DWf7X5R2Lw=", crossorigin: "anonymous" }],
    ["script", { src: "https://cdn.embedly.com/widgets/platform.js", charset: "UTF-8", async: true }],
    ["script", { src: "https://shinabitanori-webring.netlify.app/embed.js", charset: "UTF-8", async: true }],
    ["script", { src: "https://unpkg.com/import-doc/dist/import-doc/import-doc.js", charset: "UTF-8", async: true }],
    ["script", { src: "hhttps://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js", integrity: "sha512-/DXTXr6nQodMUiq+IUJYCt2PPOUjrHJ9wFrqpJ3XkgPNOZVfMok7cRw6CSxyCQxXn6ozlESsSh1/sMCTF1rL/g==", crossorigin: "anonymous" }],
    ["script", { src: "https://cdnjs.cloudflare.com/ajax/libs/jsSocials/1.5.0/jssocials.min.js", integrity: "sha512-3Ov4ZromgNap5Adyn3V0/q2CAaW3u38FTpOhDNuM5zkQ7Zcm9/NMtuO7xmBsb/HPqdA2AP9AHq1N2WOUdNzkKA==", crossorigin: "anonymous" }],
  ],
  plugins: [
    ["@vuepress/google-analytics", { "ga": process.env.GA }],
    ["@vuepress/last-updated", {
      transformer: (timestamp, lang) => {
        const moment = require("moment")
        moment.locale(lang)
        return moment(timestamp).format("LL")
      }
    }],
    "@vuepress/register-components"
  ],
  evergreen: true,
  themeConfig: {
    repo: process.env.REPO,
    logo: "/logo.png",
    nav: [
      { text: 'Home', link: '/' }
    ],
    editLinks: false,
    lastUpdated: "Last Updated" // string | boolean
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        "_": "underscore"
      }),
      new MomentLocalesPlugin({
        localesToKeep: ["ja"]
      })
    ]
  }
}