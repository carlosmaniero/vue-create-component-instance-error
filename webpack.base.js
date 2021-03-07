const VueCliService = require("@vue/cli-service/lib/Service");

function isRequiredPlugin(plugin) {
    const requiredPlugins = [
      'VueLoaderPlugin',
      'CaseSensitivePathsPlugin',
      'MiniCssExtractPlugin',
      'OptimizeCssnanoPlugin',
      'HashedModuleIdsPlugin',
      'CopyPlugin',
    ];
  
    return requiredPlugins.includes(plugin.constructor.name);
  }
  
  function deleteWebpackConfigManagedByRagu(resolveWebpackConfig) {
    delete resolveWebpackConfig.entry;
    delete resolveWebpackConfig.node;
    delete resolveWebpackConfig.output;
    delete resolveWebpackConfig.context;
    delete resolveWebpackConfig.optimization?.splitChunks;
  }
  
  function configureVueLoaderForSSR(resolveWebpackConfig) {
    resolveWebpackConfig.plugins = resolveWebpackConfig.plugins
        .filter((plugin) => isRequiredPlugin(plugin));
  
    const vueRule = resolveWebpackConfig.module.rules
        .find((rule) => rule.test.test('file.vue'));
  
    const vueLoader = vueRule?.use?.find((loader) => /vue-loader/.test(loader.loader));
  
    vueLoader.options = {
      optimizeSSR: true,
      extractCSS: true
    };
  }

const vueCliService = new VueCliService(process.cwd());
  vueCliService.init('production');

const chainableWebpackConfig = vueCliService.resolveChainableWebpackConfig()
    .mode('production');

const resolveWebpackConfig = vueCliService.resolveWebpackConfig(chainableWebpackConfig);

deleteWebpackConfigManagedByRagu(resolveWebpackConfig);
configureVueLoaderForSSR(resolveWebpackConfig);


module.exports = resolveWebpackConfig;