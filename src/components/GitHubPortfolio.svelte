<script lang="ts">
	import RepoCard from './RepoCard.svelte';
	export let repos: string[] = [];
</script>

<div class="cards">
	{#each repos as repo (repo)}
		<div class="card">
			<RepoCard {repo} />
		</div>
	{/each}
</div>

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
</style>
