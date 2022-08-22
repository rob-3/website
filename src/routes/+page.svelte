<script lang="ts">
	import GitHubPortfolio from '../components/GitHubPortfolio.svelte';
	import YouTubeVideo from '../components/YouTubeVideo.svelte';
	import talks from './_talks';
	import repos from './_repos';
	import links from './_links';
	// @ts-expect-error
	import robertBoydImg from '../robert-boyd.jpeg?w=192&h=192&webp';
	export const prerender = true;
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/b6461ef53d.js" crossorigin="anonymous"></script>
</svelte:head>
<header class="flex flex-wrap justify-center items-center w-fit m-auto my-4">
	<img
		src={robertBoydImg}
		alt="Robert Boyd"
		class="inline-block rounded-full w-24 h-24 sm:w-28 sm:h-28"
	/>
	<h1>Robert Boyd</h1>
</header>
<main class="max-w-max m-auto">
	<p class="m-2">
		A curious student and software developer at the University of Central Florida passionate about
		programming languages and the web
	</p>
	<div class="flex flex-wrap justify-center sm:mt-4">
		<section
			class="
			flex flex-col items-center max-w-[min(70em,100%)]
			flex-grow basis-[55em] mt-2 sm:mt-6 mb-6
			"
		>
			<h2 class="m-2 sm:m-4"><a class="hover:underline" href={links.github}>My Projects</a></h2>
			<div class="m-2 sm:m-4">
				<GitHubPortfolio {repos} />
			</div>
		</section>
		<section class="flex flex-col items-center flex-grow basis-[650px] mt-2 sm:mt-6 mb-6">
			<h2 class="m-2 sm:m-4"><a class="hover:underline" sveltekit:prefetch href="/talks">My Talks</a></h2>
			<div class="flex justify-center w-full p-4 sm:mb-4">
				<YouTubeVideo src={talks[0]} />
			</div>
			<a
				class="
				block text-white border border-solid border-black px-4
				py-3 talk-link m-4 rounded-lg no-underline bg-black
				hover:bg-[rgba(0,0,0,0)] hover:text-black transition-all
				"
				sveltekit:prefetch
				href="/talks">All Talks<i class="ml-2 fas fa-angle-double-right" /></a
			>
		</section>
	</div>
</main>
