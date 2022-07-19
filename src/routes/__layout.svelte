<script lang="ts">
	import "../app.css";
	import links from './_links';
</script>

<div>
	<slot />
	<footer class="text-black flex justify-center p-6">
		<a class="hover:opacity-60 mx-8" href={links.github}><i class="fab fa-github fa-5x" /></a>
		<a class="hover:opacity-60 mx-8" href="/"><i class="fas fa-home fa-5x"></i></a>
		<a class="hover:opacity-60 mx-8" href={links.linkedin}><i class="fab fa-linkedin fa-5x" /></a>
	</footer>
</div>
