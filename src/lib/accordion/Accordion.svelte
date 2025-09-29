<script>
	import { setContext } from 'svelte'

	let { open = $bindable(), children } = $props()

	setContext('accordion', {
		get open() {
			return open
		},
	})
</script>

<div class="accordion">
	{@render children?.()}
</div>
