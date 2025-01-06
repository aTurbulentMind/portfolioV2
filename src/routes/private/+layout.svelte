<script>
	let { data, children } = $props();
	let { supabase } = $derived(data);

	const logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
	};
</script>

<footer>
	<nav>
		<a href="/">Home</a>
	</nav>
	<button class="button-Ghost" onclick={logout}>Logout</button>
</footer>
<main>
	{@render children()}
</main>

<style>
	footer {
		background-color: var(--bg-2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 5vh;
		padding: var(--space-Sm);

		& a {
			color: var(--txt-1);
		}

		@media screen and (min-width: 1024px) {
			height: 10vh;
		}
	}
</style>
