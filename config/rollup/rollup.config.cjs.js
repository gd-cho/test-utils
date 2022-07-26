const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

// cjs
export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs',
    banner: ' /* https://github.com/gd-cho/test-utils */',
  },
  plugins: [
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
