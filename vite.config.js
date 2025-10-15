import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configure Vite
export default defineConfig({
  plugins: [react()],
  root: "career-lab", // 👈 this points Vite to your index.html
  server: {
    open: true,
    port: 5173, // optional: choose your port
  },
});
