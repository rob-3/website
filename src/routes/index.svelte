<script>
	import RepoCard from "../components/RepoCard.svelte"
</script>

<header class="head">
	<h1>Robert Boyd</h1><span class="pos">noun</span>
</header>
<main>
	<p>
		<span class="super">1</span> a curious student and software developer at the University of Central Florida passionate
		about programming languages and the web
	</p>
	<div class="card">
		<RepoCard repo="rob-3/steel-lang" />
	</div>
	<div class="card">
		<RepoCard repo="knighthacks/scythe"/>
	</div>
	<div class="card">
		<RepoCard repo="knighthacks/lancelot"/>
	</div>
	<div class="card">
		<RepoCard repo="knighthacks/hackathon-2021-frontend"/>
	</div>
	<div class="card">
		<RepoCard repo="knighthacks/club-site-2021"/>
	</div>
</main>

<style>
	.card {
		width: 20em;
		margin: 2em;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
	.head {
		white-space: nowrap;
		margin: 0.25em;
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
