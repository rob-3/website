import { type Writable, writable } from 'svelte/store';

export const githubColors = writable(
	fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json').then((blob) =>
		blob.json()
	)
);

type GitHubRepositoryData = {
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

// api cache
export const githubRequests: Writable<Record<string, Promise<GitHubRepositoryData>>> = writable({});
