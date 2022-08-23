<script lang="ts">
	import '../app.css';
	import links from './_links';
</script>

<div>
	<slot />
	<footer class="text-black flex justify-around sm:justify-center sm:gap-10 py-6">
		<a class="hover:opacity-60" href={links.github}>
			<div class="flex flex-col items-center">
				<i class="fab fa-github fa-5x no-underline" />
				<span>GitHub</span>
			</div>
		</a>
		<a class="hover:opacity-60" href="/">
			<div class="flex flex-col items-center">
				<i class="fas fa-home fa-5x no-underline" />
				<span>Home</span>
			</div>
		</a>
		<a class="hover:opacity-60" href={links.linkedin}>
			<div class="flex flex-col items-center">
				<i class="fab fa-linkedin fa-5x no-underline" />
				<span>LinkedIn</span>
			</div>
		</a>
	</footer>
</div>
