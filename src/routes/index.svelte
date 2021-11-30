<script>
	import RepoCard from '../components/RepoCard.svelte';
	const repos = [
		'rob-3/steel-lang',
		'knighthacks/scythe',
		'knighthacks/lancelot',
		'knighthacks/hackathon-2021-frontend',
		'knighthacks/club-site-2021'
	];
</script>

<div class="all">
	<header>
		<h1>Robert Boyd</h1>
		<span class="pos">noun</span>
	</header>
	<main>
		<p>
			<span class="super">1</span> a curious student and software developer at the University of Central
			Florida passionate about programming languages and the web
		</p>
		<div class="cards">
			{#each repos as repo (repo)}
				<div class="card">
					<RepoCard {repo} />
				</div>
			{/each}
		</div>
	</main>
</div>

<style>
	.card {
		width: 20em;
		margin: 1.5em;
		font-size: 0.875em;
	}
	* {
		font-family: Roboto;
	}
	h1 {
		font-weight: 100;
		font-size: 3em;
		padding: 0.25em;
		display: inline-block;
	}
	header {
		white-space: nowrap;
		margin: 0.25em;
	}
	main {
		width: min(1300px, 100%);
	}
	.super {
		vertical-align: super;
		font-size: smaller;
	}
	.pos {
		font-weight: bold;
		font-size: 1.5em;
		padding: 0.25em;
	}
	p {
		padding: 0.5em;
		margin: 0 1em;
		text-align: center;
	}
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 1.5em;
		font-size: 1rem;
	}
	.all {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media screen and (min-width: 640px) {
		h1 {
			font-size: 4em;
		}
		.pos {
			font-size: 2em;
		}
	}
</style>
