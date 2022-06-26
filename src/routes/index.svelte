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
		A curious student and software developer at the University of Central Florida passionate about
		programming languages and the web
	</p>
	<div class="flex-horizontal">
		<section class="center projects">
			<h2><a href={links.github}>My Projects</a></h2>
			<GitHubPortfolio {repos} />
		</section>
		<section class="center talks">
			<h2><a sveltekit:prefetch href="/talks">My Talks</a></h2>
			<div class="flex justify-center w-full p-8">
				<YouTubeVideo src={talks[0]} />
			</div>
			<a class="talk-link" sveltekit:prefetch href="/talks">All Talks<i style="margin-left: 0.5em" class="fas fa-angle-double-right"></i></a>
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
		margin-top: 2em;
	}
	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.talk-link {
		display: block;
		border: black 1px solid;
		padding: 0.8em 1em;
		border-radius: 0.5rem;
		text-decoration: none;
		color: white;
		background-color: rgba(0, 0, 0, 1.0);
		transition: all .15s ease-in-out;
		margin: 1em;
	}
	.talk-link:hover {
		color: black;
		background-color: rgba(0, 0, 0, 0)
	}
</style>
