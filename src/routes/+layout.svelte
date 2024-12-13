<script lang="ts">
	import '$lib/styles/baseCamp.svelte';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	//➖ ➖ ➖ ➖ ➖ 🦖➖ ➖ ➖ 🌟  🌟  🌟

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	//➖ ➖ ➖ ➖ ➖ 🦖➖ ➖ ➖ 🌟  🌟  🌟

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Nav />
<slot />

<Footer />

<!--svelte-ignore css-unused-selector -->
<style></style>
