import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
const pkg = require("./package.json");

const libraryName = "pickFile";

export default {
  input: "./src/index.ts",
  output: [
    { file: pkg.main, name: libraryName, format: "umd" },
    { file: pkg.module, format: "es" },
    {
      file: "dist/pick-file.js",
      format: "iife",
      name: libraryName,
    },
  ],
  sourcemap: true,
  external: [],
  plugins: [commonjs(), resolve(), typescript(), sourceMaps()],
};
