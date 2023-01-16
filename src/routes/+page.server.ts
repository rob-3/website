import type { PageServerLoad } from './$types';
import repos from '../routes/_repos';
import type { GitHubRepositoryData } from '../types/GitHubRespositoryData';

export const load: PageServerLoad = async ({ fetch }) => {
	const reposData = repos.map(async ({ repo, description }) => {
		const data = await fetch(`https://api.github.com/repos/${repo}`, {
			headers: {
				authorization: `token ${import.meta.env.VITE_githubApiToken}`,
				'user-agent': 'node.js'
			}
		}).then((rsp) => rsp.json()) as GitHubRepositoryData;
		return { repo: data, description };
	});
	return {
		data: await Promise.all(reposData)
	};
}
