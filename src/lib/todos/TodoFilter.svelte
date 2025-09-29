<script>
	let { remaining, setFilter, clearCompleted } = $props()
</script>

<div>
	<p>{remaining} {remaining === 1 ? 'item' : 'items'} left</p>

	<div class="filters">
		{#each ['all', 'active', 'completed'] as filter}
			<button onclick={() => setFilter(filter)}>{filter}</button>
		{/each}

		<button onclick={clearCompleted}>Clear completed</button>
	</div>
</div>
