<!-- +page.svelte  
	Shop/warehouse page.

	@since version 0.3.3 -->
<script lang="ts">
	// Import necessary functions and types from Svelte
	import { fade } from 'svelte/transition'
	import MeBase from '$lib/assets/img/meBase.jpg'
	import { getImages, fetchProductsAndImages } from '$lib/assets/utils/itm_utils'
	import { onDestroy } from 'svelte'

	// fade: A transition function from Svelte used to animate elements.
	// MeBase: An image imported from the local assets.
	// getImages and fetchProductsAndImages: Utility functions imported from a local module.
	// onDestroy: A Svelte lifecycle function that runs when the component is destroyed.

	// Export the data prop
	export let data: {
		session: any
		productData: Array<{
			product_id: number
			item_name: string
			category: string
			description: string
			price: string
		}>
		productInventory: Array<{ product_id: number; size_id: number }>
		sizeData: Array<{ size_id: number; size_name: string }>
		images: any[]
	}

	// 	Export the Data Prop:
	// export let data: This line declares a variable data that is exported from the Svelte component. The let keyword allows the variable to be reassigned if needed. Exporting the variable makes it available to the parent component that uses this component.

	// Type Annotation for Data:
	// The type annotation { ... } specifies the structure and types of the data object. This is a TypeScript feature that helps with type checking and ensures that the data object conforms to the expected structure.

	// Session Property:
	// session: any: This property holds the session information. The type any means that it can hold any type of value. This is often used when the exact type is not known or can vary.

	// Product Data Property:
	// productData: Array<{ product_id: number; item_name: string; category: string; description: string; price: string }>: This property is an array of objects, where each object represents a product.

	// Product Inventory Property:
	// productInventory: Array<{ product_id: number; size_id: number }>: This property is an array of objects, where each object represents an inventory entry. The objects have the following properties:

	// product_id: A number representing the unique identifier for the product.

	// size_id: A number representing the unique identifier for the size.

	// Size Data Property:
	// sizeData: Array<{ size_id: number; size_name: string }>: This property is an array of objects, where each object represents a size. The objects have the following properties:

	// size_id: A number representing the unique identifier for the size.

	// size_name: A string representing the name of the size.

	// Images Property:
	// images: any[]: This property is an array of any type of values. The any type means that the array can contain elements of any type. This is often used when the exact type of the elements is not known or can vary.

	// Destructure the data prop into local variables
	let { session, productData, productInventory, sizeData, images } = data
	$: ({ session, productData, productInventory, sizeData, images } = data)

	// session: The current user session.
	// productData: An array of product objects.
	// productInventory: An array of inventory objects.
	// sizeData: An array of size objects.
	// images: An array of image objects.
	// $: Ensures that the local variables are updated whenever data changes.

	// Define state variables
	let loading = false // loading: A boolean indicating if data is being loaded.
	let matchingInventory = {} // matchingInventory: An object to store inventory data for the selected product.
	let uniqueCategories = new Set(productData.map((product) => product.category)) // uniqueCategories: A set of unique product categories.
	let selectedCategory = '' // selectedCategory: The currently selected category.
	let selectedProduct = null // selectedProduct: The currently selected product.
	let showModal = false // showModal: A boolean indicating if the modal is shown.
	let productImages = [] // productImages: An array of images for the selected product.
	let currentImageIndex = 0 // currentImageIndex: The index of the currently displayed image.
	let intervalId // intervalId: The ID of the interval for the image slideshow.

	// Function to handle category selection
	function handleCategorySelection(category) {
		selectedCategory = category
	}

	// handleCategorySelection: Updates the selectedCategory when a category is selected.

	// Functions for image navigation
	const nextImage = () => {
		if (productImages.length) {
			currentImageIndex = (currentImageIndex + 1) % productImages.length
		}
	}

	const prevImage = () => {
		if (productImages.length) {
			currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length
		}
	}

	// nextImage: Advances to the next image in the productImages array.
	// prevImage: Goes back to the previous image in the productImages array.

	// Functions to control the slideshow
	const startAutoSlide = () => {
		stopAutoSlide()
		intervalId = setInterval(nextImage, 3000)
	}

	const stopAutoSlide = () => {
		if (intervalId) clearInterval(intervalId)
	}

	// startAutoSlide: Starts the automatic slideshow by setting an interval to call nextImage every 3 seconds.
	// stopAutoSlide: Stops the automatic slideshow by clearing the interval.

	// Function to handle product card click
	const handleCardClick = async (product) => {
		selectedProduct = product
		showModal = true
		try {
			productImages = await getImages(product.item_name, images)
			console.log('Retrieved product images:', productImages)
		} catch (error) {
			console.error('Error fetching images:', error)
		}
		currentImageIndex = 0
		matchingInventory = productInventory.filter(
			(inventory) => inventory.product_id === product.product_id
		)
		startAutoSlide()
	}

	// handleCardClick: Handles the event when a product card is clicked.
	// Sets the selectedProduct and shows the modal.
	// Fetches images for the selected product.
	// Filters the inventory to match the selected product.
	// Starts the automatic slideshow.

	// Reactive statements
	$: filteredProducts = productData.filter((product) => product.category === selectedCategory)

	$: if (!showModal) stopAutoSlide()
	onDestroy(() => stopAutoSlide())

	// filteredProducts: Filters the productData based on the selectedCategory.
	// Stops the slideshow if the modal is not shown.
	// Ensures the slideshow is stopped when the component is destroyed.
</script>

<svelte:head>
	<title>Shop by Category - West Sound Roller Derby</title>
	<meta
		name="description"
		content="Explore and shop by category at West Sound Roller Derby. Find the perfect merchandise and gear to support your favorite roller derby team."
	/>
	<meta name="keywords" content="roller derby, West Sound, shop, merchandise, gear, categories" />
	<meta property="og:title" content="Shop by Category - West Sound Roller Derby" />
	<meta
		property="og:description"
		content="Explore and shop by category at West Sound Roller Derby. Find the perfect merchandise and gear to support your favorite roller derby team."
	/>
	<meta property="og:image" content="/path/to/your/image.jpg" />
	<meta property="og:url" content="https://www.yourwebsite.com/shop-by-category" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<!-- 
<svelte:head>:
This tag is used to define elements that should be included in the <head> section of the HTML document. It allows you to set metadata, titles, and other head elements directly within your Svelte component.

<title>:
Sets the title of the web page, which appears in the browser tab and is used by search engines.
In this case, the title is "Shop by Category - West Sound Roller Derby".

<meta name="description">:
Provides a brief description of the page's content.
This description is often used by search engines in search results.
Here, it describes the page as a place to explore and shop by category at West Sound Roller Derby.

<meta name="keywords">:
Specifies keywords related to the page's content.
These keywords help search engines understand the topics covered on the page.
Keywords include "roller derby, West Sound, shop, merchandise, gear, categories".

<meta property="og:title">:
Sets the title for Open Graph, which is used by social media platforms when the page is shared.
The Open Graph title is "Shop by Category - West Sound Roller Derby".

<meta property="og:description">:
Provides a description for Open Graph, used by social media platforms when the page is shared.
The description is the same as the meta description: "Explore and shop by category at West Sound Roller Derby. Find the perfect merchandise and gear to support your favorite roller derby team."

<meta property="og:image">:
Specifies the image to be used when the page is shared on social media platforms.
The image URL is "/path/to/your/image.jpg". You should replace this with the actual path to your image.

<meta property="og:url">:
Sets the URL for Open Graph, indicating the canonical URL of the page.
The URL is "https://www.yourwebsite.com/shop-by-category". You should replace this with your actual URL.

<meta name="twitter:card">:
Specifies the type of card to be used when the page is shared on Twitter.

"summary_large_image" indicates that a large image should be displayed in the Twitter card. 
-->

<main>
	<header class=" head_Line">
		<h1>Shop by Category</h1>
	</header>

	<p>Select a category:</p>
	<section>
		{#if uniqueCategories.size > 0}
			<!--
					{#if ...}: This is a Svelte conditional block. It renders the content inside it only if the condition is true.

					uniqueCategories.size > 0: The condition checks if the uniqueCategories set has more than 0 elements. If it does, the content inside the block will be rendered.
-->

			<!-- <div class="tabs">: This creates a div element with the class tabs. This div will contain the category buttons. -->
			<div class="tabs">
				{#each Array.from(uniqueCategories) as category}
					<!-- 
						{#each ... as ...}: This is a Svelte each block. It iterates over an array or iterable and renders the content inside it for each item.
						Array.from(uniqueCategories): Converts the uniqueCategories set into an array. This is necessary because Svelte's each block works with arrays.
						as category: For each item in the array, the variable category will hold the current item. 
				-->

					<button
						class:active-tab={selectedCategory === category}
						on:click={() => handleCategorySelection(category)}
					>
						{category}
					</button>

					<!-- 
					<button>: Creates a button element.

					class:active-tab={selectedCategory === category}: This is a Svelte class directive. It adds the active-tab class to the button if the condition selectedCategory === category is true. This is used to visually indicate the active category.

					on:click={() => handleCategorySelection(category)}: This is a Svelte event directive. It attaches a click event handler to the button. When the button is clicked, the handleCategorySelection function is called with the current category as an argument.

					{category}: This is a Svelte text interpolation. It inserts the value of category inside the button, displaying the category name.
					-->
				{/each}
			</div>
		{/if}

		<!-- filteredProducts: Filters the productData based on the selectedCategory. -->
		{#if selectedCategory}
			<!-- selectedCategory: The condition checks if selectedCategory is truthy (i.e., not null, undefined, or an empty string). If it is, the content inside the block will be rendered. -->

			<div class="scroll-container">
				<div class="horizontal-grid">
					{#each filteredProducts as product}
						<!-- 
					{#each ... as ...}: This is a Svelte each block. It iterates over an array or iterable and renders the content inside it for each item.
					filteredProducts: The array being iterated over. It contains the products filtered by the selected category.
					as product: For each item in the array, the variable product will hold the current item. 
					-->

						<button
							class="card"
							type="button"
							aria-label={`View details for ${product.item_name}`}
							on:click={() => handleCardClick(product)}
						>
							<!-- 
						type="button": Specifies that the button is of type "button".
						
						aria-label={View details for ${product.item_name}}: Sets an accessible label for the button, which is useful for screen readers. It dynamically includes the product's name.

						on:click={() => handleCardClick(product)}: This is a Svelte event directive. It attaches a click event handler to the button. When the button is clicked, the handleCardClick function is called with the current product as an argument. 
						-->

							{#await getImages(product.item_name, images, true) then imageUrl}
								<!--
							{#await ... then ...}: This is a Svelte await block. It handles asynchronous operations and renders different content based on the promise's state.

							getImages(product.item_name, images, true): Calls the getImages function with the product's name, the images array, and a boolean flag. This function returns a promise that resolves to the image URL.

							then imageUrl: If the promise resolves successfully, the imageUrl variable will hold the resolved value.
							-->

								<img src={imageUrl} alt={product.item_name} />
								<!-- 
								<img src={imageUrl} alt={product.item_name} />: Renders an image element with the resolved image URL and the product's name as the alt text. 
								-->
							{:catch}
								<!-- {:catch}: If the promise is rejected, the content inside this block will be rendered. -->

								<img src={MeBase} alt="Default product" />
								<!--Renders a default image if the promise is rejected. -->
							{/await}

							<h4>{product.item_name}</h4>
							<!-- 
							{product.item_name}: This is a Svelte text interpolation. It inserts the value of product.item_name inside the heading, displaying the product's name.
							-->
						</button>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Modal -->
		{#if showModal}
			<!-- 
        {#if ...}: This is a Svelte conditional block. It renders the content inside it only if the condition is true.
        showModal: The condition checks if showModal is true. If it is, the content inside the block will be rendered.
    -->
			<div class="modal-background">
				<div class="modal">
					<h4>{selectedProduct.item_name}</h4>

					<!-- Carousel Navigation -->
					<div class="carousel">
						{#if productImages && productImages.length > 0}
							<!-- 
                        {#if ...}: This is a Svelte conditional block. It renders the content inside it only if the condition is true.
                        productImages && productImages.length > 0: The condition checks if productImages is truthy and has more than 0 elements. If it does, the content inside the block will be rendered.
                    -->
							<button on:click={prevImage} class="caro-nav-button">←</button>
							<!-- 
                        <button on:click={prevImage} class="caro-nav-button">←</button>: Creates a button element with the class caro-nav-button. When clicked, it calls the prevImage function to navigate to the previous image.
                    -->
							<img
								src={productImages[currentImageIndex] || MeBase}
								alt={`Image of ${selectedProduct.item_name}`}
								transition:fade={{ duration: 500 }}
							/>
							<!-- 
                        <img src={productImages[currentImageIndex] || MeBase} alt={`Image of ${selectedProduct.item_name}`} transition:fade={{ duration: 500 }} />: Creates an img element that displays the current image in the productImages array or a default image (MeBase) if the array is empty. The alt attribute provides an accessible description of the image. The transition:fade directive applies a fade transition with a duration of 500 milliseconds.
                    -->
							<button on:click={nextImage} class="caro-nav-button">→</button>
							<!-- 
                        <button on:click={nextImage} class="caro-nav-button">→</button>: Creates a button element with the class caro-nav-button. When clicked, it calls the nextImage function to navigate to the next image.
                    -->
						{:else}
							<img src={MeBase} alt="Default product" />
						{/if}
					</div>

					<section>
						<p><strong>Description:</strong> {selectedProduct.description}</p>

						<p><strong>Price:</strong> {selectedProduct.price}</p>

						<p><strong>Category:</strong> {selectedProduct.category}</p>

						{#if matchingInventory && Array.isArray(matchingInventory) && matchingInventory.length > 0}
							<!-- 
                        {#if ...}: This is a Svelte conditional block. It renders the content inside it only if the condition is true.
                        matchingInventory && Array.isArray(matchingInventory) && matchingInventory.length > 0: The condition checks if matchingInventory is truthy, is an array, and has more than 0 elements. If it does, the content inside the block will be rendered.
                    -->
							<p><strong>Available Sizes:</strong></p>

							<p>
								{#each matchingInventory as inventory, i}
									<!-- 
                                {#each ... as ...}: This is a Svelte each block. It iterates over an array or iterable and renders the content inside it for each item.
                                matchingInventory as inventory, i: For each item in the matchingInventory array, the variable inventory will hold the current item, and the variable i will hold the current index.
                            -->
									{sizeData.find((size) => size.size_id === inventory.size_id)?.size_name ||
										'Unknown Size'}
									<!-- 
                                {sizeData.find((size) => size.size_id === inventory.size_id)?.size_name || 'Unknown Size'}: This expression finds the size name in the sizeData array that matches the size_id of the current inventory item. If no match is found, it returns 'Unknown Size'.
                            -->
									{#if i < matchingInventory.length - 1}/{/if}
									<!-- 
                                {#if ...}: This is a Svelte conditional block. It renders the content inside it only if the condition is true.
                                i < matchingInventory.length - 1: The condition checks if the current index is less than the length of the matchingInventory array minus 1. If it is, a slash (/) is rendered to separate the sizes.
                            -->
								{/each}
							</p>
						{/if}
					</section>

					<button type="button" on:click={() => (showModal = false)}>
						<span>Close</span>
					</button>
					<!-- 
                <button type="button" on:click={() => (showModal = false)}>: Creates a button element with the type "button". When clicked, it sets showModal to false, closing the modal.
                <span>Close</span>: This creates a span element that displays the text "Close" inside the button.
            -->
				</div>
			</div>
		{/if}
	</section>
</main>

<!-- svelte-ignore css-unused-selector -->
<style>
	button {
		all: unset;
	}

	.tabs button,
	.head_Line {
		z-index: 420;
	}

	.tabs {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		margin-bottom: 20px;

		@media screen and (min-width: 768px) {
			flex-direction: row;
			margin-left: 10vw;
		}

		& button {
			padding: var(--space);
			margin: var(--space);
			border: none;
			background-color: var(--grabber);
			border-radius: var(--rad);
			cursor: pointer;
			transition:
				background-color 0.3s,
				color 0.3s;

			&&:hover {
				background-color: var(--grabber_Alt);
			}

			&&.active-tab {
				background-color: var(--highlight);
			}
		}
	}

	.horizontal-grid {
		display: grid;
		grid-auto-flow: column;
		grid-template-rows: repeat(2, 1fr);
		padding: var(--pad);
		gap: var(--pad);
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		position: relative; /* Ensure pseudo-elements are positioned within the grid */
	}

	/* Pseudo-elements for blur effect */
	.horizontal-grid::before,
	.horizontal-grid::after {
		content: '';
		position: fixed;
		top: 0;
		bottom: 0;
		height: 100%;
		width: 20%; /* Adjust width as needed */
		pointer-events: none; /* Allow clicks to pass through */
		z-index: 1;
	}

	.horizontal-grid::before {
		left: 0;
		background: linear-gradient(to right, var(--back_Main), rgba(255, 255, 255, 0));
	}

	.horizontal-grid::after {
		right: 0;
		background: linear-gradient(to left, var(--back_Main), rgba(255, 255, 255, 0));
	}

	/* Card Styling */
	.card {
		min-width: 200px;
		background-color: var(--back_Hallow_Dark);
		transition:
			transform 0.3s,
			box-shadow 0.3s;
		padding: var(--pad);
		border-radius: var(--rad);
		box-shadow: var(--box_Shadow);
		scroll-snap-align: start;
		cursor: pointer;

		&:hover {
			transform: scale(1.05);
		}

		& img {
			width: 100%;
			height: 9rem;
			object-fit: cover;
			border-radius: var(--rad);
		}
	}

	span {
		cursor: pointer;
	}

	.modal-background {
		position: fixed;
		z-index: 777;
	}

	.carousel {
		& img {
			max-width: 100%;
			max-height: 300px;
			border-radius: 8px;
			padding: var(--space);
			border-radius: var(--rad);
		}

		& button {
			background: var(--back_Tre);
			padding: var(--space);
			width: 10px;
			border: var(--bord);
			border-radius: var(--rad);

			&:hover {
				background: var(--grabber);
			}
		}
	}

	/* Animations */
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideDown {
		from {
			transform: translateY(-30px);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
