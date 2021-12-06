<script>
	import RepoCard from '../components/RepoCard.svelte';
	import YouTubeVideo from '../components/YouTubeVideo.svelte';
	import talks from './_talks';
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
	</header>
	<main>
		<p>
			a curious student and software developer at the University of Central Florida passionate about
			programming languages and the web
		</p>
		<section class="center">
			<h2>My Projects</h2>
			<div class="cards">
				{#each repos as repo (repo)}
					<div class="card">
						<RepoCard {repo} />
					</div>
				{/each}
			</div>
		</section>
		<section class="center">
			<h2>Most Recent Talk</h2>
			<YouTubeVideo src={talks[0]}/>
		</section>
	</main>
</div>

<style>
	h2 {
		font-weight: 300;
		font-size: 2em;
		margin-top: 1em;
	}
	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
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
	.all {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
