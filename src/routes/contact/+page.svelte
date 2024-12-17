<script lang="ts">
	import Twitt from '$lib/svg/birdy.svelte'
	import Insta from '$lib/svg/insta.svelte'
	import FaBoo from '$lib/svg/faBoo.svelte'

	import { enhance } from '$app/forms'

	let formSubmitted = false

	const handleSubmit = () => {
		formSubmitted = true
	}
</script>

<svelte:head>
	<title>Lantern Light Development Contact</title>
	<meta
		name="description"
		content="Welcome to the Lantern Light Development contact page. A great way to reach out."
	/>
	<meta name="keywords" content="web development, web design, software development" />
	<meta property="og:title" content="Lantern Light Development Contact" />
	<meta
		property="og:description"
		content="Welcome to the Lantern Light Development contact page. A great way to reach out."
	/>
	<meta property="og:image" content="$lib/img/backHero29.png" />
	<meta property="og:url" content="https://www.lanternlightdevelopment.com/" />
	<meta name="twitter:card" content="$lib/img/backHero29.png" />
</svelte:head>

<header class=" head_Line">
	<h1>Contact:</h1>
</header>

<main>
	<!-- form to submit a message -->
	{#if !formSubmitted}
		<form
			class="classicForm"
			method="post"
			action="?/submit"
			use:enhance={({ formElement, formData, action, cancel }) => {
				return async ({ result, update }) => {
					if (result.type === 'success') {
						handleSubmit()
						await update()
					}
				}
			}}
			enctype="multipart/form-data"
		>
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

			<button class="button-Ghost" type="submit">Submit</button>
		</form>
	{:else}
		<p>Thank you for the message! I will get back to you as soon as I can.</p>
	{/if}

	<section class="follow">
		<a href="https://bsky.app/profile/soturbulent.bsky.social/"> <svg><Twitt /> </svg></a>
		<a href="https://www.instagram.com/lanternlightdevelopment/"><svg> <Insta /></svg> </a>
		<a href="https://www.facebook.com/profile.php?id=100078803221612/"><svg><FaBoo /></svg> </a>
	</section>
</main>

<!--svelte-ignore css-unused-selector -->
<style>
	/* Reflective Follow  */
	.follow {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		text-transform: uppercase;

		& a {
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			padding: var(--size-4);
			margin: 0 4%;
			color: var(--txt-1);
			text-decoration: none;
			overflow: hidden;
			transition: var(--ani-Speed);
			-webkit-box-reflect: below 1px linear-gradient(transparent, #0003);
		}

		& svg {
			width: 8vw;
			height: 8vh;
		}

		& a:hover {
			background: #e42886;
			color: rgb(201, 201, 201);
			box-shadow: 0 0 50px #e42886;
			transition-delay: var(--ani-Speed);
		}

		& a:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 10px;
			height: 10px;
			border-top: 2px solid var(--txt-1);
			border-left: 2px solid var(--txt-1);
			transition: var(--transit);
		}

		& a:hover:before {
			width: 100%;
			height: 100%;
			border-top: 2px solid var(--bg-2);
			border-left: 2px solid var(--bg-2);
			transition: var(--transit);
		}

		& a:after {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			width: 10px;
			height: 10px;
			border-bottom: 2px solid var(--txt-1);
			border-right: 2px solid var(--txt-1);
			transition: var(--transit);
			transition: var(--transit);
		}

		& a:hover:after {
			width: 100%;
			height: 100%;
			border-bottom: 2px solid var(--bg-2);
			border-right: 2px solid var(--bg-2);
			transition: var(--transit);
		}

		& a:nth-child(1) {
			filter: hue-rotate(215deg);
		}

		& a:nth-child(3) {
			filter: hue-rotate(270deg);
		}

		@media (min-width: 1024px) {
			& a {
				height: 12vh;
				width: 8vw;
			}

			& a:before,
			& a:after {
				width: 2vw;
				height: 2vh;
			}

			& svg {
				width: 6vw;
				height: 6vh;
			}
		}
	}
</style>
