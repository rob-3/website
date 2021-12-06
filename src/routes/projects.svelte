<script>
	import GitHubPortfolio from '../components/GitHubPortfolio.svelte';
	import repos from './_repos';
</script>

<header>
	<h1><a href="/projects">My Projects</a></h1>
</header>
<main>
	<GitHubPortfolio {repos}/>
</main>
