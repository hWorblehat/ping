import resolve from 'rollup-plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default ["es", "cjs"].map(format => ({
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    entryFileNames: `[name].${format}.js`,
    format: format
  },
  plugins: [
    postcss({extensions: ['.css']}),
    babel({
      //TODO fixup
      "exclude": 'node_modules/**',
      "extensions": [".ts", ".tsx"],
      "presets": [
        ["@babel/typescript"],
        ["@babel/env", {
          "modules": false
        }],
        ["@babel/react"]
      ],
      "plugins": [
        ["babel-plugin-root-import"]
      ]
    }),
    resolve({extensions: [".js", ".ts", ".tsx"]}),
    autoExternal(),
  ],
  experimentalCodeSplitting: true
}));
