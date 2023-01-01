<script lang="ts">
	import GitHubPortfolio from '../components/GitHubPortfolio.svelte';
	import YouTubeVideo from '../components/YouTubeVideo.svelte';
	import talks from './_talks';
	import repos from './_repos';
	import links from './_links';
	// @ts-expect-error this is a special image import
	import robertBoydImg from '../robert-boyd.jpeg?w=192&h=192&webp';
	export const prerender = true;
	const description =
		'A curious student and software developer at the University of Central Florida passionate about programming languages and the web';
</script>

<svelte:head>
	<title>Robert Boyd</title>
	<meta name="description" content={description} />
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
	<p class="m-2">{description}</p>
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
			<h2 class="m-2 sm:m-4">
				<a class="hover:underline" href="/talks">My Talks</a>
			</h2>
			<div class="flex justify-center w-full p-4 sm:mb-4">
				<YouTubeVideo id={talks[0]} />
			</div>
			<a
				class="
				flex items-center
				text-white border border-solid border-black px-4
				py-3 talk-link m-4 rounded-lg no-underline bg-black
				hover:bg-[rgba(0,0,0,0)] hover:text-black transition-all
				"
				href="/talks"
				>All Talks
				<svg
					class="ml-1 h-4 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path
						d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
				/>
			</a>
		</section>
	</div>
</main>
