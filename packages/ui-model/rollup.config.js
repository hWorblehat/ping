import resolve from 'rollup-plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';

export default ["es", "cjs"].map(format => ({
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    entryFileNames: `[name].${format}.js`,
    format: format
  },
  plugins: [
    babel({
      "exclude": 'node_modules/**',
      "extensions": [".ts", ".tsx"],
      "presets": [
        ["@babel/typescript"],
        ["@babel/env", {
          "modules": false
        }]
      ]
    }),
    resolve({extensions: [".js", ".ts", ".tsx"]}),
    autoExternal(),
  ],
  experimentalCodeSplitting: true
}));
