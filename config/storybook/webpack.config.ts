import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {

  const paths: BuildPaths = {
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: '',
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module) {
    config.module.rules = config.module?.rules?.map((rule) => {
      if (typeof rule === 'object' && rule !== null && 'test' in rule) {
        if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }
      }
      return rule;
    }) as (false | "" | 0 | RuleSetRule | "..." | null | undefined)[];
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildCssLoaders(true));

  return config;
};
