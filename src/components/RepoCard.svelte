<script lang="ts">
	import { githubColors } from '../stores/stores';
	export let repo: string | null;
	$: dataPromise = fetch(`https://api.github.com/repos/${repo}`).then((b) => b.json());
</script>

{#await dataPromise}
	<p>loading...</p>
{:then { fork, forks, html_url, name, source, description, language, stargazers_count }}
	<div class="card">
		<div class="center">
			<svg
				style="fill: #586069; margin-right: 8px;"
				viewBox="0 0 16 16"
				version="1.1"
				width="16"
				height="16"
				aria-hidden="true"
				><path
					fill-rule="evenodd"
					d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
				/></svg
			>
			<span style="font-weight: 600; color: #0366d6;">
				<a style="text-decoration: none; color: inherit;" href={html_url}>{name}</a>
			</span>
		</div>
		{#if fork}
			<div style="display: 'block'; font-size: 12px; color: #586069;">
				Forked from <a style="color: inherit; text-decoration: none;" href={source.html_url}
					>{source.full_name}</a
				>
			</div>
		{/if}
		{#if description}
			<div style="font-size: 12px; margin-bottom: 16px; margin-top: 8px; color: #586069;">
				{description}
			</div>
		{/if}
		<div style="font-size: 12px; color: #586069; display: flex;">
			<div style="{language ? '' : 'display: none'}; margin-right: 16px;">
				{#await $githubColors}
					<p>waiting...</p>
				{:then colors}
					<span
						style="width: 12px; height: 12px; border-radius: 100%; background-color: {language
							? colors[language].color
							: ''}; display: inline-block; top: 1px; position: relative;"
					/>
					<span>{language}</span>
				{/await}
			</div>
			{#if stargazers_count !== 0}
				<div style="display: flex; align-items: center; margin-right: 16px;">
					<svg
						style="fill: #586069;"
						aria-label="stars"
						viewBox="0 0 16 16"
						version="1.1"
						width="16"
						height="16"
						role="img"
						><path
							fill-rule="evenodd"
							d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
						/></svg
					>
					&nbsp; <span>{stargazers_count}</span>
				</div>
			{/if}
			{#if forks !== 0}
				<div class="center">
					<svg
						style="fill: #586069;"
						aria-label="fork"
						viewBox="0 0 16 16"
						version="1.1"
						width="16"
						height="16"
						role="img"
						><path
							fill-rule="evenodd"
							d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
						/></svg
					>
					&nbsp; <span>{forks}</span>
				</div>
			{/if}
		</div>
	</div>
{/await}

<style>
	.card {
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,
			Apple Color Emoji, Segoe UI Emoji;
		border: 1px solid #e1e4e8;
		border-radius: 6px;
		background: white;
		padding: 16px;
		font-size: 14px;
		line-height: 1.5;
		color: #24292e;
	}
	.center {
		display: flex;
		align-items: center;
	}
</style>