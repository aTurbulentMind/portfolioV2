// +page.server.ts

import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
	const { session } = await safeGetSession()

	if (!session) {
		await supabase.auth.getUser()
		redirect(303, '/')
	}

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	// Step 1: Validate user with supabase.auth.getUser() to ensure authenticity
	const { data: userData, error: userError } = await supabase.auth.getUser()

	if (userError || !userData.user) {
		console.error('Failed to validate user:', userError?.message)
		throw redirect(303, '/') // Redirect if user is not authenticated
	}

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	const { data: profile, error: profileError } = await supabase
		.from('profiles')
		.select(`username, full_name, contact,avatar_url`)
		.eq('id', session.user.id)
		.single()

	if (profileError) {
		console.error('Error fetching profile:', profileError.message)
		return fail(500, { error: profileError.message })
	}
	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	// Fetch new messages form inbox table
	const { data: newMessage, error: messageError } = await supabase.from('inbox').select('*')

	if (messageError) {
		console.error('Error fetching new messages:', messageError.message)
		return fail(500, { error: messageError.message })
	}

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	return { session, profile, newMessage }
}

export const actions: Actions = {
	update: async ({ request, locals: { supabase, safeGetSession } }) => {
		const formData = await request.formData()
		const fullName = formData.get('fullName') as string
		const username = formData.get('username') as string
		const contact = formData.get('contact') as string
		const avatarUrl = formData.get('avatarUrl') as string

		//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

		const { session } = await safeGetSession()

		//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

		const { error } = await supabase.from('profiles').upsert({
			id: session?.user.id,
			full_name: fullName,
			username,
			contact,
			avatar_url: avatarUrl,
			updated_at: new Date()
		})

		if (error) {
			return fail(500, {
				fullName,
				username,
				contact,
				avatarUrl
			})
		}

		return {
			fullName,
			username,
			contact,
			avatarUrl
		}
	},

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	updateMessageViewed: async ({ request, locals: { supabase, safeGetSession } }) => {
		const { session } = await safeGetSession()

		if (!session) {
			return fail(401, { error: 'Unauthorized' })
		}

		const formData = await request.formData()
		const messageId = formData.get('messageId')
		const viewed = formData.get('viewed') === 'on' // Adjusted here

		try {
			const { error } = await supabase.from('inbox').update({ viewed }).eq('id', messageId)

			if (error) {
				console.error('Error updating message:', error.message)
				return fail(500, { error: error.message })
			}

			return { success: true }
		} catch (error) {
			console.error('Error updating message:', error)
			return fail(500, { error: error.message })
		}
	},

	//➖ ➖ ➖ ➖ ➖ 🦖➖🦕🦕 ➖ ➖ 🌟  🌟  🌟 💣

	signout: async ({ locals: { supabase, safeGetSession } }) => {
		const { session } = await safeGetSession()
		if (session) {
			await supabase.auth.signOut()
			redirect(303, '/')
		}
	}
}
