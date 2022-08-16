import { json as json$1 } from '@sveltejs/kit';

export async function GET({ params: { repo } }: { params: { repo: string } }) {
	const data = await fetch(`https://api.github.com/repos/${repo}`, {
		headers: {
			authorization: `token ${import.meta.env.VITE_githubApiToken}`,
			'user-agent': 'node.js'
		}
	}).then((rsp) => rsp.json());
	return json$1(data);
}
