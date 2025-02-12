<div class=" head_Line">
	<h1>WSRD writeup</h1>
</div>

<section>
	<header>
		<h1>West Sound Roller Derby Website: A Month of Building Something Special</h1>
		<p>
			This project marked a big step forward in both complexity and refinement, expanding on
			previous ideas of managing and interacting with website content directly from the page. Over
			the course of nearly a month, I built a website that offers a rich user experience, integrates
			multiple functionalities, and is designed with both users and administrators in mind.
		</p>
	</header>

	<main>
		<section>
			<h2>Homepage</h2>
			<ul>
				<li><strong>Upcoming Event:</strong> Displays the upcoming event flyer.</li>
				<li><strong>Ticket Sales:</strong> Visitors can purchase tickets directly.</li>
				<li>
					<strong>Newsletter Signup:</strong> Stay updated by subscribing to the team’s newsletter.
				</li>
				<li>
					<strong>Non-Profit Organization:</strong> As a 501(c)(3), West Sound Roller Derby (WSRD) welcomes
					donations to support their mission.
				</li>
				<li>
					<strong>Core Values:</strong> Inclusivity, respect, communication, and integrity are at the
					heart of the team’s culture.
				</li>
			</ul>
		</section>

		<section>
			<h2>Shop by Category</h2>
			<p>A dedicated shopping page features:</p>
			<ul>
				<li>Clothing categories like shirts, outerwear, and underclothes.</li>
				<li>
					Multiple color or style options, including vibrant tones like orange, yellow, and purple.
				</li>
				<li>Unique two-tone shirts for added style.</li>
			</ul>
		</section>

		<section>
			<h2>Gallery</h2>
			<p>The gallery showcases the vibrant community and events of WSRD. Each entry includes:</p>
			<ul>
				<li>A gallery from the event</li>
				<li>Event descriptions</li>
				<li>Dates and locations</li>
			</ul>
		</section>

		<section>
			<h2>Roster</h2>
			<ul>
				<li>
					<strong>Team Culture:</strong> Respect, communication, and integrity on and off the track.
				</li>
				<li>
					<strong>Meet the Skaters:</strong> Profiles highlight each skater’s dedication and personality.
				</li>
				<li>
					<strong>Photography:</strong> Sponsored by Lydia Brewer, the official team photographer.
				</li>
			</ul>
		</section>

		<section>
			<h2>Support</h2>
			<ul>
				<li>
					Join the <strong>Bout Production Crew</strong> to assist with event planning and themes.
				</li>
				<li>
					Become a <strong>Skating Official</strong> (referee) or
					<strong>Non-Skating Official (NSO)</strong> to support bouts.
				</li>
				<li>
					Enroll in the <strong>Learn to Play Roller Derby</strong> program, open to anyone 18+ for a
					monthly fee.
				</li>
				<li>
					Transfer or visit WSRD as a skater by filling out the <em>Visiting Skater Form</em>.
				</li>
			</ul>
		</section>

		<section>
			<h2>Forms Page</h2>
			<p>This page serves as a hub for various forms, streamlining communication:</p>
			<ul>
				<li>
					<strong>Visiting Skater Form:</strong> For skaters who want to join practices or bouts.
				</li>
				<li>
					<strong>Sponsorship Form:</strong> For businesses or individuals to support the team.
				</li>
				<li>
					<strong>Request Bouting Date Form:</strong> For teams or organizers to schedule bouts.
				</li>
			</ul>
		</section>

		<section>
			<h2>About</h2>
			<ul>
				<li><strong>History:</strong> Founded in 2012 to train skaters physically and mentally.</li>
				<li><strong>Core Values:</strong> Equality, sportsmanship, and democracy.</li>
				<li>
					<strong>Culture:</strong> A positive, inclusive environment emphasizing respect and growth.
				</li>
				<li><strong>Non-Profit Status:</strong> Officially a 501(c)(3) since 2015.</li>
			</ul>
		</section>

		<section>
			<h2>FAQs</h2>
			<ul>
				<li>
					<strong>What Is Roller Derby?</strong> A fast-paced, full-contact sport played on flat tracks.
				</li>
				<li>
					<strong>Gameplay Basics:</strong> Explains teams, scoring, penalties, and strategies.
				</li>
				<li>
					<strong>Learning Opportunities:</strong> Encourages joining the
					<em>New Skater Program</em> to learn the ropes.
				</li>
			</ul>
		</section>

		<section>
			<h2>Account Page</h2>
			<p>A personalized experience for users to:</p>
			<ul>
				<li>View and edit their profile details (e.g., email, name, and username).</li>
				<li>Upload profile pictures or documents.</li>
				<li>Navigate to the dashboard or sign out.</li>
			</ul>
		</section>

		<section>
			<h2>Admin Dashboard</h2>
			<ul>
				<li>
					<strong>Unread Messages:</strong> Displays submissions (e.g., sponsorship or skater forms).
				</li>
				<li>
					<strong>Navigation:</strong> Quick links to profiles, events, and the warehouse helper.
				</li>
			</ul>
		</section>

		<section>
			<h2>Events & Gallery Management</h2>
			<p>An advanced page for managing events and their associated flyers:</p>
			<ul>
				<li>Create, edit, delete, and update event information.</li>
				<li>Upload and manage gallery images tied to specific events.</li>
			</ul>
		</section>

		<section>
			<h2>Warehouse Management</h2>
			<p>An elaborate section for inventory control:</p>
			<ul>
				<li>Add, remove, and modify items in the database.</li>
				<li>Streamline operations to keep warehouse stock organized.</li>
			</ul>
		</section>
	</main>

	<footer>
		<h2>Conclusion</h2>
		<p>
			This project not only showcased my ability to organize data and manage page structures
			effectively, but it also allowed me to refine my code for better readability and scalability.
			The website combines a rich user system, detailed forms, and multiple interactive features to
			support both skaters and administrators alike.
		</p>
		<p>
			The user manual I wrote for this site serves as a testament to its depth and usability, and
			I'm proud of the month-long journey that brought it to life. From ticket sales to roster
			profiles, WSRD now has a powerful tool to engage with their community and grow their sport.
		</p>
	</footer>
</section>

<!--svelte-ignore css_unused_selector -->
<style>
	header {
		& h1 {
			transform: rotate(-10deg);
		}

		margin: var(--space-Qtr);
		font-weight: bold;
	}

	ul,
	ol {
		font-size: var(--size-3);
		margin: 5vh 15vw;

		@media screen and (min-width: 1024px) {
			margin: 5vh 30vw;
		}
	}

	img {
		width: 50vw;
		margin: var(--space-Side);
		border: var(--bord);

		@media screen and (min-width: 1440px) {
			width: 30vw;
			margin: 0 35vw;
		}
	}
</style>
