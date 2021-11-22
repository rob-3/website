<script>
	import RepoCard from "../components/RepoCard.svelte"
</script>

<main>
	<div class="head"><h1>Robert Boyd</h1><span class="pos">noun</span></div>
	<p>
		<span class="super">1</span> a curious student and software developer at the University of Central Florida passionate
		about programming languages and the web
	</p>
	<RepoCard repo="rob-3/steel-lang"/>
</main>

<style>
	* {
		font-family: Roboto;
	}
	main {
		overflow: hidden;
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
