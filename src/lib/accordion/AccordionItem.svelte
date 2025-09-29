<script>
	import { getContext } from 'svelte'

	let { accordionItem } = $props()

	const accordion = getContext('accordion')
	let open = $derived(accordion.open)

	function toggle() {
		open = !open
	}
</script>

<div class="accordion-item">
	{@render accordionItem?.({ open, toggle })}
</div>
