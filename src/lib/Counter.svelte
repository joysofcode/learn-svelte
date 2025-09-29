<script module>
	let count = $state(0)

	export function reset() {
		count = 0
	}

	export { icon }
</script>

<button onclick={() => count++}>{count}</button>

{#snippet icon(width = 24, height = 24)}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		{width}
		{height}
		viewBox="0 0 24 24"
	>
		<circle cx="50%" cy="50%" r="50%" fill="orangered" />
	</svg>
{/snippet}
