<script lang="ts">
	type ClearCompletedType = () => void;

	export let completedTodos: number;
	export let clearCompleted: ClearCompletedType;
</script>

<button
	on:click={clearCompleted}
	class:hidden={completedTodos === 0}
	class="clear-completed"
>
	Clear completed
</button>
