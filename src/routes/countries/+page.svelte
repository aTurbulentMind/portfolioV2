<script>
	let { data } = $props();
</script>

<br /> <br />
<h1>Countries</h1>
<ul>
	{#each data.countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
