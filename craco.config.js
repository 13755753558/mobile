require("dotenv").config();
const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// const server_url = "http://10.10.1.180:3000/api/";
// const server_url = "http://10.10.1.17:8081/";
const server_url = "http://10.10.1.180:3001/mobile/api/";
// const server_url = "https://dprism.ai/api/";

module.exports = {
  devServer: {
    proxy: {
      "/mobile/api/": {
        // 要代理的地址
        target: server_url,
        changeOrigin: true,
        pathRewrite: {
          "^/mobile/api/": "",
        },
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {},
      },
    },

    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
    {
      plugin: NodePolyfillPlugin,
    },
    {
      plugin: new Dotenv(),
    },
  ],
  babel: {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-typescript",
    ],
    plugins: ["inline-react-svg"],
  },
  webpack: {
    plugins: [
      new NodePolyfillPlugin({
        excludeAliases: ["console"],
      }),
    ],
    configure: (webpackConfig) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === "ModuleScopePlugin"
      );
      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      return webpackConfig;
    },
  },
};
