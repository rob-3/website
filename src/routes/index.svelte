<script lang="ts">
	import GitHubPortfolio from '../components/GitHubPortfolio.svelte';
	import YouTubeVideo from '../components/YouTubeVideo.svelte';
	import talks from './_talks';
	import repos from './_repos';
	import links from './_links'
</script>

<header>
	<h1>Robert Boyd</h1>
</header>
<main>
	<p>
		a curious student and software developer at the University of Central Florida passionate about
		programming languages and the web
	</p>
	<div class="flex-horizontal">
		<section class="center projects">
			<h2><a href={links.github}>My Projects</a></h2>
			<GitHubPortfolio {repos} />
		</section>
		<section class="center talks">
			<h2><a sveltekit:prefetch href="/talks">My Talks</a></h2>
			<YouTubeVideo src={talks[0]} />
			<a sveltekit:prefetch href="/talks">All Talks</a>
		</section>
	</div>
</main>

<style>
	.projects {
		flex-basis: 55em;
		max-width: min(70em, 100%);
		flex-grow: 1;
	}
	.talks {
		flex-basis: 650px;
		flex-grow: 1;
	}
	.flex-horizontal {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
