import { posts } from './data.js';

export async function load() {
	await new Promise((fulfil) => {
		setTimeout(fulfil, 1000);
	});

	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}