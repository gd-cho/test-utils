const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

// esm
export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    banner: ' /* https://github.com/gd-cho/test-utils */',
  },
  plugins: [
    // Rollup解析外部依赖模块插件
    nodeResolve(),
    // Rollup仅支持ES6模块，此插件是将外部依赖CommonJS模块转换为ES6模块的插件
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      runtimeHelpers: true,
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    }),
  ],
};
