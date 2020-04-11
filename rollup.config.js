import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'index.js',
  output: [
    { file: pkg.module, format: 'esm' },
    { file: pkg.main, format: 'cjs' }
  ],
  plugins: [terser()],
  external: ['vue']
}
