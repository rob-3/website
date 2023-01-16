import type { PageServerLoad } from './$types';
import repos from '../routes/_repos';
import type { GitHubRepositoryData } from '../types/GitHubRespositoryData';

export const load: PageServerLoad = async ({ fetch }) => {
	const reposData = repos.map(async (repo) => {
		const data = await fetch(`https://api.github.com/repos/${repo}`, {
			headers: {
				authorization: `token ${import.meta.env.VITE_githubApiToken}`,
				'user-agent': 'node.js'
			}
		}).then((rsp) => rsp.json()) as GitHubRepositoryData;
		return data;
	});
	return {
		data: await Promise.all(reposData)
	};
}
