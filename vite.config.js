import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                regles: resolve(__dirname, 'regles.html'),
                rejoindre: resolve(__dirname, 'rejoindre.html'),
            },
        },
    },
});
