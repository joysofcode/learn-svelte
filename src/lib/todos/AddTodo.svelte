<script>
	let { addTodo } = $props()
</script>

<form onsubmit={addTodo}>
	<input type="text" placeholder="Add todo" name="todo" />
</form>
