<script>
	import Wsrd from '$lib/img/wsrd.png';
	import ArtCount from '$lib/img/artCountV4.png';
	import RandReci from '$lib/img/food.png';
	import { enhance } from '$app/forms';

	let formSubmitted = $state(false);

	const handleSubmit = () => {
		formSubmitted = true;
	};
</script>

<svelte:head>
	<title>Lantern Light Development Homepage</title>
	<meta
		name="description"
		content="Welcome to the Lantern Light Development  homepage. Seeking to help people the way they want."
	/>
	<meta name="keywords" content="web development, web design, software development" />
	<meta property="og:title" content="Lantern Light Development Homepage" />
	<meta
		property="og:description"
		content="Welcome to the Lantern Light Development  homepage. Seeking to help people the way they want."
	/>
	<meta property="og:image" content="$lib/img/backHero29.png" />
	<meta property="og:url" content="https://www.lanternlightdevelopment.com/" />
	<meta name="twitter:card" content="$lib/img/backHero29.png" />
</svelte:head>

<!--welcome info-->

<header id="hero-banner" class="hero-banner">
	<h1 class="banner-text">Lantern Light Development</h1>

	<!-- form to submit a message -->
	<section class="banner-form">
		{#if !formSubmitted}
			<form
				class="classicForm"
				method="post"
				action="?/submit"
				use:enhance={({ formElement, formData, action, cancel }) => {
					return async ({ result, update }) => {
						if (result.type === 'success') {
							handleSubmit();
							await update();
						}
					};
				}}
				enctype="multipart/form-data"
			>
				<p>Reach out</p>
				<label for="full_name">Name</label>
				<input type="text" id="full_name" name="full_name" placeholder="Enter your name" required />

				<label for="contact_point">Email</label>
				<input
					type="text"
					id="contact_point"
					name="contact_point"
					placeholder="Enter your email"
					required
				/>

				<label for="message">Message</label>
				<textarea id="message" name="message" placeholder="Enter your message" required></textarea>

				<button class="ripple-btn" type="submit">Submit</button>
			</form>
		{:else}
			<p class="glass-Box">Thank you for the message! I will get back to you as soon as I can.</p>
		{/if}
	</section>
</header>

<section>
	<h2>Your Partner in Making a Difference</h2>

	<p>
		There are so many options when it comes to web development, and it can feel overwhelming. I'm
		here to make it easier. I’m not here to empty your budget—I believe in offering fair, accessible
		help to those who need it most. My goal is simple: to give you the tools you need to succeed, no
		matter your starting point.
	</p>
	<a href="/contact/" class="button-Ghost">Reach out</a>
	<ul class="marg_Also">
		Hours of Operation:
		<li>Monday-Friday: 7:30am-6pm (Pst)</li>
		<li>Saturday & Sunday: Closed</li>
	</ul>
</section>

<section class="glass-Box-2">
	<h2>About Me</h2>
	<p>
		I’ve spent over six years studying and building websites, including a few years working at a
		software company where I learned the ins and outs of full-stack web development. Now, I’m
		focused on putting my skills to work for people who want to make a difference.
	</p>
</section>

<section>
	<h2>Why would I do this?</h2>
	<p>
		I believe in helping people who are working to create a better world. Nonprofits and small
		companies often operate on tight budgets and big dreams—I’m here to be a partner in making those
		goals achievable.
	</p>
</section>

<section>
	<h2>Check out some of my projects:</h2>
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
</section>

<ender>
	<p>And if you are curious, you can click <a href="/about/">here</a> to learn about me</p>
</ender>

<!--svelte-ignore css_unused_selector -->
<style>
	/* entry banner */
	header {
		position: relative;
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		background-image: url('$lib/img/backHero27.png');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		z-index: 999;
		color: var(--txt-2);
	}

	.banner-text {
		display: grid;
		font-size: var(--size-9);
		font-weight: 700;
	}

	.banner-phrase {
		display: grid;
		border-radius: var(--rad-Sm);
		align-self: center;
		justify-self: center;
		box-shadow: var(--box-Shadow);

		& p {
			font-size: var(--size-7);
			padding: var(--space-Sm);
			margin: 0;
		}
	}

	.phrase {
		text-decoration: underline;
		font-size: var(--size-7);
		animation: slideUp 2s infinite;
		padding: 0;
		margin: 0;
	}

	.banner-form {
		& p {
			margin: var(--space-Sm);
		}
	}

	.button-Ghost {
		margin: var(--space-Med);
	}

	.glass-Box-2 {
		height: 50vh;

		& h2 {
			padding-top: 20%;

			@media screen and (min-width: 768px) {
				padding-top: 5%;
			}
		}

		@media screen and (min-width: 1024px) {
			height: 75vh;
		}
	}

	/* Tablet  SIze  */
	@media only screen and (min-width: 766px) {
		header {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}

		.banner-text {
			grid-column: span 2;
			margin: var(--space-Sm);
		}

		.banner-phrase {
			width: 80%;
			margin-top: -5vh;
		}

		.banner-form {
			width: 100%;
			& input,
			textarea {
				width: 100%;
			}
		}
	}

	@media only screen and (min-width: 1024px) {
		.button-Ghost {
			margin: var(--space-Lg);
			margin-top: -15vh;
			margin-bottom: -15vh;
		}
	}

	/* Big screens */
	@media only screen and (min-width: 1440px) {
		.banner-text {
			padding: 0;
			margin: var(--space-Side);
			grid-row: span 2;
		}

		.banner-phrase {
			font-size: var(--size-8);
			margin-top: -25vh;
		}
	}
</style>
