<script lang="ts">
	let { data } = $props();
	let { user } = $derived(data);
	$inspect(data);
</script>

<h1>Private page for user: {user?.email}</h1>
<h2>Messages</h2>
<ul>
	{#each data.inbox as message}
		<li>{message.contact_point}</li>
		<li>{message.full_name}</li>
		<li>{message.message}</li>
		<li>{message.submitted_at}</li>
		<li>{message.viewed}</li>
	{/each}
</ul>

<!--svelte-ignore css_unused_selector -->
<style>
	h1 {
		font-size: var(--size-5);
	}
</style>
