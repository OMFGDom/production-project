import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import _ from 'lodash'; // Consider adding lodash for deep cloning
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: '',
  };

  const newConfig = _.cloneDeep(config); // Deep clone the config

  newConfig.resolve = newConfig.resolve || {};
  newConfig.resolve.modules = newConfig.resolve.modules || [];
  newConfig.resolve.modules.push(paths.src);

  newConfig.resolve.extensions = newConfig.resolve.extensions || [];
  newConfig.resolve.extensions.push('.ts', '.tsx');

  if (newConfig.module) {
    newConfig.module.rules = (newConfig.module?.rules?.map((rule) => {
      if (typeof rule === 'object' && rule !== null && 'test' in rule) {
        if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }
      }
      return rule;
    }) as RuleSetRule[]) || [];

    newConfig.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    newConfig.module.rules.push(buildCssLoaders(true));
  }

  return newConfig;
};
