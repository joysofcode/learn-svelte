<script>
	import { fade } from 'svelte/transition'

	let { children, play = false, options = {} } = $props()
</script>

{#if play}
	<div transition:fade|global={options}>
		{@render children?.()}
	</div>
{/if}
