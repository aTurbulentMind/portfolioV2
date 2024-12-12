<script>
	import { onMount } from 'svelte'

	import Logo_Svg from '$lib/svg/logo.svelte'

	onMount(() => {
		const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

		const hasUserSetDarkModeManually = document.documentElement.dataset.theme === 'dark'

		if (!hasUserSetDarkModeManually) {
			setTheme(userPrefersDarkMode ? 'dark' : 'light')
		}
	})

	const setTheme = (theme) => {
		document.documentElement.dataset.theme = theme
		document.cookie = `siteTheme${theme};max-age=31536000;path=/`
	}

	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}

	let current = 0
	let isDropdownOpen = false
</script>

<div class="navbar">
	<nav class:open={isMenuOpen}>
		<ul>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 0} on:click={() => (current = 0)} href="/services/"
						>Services</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 1} on:click={() => (current = 1)} href="/contact">Contact</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 2} on:click={() => (current = 2)} href="/about">About</a>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 3} on:click={() => (current = 3)} href="/reviews"
						>Projects</a
					>
				</button>
			</li>
			<li>
				<button
					class="dropdown-toggle"
					on:click|preventDefault={() => (isDropdownOpen = !isDropdownOpen)}
					aria-expanded={isDropdownOpen}
					aria-haspopup="true"
				>
					Themes
				</button>
				{#if isDropdownOpen}
					<ul class="dropdown">
						<li><a href={'#'} on:click={() => setTheme('light')}>Light</a></li>
						<li><a href={'#'} on:click={() => setTheme('dark')}>dark</a></li>
						<li><a href={'#'} on:click={() => setTheme('headache')}>headache</a></li>
						<li><a href={'#'} on:click={() => setTheme('colorBlind')}>color blind</a></li>
					</ul>
				{/if}
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 4} on:click={() => (current = 4)} href="/">Home</a>
				</button>
			</li>
		</ul>
	</nav>
	<button on:click={toggleMenu} on:keydown={() => (isMenuOpen = false)}>
		<div class="burger">
			<svg> <Logo_Svg /></svg>
		</div>
	</button>
</div>

<!--svelte-ignore css-unused-selector -->
<style>
	.navbar {
		background: var(--gradient);
		width: 100vw;
		display: flex;
		position: fixed;
		top: 0;
		justify-content: space-between;
		height: var(--size-10);
		transition: var(--transit);
		border-bottom: 2px solid var(--accent);
		box-shadow: var(--box-Shadow);
		z-index: 950;
	}

	.navbar button {
		all: unset;
	}

	.navbar a {
		color: var(--txt-1);
		transition: var(--transit);
	}

	.navbar a:hover,
	.navbar a:focus {
		color: var(--accent);
		text-shadow: var(--text-Shadow);
	}

	.navbar ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-4);
		margin: 0;
		padding: 0;
	}

	.navbar ul li {
		padding: 3% 0;
	}

	.navbar > li {
		position: relative; /* Necessary for positioning the dropdown */
	}

	.navbar ul li button {
		all: unset;
		cursor: pointer;
	}

	.navbar .burger {
		display: flex;
		width: 100%;
		margin: 0 2vw;

		&:hover {
			cursor: pointer;
			transform: scale(0.9);
			transition: transform 0.1s ease-in-out;
		}

		& svg {
			width: var(--size-9);
			height: var(--size-9);
		}
	}

	nav {
		display: none;
	}

	nav.open {
		display: block;
		position: absolute;
		top: 100%;
		left: 0;
		background: var(--gradientFlip);
		width: 100vw;
		border-top: 2px solid var(--accent);
		box-shadow: var(--box-Shadow);
	}

	.current::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		box-shadow: 0 0 2px var(--accent-1);
	}

	/* Dropdown Menu Styles */
	.dropdown {
		list-style: none;
		margin: 0;
		padding: 0;
		position: absolute; /* Position relative to parent <li> */
		top: 100%; /* Aligns the dropdown just below the parent <a> */
		background-color: var(--bg-1);
		border: var(--bord);
		box-shadow: var(--box-Shadow);
		text-transform: capitalize;
	}

	.dropdown li {
		padding: 0;
	}

	.dropdown a {
		padding: var(--size-4);
		white-space: nowrap; /* Prevents text wrapping */
	}

	/* Laptop styles */
	@media only screen and (min-width: 1024px) {
		nav {
			display: flex;
		}

		.navbar {
			height: 4rem;
		}

		.navbar .burger {
			display: none;
		}

		.navbar ul {
			flex-direction: row-reverse;
			gap: var(--space-7);
			margin: 0 15vw;

			& li {
				padding: var(--size-4);
			}
		}
	}
</style>
