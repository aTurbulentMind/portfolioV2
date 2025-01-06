<svelte:head>
	<title>Lantern Light Development Services</title>
	<meta name="description" content="Welcome to the Lantern Light Development Services Page. " />
	<meta name="keywords" content="web development, web design, software development" />
	<meta property="og:title" content="Lantern Light Development Services Page" />
	<meta
		property="og:description"
		content="Welcome to the Lantern Light Development Services Page. "
	/>
	<!-- <meta property="og:image" content="$lib/img/backHero29.png" /> -->
	<meta property="og:url" content="https://www.lanternlightdevelopment.com/" />
	<!-- <meta name="twitter:card" content="$lib/img/backHero29.png" /> -->
</svelte:head>

<header class="head_Line">
	<h1>Services:</h1>
</header>

<main>
	<section>
		<h2>Pricing Tiers</h2>
		<p>
			Every project is unique, and pricing varies based on scope and complexity. My goal is to
			deliver exceptional results while keeping costs fair and transparent.
		</p>

		<article class="price-box">
			<div class="tier">
				<h3>Simple</h3>
				<p>
					Perfect for those who know exactly what they need. You provide the vision, including the
					color scheme, features, and design preferences, and I bring it to life with a static or
					lightly functional website.
				</p>
			</div>

			<div class="tier">
				<h3>Moderate</h3>
				<p>
					Ideal if you have a general idea but need some guidance to shape your vision. Together,
					we’ll refine your ideas into a cohesive, functional website.
				</p>
			</div>

			<div class="tier">
				<h3>"I’ll Handle It"</h3>
				<p>
					For when you have a jumble of brilliant ideas but need someone to make them happen. We’ll
					collaborate to turn your concepts into a polished, professional site.
				</p>
			</div>
		</article>
	</section>

	<section>
		<h2>How It Works</h2>
		<p>
			I follow a structured process to ensure your project is completed efficiently and to the
			highest standard. Here's what to expect:
		</p>
		<ul class="steps">
			<li>
				<strong>Planning:</strong> We’ll discuss your goals, brainstorm ideas, and create a clear plan
				for your website.
			</li>
			<li>
				<strong>Design:</strong> I’ll craft a layout, color palette, and design that reflect your brand
				and message.
			</li>
			<li>
				<strong>Development:</strong> Your website will be built from the ground up, tailored to your
				specifications.
			</li>
			<li>
				<strong>Testing:</strong> Every detail will be tested across different devices and browsers to
				ensure it works seamlessly.
			</li>
			<li>
				<strong>Deployment:</strong> Your website goes live and is ready to make an impact!
			</li>
			<li>
				<strong>Support:</strong> Enjoy free support for the first year to address any unforeseen issues
				or updates.
			</li>
			<li>
				<strong>Management:</strong> Take it further with advanced features like analytics, tracking,
				and audience engagement tools.
			</li>
		</ul>
	</section>
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	.price-box {
		display: grid;
		grid-template-columns: 1fr;
	}

	.tier {
		margin: var(--space-Qtr);
		color: var(--txt-2);
		background: var(--bg-2);
		border-radius: var(--rad-Lg);
		padding: var(--size-1);
	}

	.steps {
		margin: var(--space-Qtr);
		& li {
			background-color: var(--accent-1);
			color: var(--bg-1);
			border: var(--bord);
			border-radius: var(--rad-Lg);
			padding: var(--size-5);
			margin: var(--size-4) 0;
		}
	}

	/* Tablet Size */
	@media only screen and (min-width: 768px) {
		.price-box {
			grid-template-columns: 1fr 1fr;
		}

		.steps {
			& li {
				font-size: var(--size-6);
				margin: 0;
				padding: var(--size-4);

				& p {
					font-weight: 400;
				}
			}
		}
	}

	/* Laptop Size */
	@media only screen and (min-width: 1024px) {
		.price-box {
			width: 100vw;

			& .tier {
				height: fit-content;

				& h2,
				p {
					margin: 0;
					padding: var(--size-4);
				}
			}
		}

		.steps {
			display: flex;
			flex-wrap: wrap;
			list-style: decimal inside;
			margin-left: 5%;
		}

		.steps li {
			width: 47%;
			margin: 1%;
		}
	}

	/* Desktop Size */
	@media only screen and (min-width: 1440px) {
		.tier {
			& h3 {
				margin: var(--space-Sm);
			}
		}
	}
</style>
