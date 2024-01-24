import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "ES2017",
    lib: {
      entry: "src/index.ts",
      name: "Ph",
      fileName: (format, name) => `${name}.${format === "umd" ? "cjs" : "mjs"}`,
    },
    rollupOptions: {
      input: "./src/index.ts",
      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
        },
        {
          format: "umd",
          name: "Ph",
        },
      ],
    },
  },
});
