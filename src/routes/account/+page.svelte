<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms'
	import type { SubmitFunction } from '@sveltejs/kit'

	import Avatar from '$lib/assets/tools/Avatar.svelte'

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	export let data
	export let form

	let { session, supabase, profile, newMessage } = data
	$: ({ session, supabase, profile, newMessage } = data)

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	let profileForm: HTMLFormElement
	let loading = false
	let fullName: string = profile?.full_name ?? ''
	let username: string = profile?.username ?? ''
	let contact: string = profile?.contact ?? ''
	let avatarUrl: string = profile?.avatar_url ?? ''
	let selectedMessage = null
	let showMessageBox = false
	let showViewed = false // Tracks whether to show viewed messages
	let showProfile = false
	let showFood = false

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	console.log('profile: ', profile)

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	const selectMessage = (message) => {
		selectedMessage = message
	}

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	// Function to format the date
	function formatDate(dateString) {
		const date = new Date(dateString)
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit'
		}).format(date)
	}

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣
	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async () => {
			loading = false
		}
	}

	const handleSignOut: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}

	// load the page https://table-tango.netlify.app/
	const handleFood = () => {
		window.location.href = 'https://table-tango.netlify.app/'
	}
</script>

<header class="head_Line">
	<h1>Account</h1>
</header>

<main>
	{#if profile.is_admin}
		<section class="whatsUp">
			<ul>
				<li>
					<!-- profile Data  -->
					<label for="accoutCheckbox"
						>Account
						<input type="checkbox" bind:checked={showProfile} id="viewedCheckbox" />
					</label>
				</li>
				<li>
					<!-- Message Box  -->
					<label for="messageBox"
						>Message Box
						<input type="checkbox" bind:checked={showMessageBox} />
					</label>
				</li>
				<li>
					<label for="foodFinder"
						>Food link
						<input type="checkbox" bind:checked={showFood} />
					</label>
				</li>
			</ul>
		</section>

		<section id="accountBox">
			{#if showProfile}
				<form
					class="classicForm"
					method="post"
					action="?/update"
					use:enhance={handleSubmit}
					bind:this={profileForm}
				>
					<Avatar
						{supabase}
						bind:url={avatarUrl}
						size={10}
						on:upload={() => {
							profileForm.requestSubmit()
						}}
					/>

					<label for="email"
						>Email
						<input id="email" type="text" value={session.user.email} disabled />
					</label>

					<label for="fullName"
						>Full Name
						<input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
					</label>

					<label for="username"
						>Username
						<input id="username" name="username" type="text" value={form?.username ?? username} />
					</label>

					<label for="contact"
						>Contact
						<input id="contact" name="contact" type="text" value={form?.contact ?? contact} />
					</label>

					<div class="window-content">
						<button
							class="button-Ghost"
							type="submit"
							value={loading ? 'Loading...' : 'Update'}
							disabled={loading}>Update</button
						>
					</div>
				</form>
			{/if}
		</section>

		<section id="messageBox">
			{#if showMessageBox}
				<article class="filter-options">
					<label>
						Show Viewed Messages
						<input type="checkbox" bind:checked={showViewed} />
					</label>
				</article>

				<article class="summary">
					<table class="desktop-table">
						<thead>
							<tr>
								<th>Full Name</th>
								<th>Contact</th>
								<th>Submit on</th>
								<th>Viewed</th>
								<th>Look</th>
							</tr>
						</thead>
						<tbody>
							{#each newMessage.filter((message) => message.viewed === showViewed) as message}
								<tr>
									<td>{message.full_name}</td>
									<td>{message.contact_point}</td>
									<td>{formatDate(message.submitted_at)}</td>
									<td>{message.viewed ? 'Yes' : 'No'}</td>
									<td
										><button class="ripple-btn" on:click={() => selectMessage(message)}>View</button
										></td
									>
								</tr>
							{/each}
						</tbody>
					</table>

					{#each newMessage.filter((message) => message.viewed === showViewed) as message}
						<!-- Mobile Stacked Layout -->
						<div class="mobile-cards">
							<div class="card">
								<p><strong>Full Name:</strong> {message.full_name}</p>
								<p><strong>Email:</strong> {message.email}</p>
								<p><strong>Submitted At:</strong> <br /> {formatDate(message.submitted_at)}</p>
								<button class="ripple-btn" on:click={() => selectMessage(message)}>View</button>
							</div>
						</div>
					{/each}
				</article>

				{#if selectedMessage}
					<article id="messageDetail" class="detail-grid">
						{#if selectedMessage.full_name}
							<p><strong>Full Name:</strong> {selectedMessage.full_name}</p>
						{/if}

						{#if selectedMessage.contact_point}
							<p><strong>Contact:</strong> {selectedMessage.contact_point}</p>
						{/if}

						{#if selectedMessage.message}
							<p><strong>Message:</strong> {selectedMessage.message}</p>
						{/if}

						{#if selectedMessage.viewed}
							<p><strong>Viewed:</strong> {selectedMessage.viewed ? 'Yes' : 'No'}</p>
						{/if}

						{#if selectedMessage.submitted_at}
							<p><strong>Submitted At:</strong> {formatDate(selectedMessage.submitted_at)}</p>
						{/if}

						<!-- Has been viewed checkbox -->

						<form action="?/updateMessageViewed" method="post">
							<label>
								Has been viewed:
								<input type="checkbox" name="viewed" bind:checked={selectedMessage.viewed} />
							</label>
							<input type="hidden" name="messageId" value={selectedMessage.id} />
							<button class="button-Ghost" type="submit">Update</button>
						</form>

						<!-- Close button (or another event that closes the message) -->
						<button on:click={() => (selectedMessage = null)} class="ripple-btn"
							>Close Message</button
						>
					</article>
				{/if}
			{/if}
		</section>

		<section class="dinner-hunt">
			{#if showFood}
				<p>Let's find out what we are eating today!</p>
				<button class="ripple-btn" on:click={handleFood}>🦖</button>
			{/if}
		</section>

		<form method="post" action="?/signout" use:enhance={handleSignOut}>
			<button class="button-Skew" disabled={loading}> Sign Out</button>
		</form>
	{:else}
		<h1>Thank you for testing, I appreciate your help. I hope you have a great week.</h1>
	{/if}
</main>

<!-- svelte-ignore css-unused-selector -->
<style>
	.whatsUp {
		display: flex;
		/* justify-content: center; */
		align-items: center;
		margin: var(--space-Side);
	}

	/* Account  */
	.classicForm {
		margin: 10px auto;
		color: var(--txt-1);
		width: 80vw;
	}

	/* Message Box  */
	.summary {
		margin: var(--space-Full);

		@media screen and (min-width: 768px) {
			margin: var(--space-Top);
		}
	}

	.desktop-table {
		display: none;

		@media screen and (min-width: 768px) {
			display: block;
			width: fit-content;

			margin: var(--space-Sm);
			border-collapse: collapse;
			background-color: #1a1a1a;
			color: var(--error);
		}
	}

	.desktop-table th,
	.desktop-table td {
		padding: 12px;
		border: 2px solid var(--error);
	}

	.desktop-table th {
		background-color: #333;
		text-align: left;
	}

	.desktop-table tr:nth-child(even) {
		background-color: #2a2a2a;
	}

	.desktop-table tr:hover {
		background-color: #444;
	}

	.filter-options {
		margin: var(--space-Full);

		@media screen and (min-width: 1024px) {
			margin: var(--space-Sm);
		}
	}

	.mobile-cards {
		display: block;
		align-items: center;
		justify-content: center;
		background-color: var(--bg-1);
		color: var(--txt-1);
		width: 80vw;
		margin: var(--space-Full);

		@media screen and (min-width: 768px) {
			display: none;
		}
	}

	.detail-grid {
		display: block;
		position: fixed;
		bottom: 5vh;
		left: 50%;
		transform: translateX(-50%);
		width: 100vw;
		max-width: 700px;
		padding: 1.5rem;
		background: var(--bg-1);
		color: var(--error);
		border: 2px solid var(--error);
		border-radius: 8px;

		& div {
			padding: 0.5rem 0;
			border-bottom: 1px solid var(--bg-2);
		}

		& div:last-child {
			border-bottom: none;
		}

		& button {
			margin-top: 1rem;
			width: 100%;
			padding: 0.75rem;
			background: transparent;
			border: 2px solid #00ff00;
			color: #00ff00;
			font-family: inherit;
			font-size: 1rem;
			cursor: pointer;
			transition: background 0.3s ease;

			&:hover {
				background: #00ff00;
				color: #222;
			}
		}
	}

	/* Food link */

	.dinner-hunt {
		& h2,
		p,
		button {
			margin: var(--space-Side);
		}
	}

	/* Logout  */

	.button-Skew {
		display: flex;
		padding: 0.5em 1em;
		margin: var(--space-Side);
		right: 0;
		z-index: 1;
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.detail-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
