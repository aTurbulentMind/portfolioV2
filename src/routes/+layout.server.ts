// +layout.server.ts
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
	// Get the current user
	const {
		data: { user }
	} = await supabase.auth.getUser()

	return {
		user
	}
}
