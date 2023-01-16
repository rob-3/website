import type colors from '../routes/_colors';

export interface GitHubRepositoryData {
	fork: boolean;
	forks: number;
	html_url: string;
	source: GitHubRepositoryData;
	description: string;
	language: keyof typeof colors;
	stargazers_count: number;
	name: string;
	full_name: string;
}
