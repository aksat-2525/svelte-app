<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { enhance } from "$app/forms";

	type Todo = {
		id: number | string;
		description: string;
		done: boolean;
	};

	// Adjust the type of data to match your actual data structure
	let { data, form }: { data: { todos: Todo[] }, form: any } = $props();

	let creating = $state(false);
	let deleting = $state<(number | string)[]>([]);
</script>

<div class="centered">
	<h1>todos</h1>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

	<form method="POST"
          action="?/create" 
          use:enhance={() => {
            creating = true;
            
            return async ({ update }) => {
                await update();
                creating = false;
            };
        }}
    >
		<label>
			add a todo:
			<input
                disabled={creating}
				name="description"
				value={form?.description ?? ''}
				autocomplete="off"
				required
			/>
		</label>
	</form>

	<ul class="todos">
		{#each data.todos.filter((todo) => !deleting .includes(todo.id)) as todo (todo.id)}
			<li in:fly={{ y:20 }} out:slide>
				<form
                    method="POST" 
                    action="?/delete" 
                    use:enhance={() => {
                        deleting = [...deleting, todo.id];
                        return async ({ update }) => {
                            await update();
                            deleting = deleting.filter((id) => id !== todo.id);
                        };
                    }}
                >
					<input type="hidden" name="id" value={todo.id} />
					<span>{todo.description}</span>
					<button aria-label="Mark as complete"></button>
				</form>
			</li>
		{/each}
	</ul>

    {#if creating}
        <span class="saving">saving...</span>
    {/if}
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

</style>
