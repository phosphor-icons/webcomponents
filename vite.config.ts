import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "ES2017",
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      name: "Ph",
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      output: {},
    },
  },
});
