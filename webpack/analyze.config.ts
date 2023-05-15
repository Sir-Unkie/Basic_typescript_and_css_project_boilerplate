import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import productionConfig from './production.config';

const analyzeConfig = merge(productionConfig, {
  plugins: [new BundleAnalyzerPlugin()],
});

export default analyzeConfig;
