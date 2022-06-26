import { type Readable, writable } from 'svelte/store';
import { browser } from '$app/env';

export const githubColors = writable(
	fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json').then((blob) =>
		blob.json()
	)
);

export interface GitHubRepositoryData {
	fork: boolean;
	forks: number;
	html_url: string;
	source: GitHubRepositoryData;
	description: string;
	language: string;
	stargazers_count: number;
	name: string;
	full_name: string;
}

export type GhState = {
	data?: GitHubRepositoryData;
	loading: boolean;
	err?: string;
}

const GithubRepos = (): Readable<Record<string, GhState>> & { getRepo: (repo: string) => void } => {
	if (browser) {
		localStorage.githubRequests ??= JSON.stringify({});
	}
	const { subscribe, update } = writable<Record<string, GhState>>(
		browser ? JSON.parse(localStorage.githubRequests) : {}
	);
	return {
		subscribe,
		getRepo: (repo: string) => {
			if (browser) {
				const storage: Record<string, GhState> = JSON.parse(localStorage.githubRequests);
				if (storage[repo]?.loading || storage[repo]?.data) return;
				update((old) => ({ ...old, [repo]: { loading: true } }));
				fetch(`/api/github-api/${repo}`)
					.then((rsp) => rsp.json())
					.then((data) => {
						if (data.name) {
							update((old) => ({ ...old, [repo]: { loading: false, data } }));
							localStorage.githubRequests = JSON.stringify({
								...JSON.parse(localStorage.githubRequests),
								[repo]: { loading: false, data }
							});
						} else {
							update((old) => ({ ...old, [repo]: { err: JSON.stringify(data), loading: false } }));
						}
					});
			} else {
				update((old) => ({ ...old, [repo]: { loading: true } }));
			}
		}
	};
};

export const githubRequests = GithubRepos();
