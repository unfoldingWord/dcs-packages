import { build } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const libraries = [
  {
    entry: path.resolve(__dirname, "../src/service/base/index.ts"),
    fileName: "base",
  },
  {
    entry: path.resolve(__dirname, "../src/service/catalog-next/index.ts"),
    fileName: "catalog-next",
  },
];

libraries.forEach(async (lib) => {
  await build({
    build: {
      outDir: "./dist",
      lib: {
        ...lib,
        formats: ["es", "cjs"],
      },
      emptyOutDir: false,
    },
  });
});
