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
	<h1 class="font-medium">Robert Boyd</h1>
</header>
<main class="max-w-max m-auto">
	<p>
		A curious student and software developer at the University of Central Florida passionate about
		programming languages and the web
	</p>
	<div class="flex flex-wrap justify-center mt-4">
		<section class="flex flex-col items-center max-w-[min(70em,100%)] flex-grow basis-[55em]">
			<h2 class="font-normal"><a href={links.github}>My Projects</a></h2>
			<GitHubPortfolio {repos} />
		</section>
		<section class="flex flex-col items-center flex-grow basis-[650px]">
			<h2 class="font-normal"><a sveltekit:prefetch href="/talks">My Talks</a></h2>
			<div class="flex justify-center w-full">
				<YouTubeVideo src={talks[0]} />
			</div>
			<a class="
				block text-white border border-solid border-black px-4
				py-3 talk-link m-4 rounded-lg no-underline bg-black
				hover:bg-[rgba(0,0,0,0)] hover:text-black transition-all
				" 
				sveltekit:prefetch
				href="/talks"
			>All Talks<i class="ml-2 fas fa-angle-double-right"></i></a>
		</section>
	</div>
</main>
