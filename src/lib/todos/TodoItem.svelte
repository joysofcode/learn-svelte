<script>
	import { slide } from 'svelte/transition'

	let { todo, toggleTodo, updateTodo, removeTodo } = $props()
</script>

<li transition:slide>
	<input
		type="checkbox"
		checked={todo.completed}
		onchange={() => toggleTodo(todo)}
	/>
	<input
		type="text"
		value={todo.text}
		oninput={() => updateTodo(todo)}
	/>
	<button onclick={() => removeTodo(todo)}>🗙</button>
</li>
