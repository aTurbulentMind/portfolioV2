<script>
	import ItsMe from '$lib/img/myFace.jpg';
	import Nature1 from '$lib/img/nature1.jpg';
</script>

<svelte:head>
	<title>Lantern Light Development About</title>
	<meta
		name="description"
		content="Welcome to the Lantern Light Development about me page. This is a little bit about me."
	/>
	<meta name="keywords" content="web development, web design, software development" />
	<meta property="og:title" content="Lantern Light Development About Me" />
	<meta
		property="og:description"
		content="Welcome to the Lantern Light Development About Me page. This is a little bit about me."
	/>
	<!-- <meta property="og:image" content="$lib/img/backHero29.png" /> -->
	<meta property="og:url" content="https://www.lanternlightdevelopment.com/" />
	<meta name="twitter:card" content="$lib/img/backHero29.png" />
</svelte:head>

<header class="head_Line">
	<h1>About:</h1>
</header>

<main>
	<img class="face" src={ItsMe} alt="its my face" />

	<h1>Joel Rivers</h1>

	<p>
		I picked up website development a few years ago. While working in a retail store. I spent down
		time learning about building a new website for the shop. Something magic happened and I easily
		found myself addicted. One realm of learning bled into another. As the wealth of knowledge grew,
		so did the interest in learning more. I've done it for fun, but I want to use my skills to help
		people who need it.
	</p>

	<p>
		I do spend some time with fun things like going to concerts, playing video games or working in
		the yard. Hiking, walking the dog and backpacking is another nice escape from everything else.
	</p>

	<img src={Nature1} alt="a sunny day on top of a mountain at a lake. It is serene" />
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	img {
		width: 60%;
		margin: 0 20%;
	}

	/* Tablet Size */
	@media (min-width: 768px) {
		.face {
			width: 35%;
			margin: 0 30%;
		}
	}
</style>
