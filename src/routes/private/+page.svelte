<script lang="ts">
	let { data } = $props();
	let { user } = $derived(data);

	let showMessageBox = $state(false);
	let showViewed = $state(false);
	let showFood = $state(false);
	let selectedMessage = $state();

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	const selectMessage = (message) => {
		selectedMessage = message;
	};

	// load the page https://table-tango.netlify.app/
	const handleFood = () => {
		window.location.href = 'https://table-tango.netlify.app/';
	};

	// Function to format the date
	function formatDate(dateString) {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit'
		}).format(date);
	}
</script>

<main>
	<header class="head_Line">
		<h1>User: {user?.email}</h1>
	</header>

	<section class="whatsUp">
		<ul>
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

	<section id="messageBox">
		{#if showMessageBox}
			<article class="summary">
				<table class="desktop-table">
					<thead>
						<tr>
							<th>Full Name</th>
							<th>Contact</th>
							<th>Submit on</th>
							<!-- <th>Viewed</th> -->
							<th>Look</th>
						</tr>
					</thead>
					<tbody>
						{#each data.inbox as message}
							<tr>
								<td>{message.contact_point}</td>
								<td>{message.full_name}</td>
								<!-- <td>{message.message}</td> -->
								<td>{formatDate(message.submitted_at)}</td>
								<!-- <td>{message.viewed}</td> -->
								<td
									><button class="button-Ghost" onclick={() => selectMessage(message)}>View</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>

				{#each data.inbox as message}
					<!-- Mobile Stacked Layout -->
					<div class="mobile-cards">
						<div class="card">
							<p>{message.contact_point}</p>
							<p>{message.full_name}</p>
							<!-- <p>{message.message}</p> -->
							<p>{formatDate(message.submitted_at)}</p>
							<!-- <p>{message.viewed}</p> -->
							<button class="button-Ghost" onclick={() => selectMessage(message)}>View</button>
						</div>
					</div>
				{/each}
			</article>
			<article class="filter-options">
				<label>
					Show Viewed Messages
					<input type="checkbox" bind:checked={showViewed} />
				</label>
			</article>
			{#if selectedMessage}
				<article id="messageDetail" class="detail-grid">
					{#if selectedMessage}
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

					<!-- Close button (or another event that closes the message)-->
					<button onclick={() => (selectedMessage = null)} class="button-Ghost"
						>Close Message</button
					>
				</article>
			{/if}
		{/if}
	</section>

	<section class="dinner-hunt">
		{#if showFood}
			<p>Let's find out what we are eating today!</p>
			<button class="button-Ghost" onclick={handleFood}>🦖</button>
		{/if}
	</section>
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	h1 {
		text-align: center;
		margin: var(--size-4);
		width: 100vw;
	}

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

	.messageBox {
		margin: 10vh auto;
	}

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
		background-color: var(--bg-2);
		color: var(--txt-1);
		width: fit-content;
		padding: var(--size-3);
		margin: var(--size-6);
		border: 2px solid var(--error);

		& p {
			margin: var(--size-1);
		}

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

		& div {
			padding: 0.5rem 0;
			border-bottom: 1px solid var(--bg-2);
		}

		& p {
			margin: var(--size-1);
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
