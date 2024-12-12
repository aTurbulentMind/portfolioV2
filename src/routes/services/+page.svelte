<div class=" head_Line">
	<h1>Services:</h1>
</div>

<p>
	The price of the product varies between the scope of the project. I'm an economic human and always
	attempt to give people the best product I can to exceed expectations.
</p>

<priceBox>
	<offer>
		<h2>Simple</h2>
		<p>
			You know what you want, the color scheme you prefer, the features you would like and the site
			is static or has very light functionality.
		</p>
	</offer>

	<offer>
		<h2>Moderate</h2>
		<p>
			You have an idea of your plan and general idea, but not quite sure of what you want and need a
			bit of guidance.
		</p>
	</offer>

	<offer>
		<h2>I'll handle it.</h2>
		<p>
			You want to get a site up and running, but not sure how to put the jumble of brilliant ideas
			together or make it happen. We can talk our way through it as a team.
		</p>
	</offer>
</priceBox>

<h2>Production Steps</h2>

<ul class="steps">
	<li>
		Planning
		<p>
			We can talk our way through it as a team. We will work our way through building the idea of
			your website
		</p>
	</li>
	<li>
		Design
		<p>
			The color, layout, and design of your website will be created after deep consideration to how
			you want to be expressed.
		</p>
	</li>
	<li>
		Development
		<p>
			This is the phase of building your website from nothing. We want everything to be as you want
			it.
		</p>
	</li>
	<li>
		Testing
		<p>
			This is where we will begin to test across different screens, platforms and browsers to make
			sure everything is crisp, pixel perfect and as bug free as possible.
		</p>
	</li>
	<li>
		Deployment
		<p>
			This is where DR Frankenstein screams about the creation coming to life. Your site will become
			a living thing at this point.
		</p>
	</li>
	<li>
		Support
		<p>
			Support will continue for free for the first year for anything that comes up that we did not
			think of. Not sure it would be possible to think of everything at once. Amazon did not become
			the giant it is without fine tuning
		</p>
	</li>
	<li>
		Management
		<p>
			We can take it a step further than simple and start tracking and managing data to get an even
			deeper connection to those who find their way to your space.
		</p>
	</li>
</ul>

<!--svelte-ignore css-unused-selector -->
<style>
	priceBox {
		display: grid;
		grid-template-columns: 1fr;

		& offer {
			margin: var(--space-Qtr);
			color: var(--txt-2);
			background: var(--accent-1);
			border-radius: var(--rad-Lg);
			padding: var(--size-4);
		}
	}

	.steps {
		margin: var(--space-Qtr);
		& li {
			background-color: var(--accent-1);
			color: var(--txt-2);
			border: var(--bord);
			border-radius: var(--rad-Lg);
			padding: var(--size-5);
			margin: var(--size-4) 0;
		}
	}

	/* Tablet Size */
	@media only screen and (min-width: 768px) {
		priceBox {
			grid-template-columns: 1fr 1fr;

			h2 {
				font-size: var(--size-6);
			}
		}

		.steps {
			& li {
				font-size: var(--size-6);
				font-weight: 700;
				& p {
					margin: 0;
					font-weight: 400;
				}
			}
		}
	}

	/* Laptop Size */
	@media only screen and (min-width: 1024px) {
		priceBox {
			width: 100vw;
			grid-template-columns: 1fr 1fr 1fr;

			& offer {
				height: fit-content;
				& h2,
				p {
					margin: 0;
					padding: VAR(--space-Top);
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
</style>
