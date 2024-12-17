// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies }) => {
	const { user } = await safeGetSession()

	// Example: Set a cookie for theme or session
	cookies.set('siteTheme', 'dark', {
		path: '/', // Available on all routes
		httpOnly: true, // Not accessible via JavaScript
		secure: true, // Send only over HTTPS
		sameSite: 'lax', // Avoid CSRF
		maxAge: 60 * 60 * 24 * 7 // Cookie lifespan: 7 days in seconds
	})

	return {
		user,
		cookies: cookies.getAll()
	}
}
