<script>
	import TodoItem from './TodoItem.svelte'

	let { todos, toggleTodo, updateTodo, removeTodo } = $props()
</script>

<ul>
	{#each todos as todo (todo)}
		<TodoItem {todo} {toggleTodo} {updateTodo} {removeTodo} />
	{/each}
</ul>
