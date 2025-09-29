<script>
	import AddTodo from './AddTodo.svelte'
	import TodoList from './TodoList.svelte'
	import TodoFilter from './TodoFilter.svelte'

	let todos = $state([])
	let filter = $state('all')
	let filteredTodos = $derived(filterTodos())
	let remaining = $derived(remainingTodos())

	function addTodo(e) {
		e.preventDefault()
		const formData = new FormData(this)
		todos.push({
			id: crypto.randomUUID(),
			text: formData.get('todo'),
			completed: false,
		})
		this.reset()
	}

	function toggleTodo(todo) {
		const index = todos.findIndex((t) => t.id === todo.id)
		todos[index].completed = !todos[index].completed
	}

	function updateTodo(todo) {
		const index = todos.findIndex((t) => t.id === todo.id)
		todos[index].text = todo.text
	}

	function removeTodo(todo) {
		todos = todos.filter((t) => t.id !== todo.id)
	}

	function remainingTodos() {
		return todos.filter((todo) => !todo.completed).length
	}

	function setFilter(newFilter) {
		filter = newFilter
	}

	function clearCompleted() {
		todos = todos.filter((todo) => !todo.completed)
	}

	function filterTodos() {
		return todos.filter((todo) => {
			if (filter === 'all') return true
			if (filter === 'active') return !todo.completed
			if (filter === 'completed') return todo.completed
		})
	}
</script>

<div class="todos">
	<AddTodo {addTodo} />
	<TodoList
		todos={filteredTodos}
		{toggleTodo}
		{updateTodo}
		{removeTodo}
	/>
	<TodoFilter {remaining} {setFilter} {clearCompleted} />
</div>
