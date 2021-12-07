<script lang="ts">
	import RepoCard from '../components/RepoCard.svelte';
	import reposList from './_repos';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	let repos = reposList;
	let triggered = false;
	function onClick(repoSlug: string) {
		if (!triggered) {
			repos = [reposList.find((r) => r.repo === repoSlug)];
		} else {
			repos = reposList;
		}
		triggered = !triggered;
	}
</script>

<header>
	<h1><a href="/projects">My Projects</a></h1>
</header>
<main>
	<div class="cards">
		{#each repos.map((r) => r.repo) as repo (repo)}
			<div animate:flip={{ duration: 500 }} class="card">
				<RepoCard on:click={() => onClick(repo)} {repo} />
			</div>
		{/each}
	</div>
	{#if repos.length === 1}
		<div in:fade class="description">{@html repos[0].description}</div>
	{/if}
</main>

<style>
	.card {
		width: 20em;
		margin: 1.5em;
		font-size: 0.875em;
	}
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 1.5em;
		font-size: 1rem;
	}
	.description {
		width: 40em;
		height: 15em;
		background-color: white;
		border: 1px solid #e1e4e8;
		box-sizing: border-box;
		box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.2), 0 0.375em 1.25em 0 rgba(0, 0, 0, 0.19);
		border-radius: 0.375em;
		padding: 1.2em;
	}
</style>
