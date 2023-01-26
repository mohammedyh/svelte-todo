import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			$root: path.resolve('./src/'),
		},
	},
	server: {
		port: 3000,
	},
});
