import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from a sub-path (e.g. https://<user>.github.io/<repo>/).
// Using a relative base ("./") means the build works regardless of the repo name,
// with no config changes needed after deployment.
export default defineConfig({
  plugins: [react()],
  base: './',
})
