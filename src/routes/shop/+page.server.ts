//  +page.server.ts

// Import necessary functions and types from SvelteKit
import { redirect, fail } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import { fetchProductsAndImages } from '$lib/assets/utils/itm_utils'
// redirect and fail are functions from SvelteKit used for handling redirects and failures.
// Actions and PageServerLoad are types imported for type-checking.
// fetchProductsAndImages is a utility function to fetch product-related data from the database.

// Define the load function for the page
export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
	//The load function is an asynchronous function that runs on the server side when the page is loaded.
	// It receives an object containing supabase (the database client) and safeGetSession (a function to safely get the current session).

	// locals:
	// This object contains data that is available to all server-side functions in SvelteKit. It can include things like database clients, session information, and other utilities.

	// supabase:
	// This is the Supabase client, which is used to interact with the Supabase backend (e.g., to fetch data from the database).

	// safeGetSession:
	// This is a function that safely retrieves the current user session. It ensures that the session data is accessed in a secure and reliable manner.

	// Exporting the Function:
	// export const load: This exports the load function so it can be used by the SvelteKit framework when the page is loaded.

	// Type Annotation:
	// : PageServerLoad: This is a TypeScript type annotation that specifies the type of the load function. PageServerLoad is a type provided by SvelteKit that defines the expected structure and behavior of the load function.

	// Asynchronous Function:
	// async: This keyword indicates that the function is asynchronous, meaning it can perform asynchronous operations (like fetching data) and use await to wait for those operations to complete.

	// Destructuring Parameters:
	// ({ locals: { supabase, safeGetSession } }): This is a destructuring assignment that extracts supabase and safeGetSession from the locals object. The locals object is provided by SvelteKit and contains data that is available to all server-side functions.

	/////

	try {
		// Retrieve the current session using a safe method
		const { session } = await safeGetSession()

		// Fetch products, inventory, sizes, and images from the database
		const { productData, productInventory, sizeData, images, error } =
			await fetchProductsAndImages(supabase)
		//Destructuring Assignment:
		// This line uses destructuring assignment to extract multiple properties from the object returned by the fetchProductsAndImages function.

		// The properties being extracted are productData, productInventory, sizeData, images, and error.

		// Await Keyword:
		// The await keyword is used to wait for the fetchProductsAndImages function to complete its asynchronous operation.
		// This means the code execution will pause at this line until the function resolves and returns its result.

		// Function Call:
		// fetchProductsAndImages(supabase) is a function call that passes the supabase client as an argument.
		// This function is responsible for fetching product-related data from the Supabase database.

		// How It Works
		// fetchProductsAndImages Function:

		// This function likely performs multiple database queries to fetch product data, inventory levels, available sizes, and associated images.
		// It returns an object containing the fetched data and any potential error that occurred during the process.

		// Destructuring the Result:
		// The returned object is destructured into individual variables: productData, productInventory, sizeData, images, and error.

		// Each variable now holds the corresponding data fetched from the database.

		// Check for any errors during data fetching
		if (error) {
			console.error('Error fetching product data:', error)
			// Return a failure response with a 500 status code and error message
			return fail(500, { error: 'Failed to load product data' })
		}

		//Error Check:
		// The if (error) statement checks if the error variable is truthy, meaning an error occurred during the data fetching process.

		// Logging the Error:
		// console.error('Error fetching product data:', error); logs the error message to the console for debugging purposes.

		// Returning a Failure Response:
		// return fail(500, { error: 'Failed to load product data' }); returns a failure response with a 500 status code and an error message.

		// The fail function is used to indicate that the server encountered an error while processing the request.
		// If there is an error during data fetching, it logs the error and returns a failure response with a 500 status code and an error message.

		// Return the fetched data to the page
		return {
			session,
			productData,
			productInventory,
			sizeData,
			images
		} as ProductPageData

		//Return Statement:
		// The return statement is used to send data back to the caller of the function. In this case, it's returning an object containing several properties.

		// Object Literal:
		// The curly braces {} denote an object literal. Inside the braces, we define the properties of the object being returned.
		// The properties being returned are session, productData, productInventory, sizeData, and images.

		// Property Shorthand:
		// The properties are written using shorthand notation. This means that the property name and the variable name are the same.

		// For example, session is both the property name and the variable name. This is equivalent to writing session: session.

		// Type Assertion:
		// The as ProductPageData part is a TypeScript type assertion. It tells TypeScript to treat the returned object as having the type ProductPageData.
		// This helps with type checking and ensures that the returned object conforms to the expected structure defined by the ProductPageData type.
	} catch (err) {
		// Log any unexpected errors
		console.error('Unexpected error:', err instanceof Error ? err.message : String(err))
		// Return a failure response with a 500 status code and error message
		return fail(500, { error: 'An unexpected error occurred' })
	}

	//Catch Block:
	// The catch block is part of a try...catch statement. It is used to handle any errors that occur in the try block.
	// If an error is thrown in the try block, the catch block will execute.

	// Error Parameter:
	// The catch block takes a single parameter, err, which represents the error that was thrown.
	// This parameter can be of any type, but it is often an instance of the Error class.

	// Logging the Error:
	// console.error('Unexpected error:', err instanceof Error ? err.message : String(err));
	// This line logs the error to the console for debugging purposes.
	// It uses a ternary operator to check if err is an instance of the Error class. If it is, it logs the error message (err.message). If it is not, it converts the error to a string and logs it.

	// Returning a Failure Response:
	// return fail(500, { error: 'An unexpected error occurred' });
	// This line returns a failure response with a 500 status code and an error message.
	// The fail function is used to indicate that the server encountered an error while processing the request.
	// The response includes an error message that can be displayed to the user.
}
