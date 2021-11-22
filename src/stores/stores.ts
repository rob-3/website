import { writable } from 'svelte/store';

export const githubColors = writable(
	fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json').then((blob) =>
		blob.json()
	)
);
