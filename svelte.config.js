import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            strict: false,
            pages: 'docs',
            assets: 'docs',
            fallback: null
        }),
        paths: {
            base: dev ? '' : '/svelte-app'
        }
    }
};

export default config;
