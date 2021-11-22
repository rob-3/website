<script lang="ts">
	export let n: number;
	export let selected: number;
</script>

<div>
	{#each { length: n } as _, i}
		<span class={"dot" + (i === selected ? " selected" : "")} />
	{/each}
</div>

<style>
	span {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #364D74;
		display: inline-block;
		margin: 15px 5px;
	}
	div {
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.selected {
		background-color: #FFFFFF;
	}
</style>
