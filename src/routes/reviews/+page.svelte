<script>
	import Wsrd from '$lib/img/wsrd.png'
	import ArtCount from '$lib/img/artCountV4.png'
	import RandReci from '$lib/img/food.png'
	import RandShop from '$lib/img/shoppo.png'
	import DebtSite from '$lib/img/debtBanner.png'
</script>

<header class="head_Line">
	<h1>Completed( or mostly completed) work:</h1>
</header>

<svelte:head>
	<title>Lantern Light Development Projects</title>
	<meta
		name="description"
		content="Welcome to the Lantern Light Development Previous Projects Page. "
	/>
	<meta name="keywords" content="web development, web design, software development" />
	<meta property="og:title" content="Lantern Light Development Previous Projects Page" />
	<meta
		property="og:description"
		content="Welcome to the Lantern Light Development Previous Projects Page. "
	/>
	<meta property="og:image" content="$lib/img/backHero29.png" />
	<meta property="og:url" content="https://www.lanternlightdevelopment.com/" />
	<meta name="twitter:card" content="$lib/img/backHero29.png" />
</svelte:head>

<section>
	<article class="LR_block">
		<img src={Wsrd} alt="West Sound RD project screenshot" />
		<h3>West Sound RD (Full stack)</h3>
		<p>
			This project marked a big step forward in both complexity and refinement, expanding on
			previous ideas of managing and interacting with website content directly from the page.
		</p>
		<a class="pulse-button" href="https://westsoundrd2.netlify.app/">Check it out</a>
		<a class="pulse-button" href="/reviews/wsrd">Read about this project</a>
	</article>

	<article class="LR_block_l">
		<img src={ArtCount} alt="3D counter-top store project screenshot" />
		<h3>3D counter-top store (3D)</h3>
		<p>
			I took a course on building 3D websites. This was a way for me to start to understand the
			concepts.
		</p>
		<a class="pulse-button" href="https://artisan-countertop-v4.netlify.app/">Check it out</a>
	</article>

	<article class="LR_block">
		<img src={RandReci} alt="Table Tango project screenshot" />
		<h3>Table Tango (API calling)</h3>
		<p>
			I got tired of trying to figure out dinner. So I made a random recipe generator to get better
			at learning how to display fetched data.
		</p>
		<a class="pulse-button" href="https://table-tango.netlify.app/">Check it out</a>
	</article>

	<article class="LR_block_l">
		<img src={RandShop} alt="Random store website screenshot" />
		<h3>Random Store</h3>
		<p>I built this page to learn about making an online storefront.</p>
		<a class="pulse-button" href="https://sky-high-shop-test.netlify.app/">Check it out</a>
	</article>

	<article class="LR_block">
		<img src={DebtSite} alt="Debt collection company website screenshot" />
		<h3>DEBT$NET</h3>
		<p>
			The original site was made in 1995 and sure felt like it. So I brought them into the future.
		</p>
		<a class="pulse-button" href="https://debtnet5build.netlify.app/">Check it out</a>
	</article>
</section>

<!--svelte-ignore css-unused-selector -->
<style>
	.testBox {
		margin-left: 15vw;
	}
</style>
