import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Force-enable the Nitro deploy bundle with the Vercel preset. Outside the
  // Lovable sandbox the plugin is off by default, so we opt in explicitly here.
  // Nitro's `vercel` preset emits the Vercel Build Output API format into
  // `.vercel/output`, which Vercel consumes natively (no adapter needed).
  nitro: {
    preset: "vercel",
    // The wrapper defaults Nitro's output to `dist/`, but Vercel's Build Output
    // API requires the canonical `.vercel/output` layout. Map the dirs so the
    // build lands where Vercel looks for it: config.json at the output root,
    // static assets under `static/`, and the server fn under `functions/`.
    output: {
      dir: ".vercel/output",
      publicDir: ".vercel/output/static",
      serverDir: ".vercel/output/functions/__server.func",
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});