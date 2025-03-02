import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: [
        { format: 'esm', file: 'dist/esm/index.js' },
        { format: 'cjs', file: 'dist/cjs/index.js', exports: 'named' },
    ],
    plugins: [
        nodeResolve(),
        babel({ babelHelpers: 'bundled' }),
        commonjs(),
        terser(),
    ],
};
