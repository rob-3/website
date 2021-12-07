<script lang="ts">
	import GitHubPortfolio from '../components/GitHubPortfolio.svelte';
	import YouTubeVideo from '../components/YouTubeVideo.svelte';
	import talks from './_talks';
	import repos from './_repos';
	import links from './_links'
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/b6461ef53d.js" crossorigin="anonymous"></script>
</svelte:head>
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
<footer>
	<a href={links.github}><i class="fab fa-github fa-5x"></i></a>
	<a href={links.linkedin}><i class="fab fa-linkedin fa-5x"></i></a>
</footer>

<style>
	footer {
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: 2em;
		box-sizing: border-box;
	}
	footer > * {
		padding: 0 50px;
		color: black;
	}
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
