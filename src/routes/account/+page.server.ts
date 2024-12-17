import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const {
		data: { session }
	} = await supabase.auth.getSession()

	if (!session) {
		throw redirect(303, '/')
	}

	const {
		data: { user },
		error: userError
	} = await supabase.auth.getUser()

	if (userError || !user) {
		throw redirect(303, '/')
	}

	try {
		const { data: profile, error: profileError } = await supabase
			.from('profiles')
			.select(`username, full_name, contact, avatar_url`)
			.eq('id', user.id)
			.single()

		if (profileError) {
			console.error('Error fetching profile:', profileError.message)
			return { session, profile: null }
		}

		const { data: newMessage, error: messageError } = await supabase.from('inbox').select('*')

		if (messageError) {
			console.error('Error fetching new messages:', messageError.message)
			return { session, profile, newMessage: [] }
		}

		return { session, profile, newMessage }
	} catch (error) {
		console.error('Unexpected error:', error)
		return { session, profile: null, newMessage: [] }
	}
}

export const actions: Actions = {
	update: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData()
		const fullName = formData.get('fullName')?.toString() || ''
		const username = formData.get('username')?.toString() || ''
		const contact = formData.get('contact')?.toString() || ''
		const avatarUrl = formData.get('avatarUrl')?.toString() || ''

		const {
			data: { session }
		} = await supabase.auth.getSession()

		if (!session) {
			return fail(401, { error: 'Unauthorized' })
		}

		const { error } = await supabase.from('profiles').upsert({
			id: session.user.id,
			full_name: fullName,
			username,
			contact,
			avatar_url: avatarUrl,
			updated_at: new Date()
		})

		if (error) {
			return fail(500, {
				error: error.message,
				fullName,
				username,
				contact,
				avatarUrl
			})
		}

		return {
			success: true,
			fullName,
			username,
			contact,
			avatarUrl
		}
	},

	updateMessageViewed: async ({ request, locals: { supabase } }) => {
		const {
			data: { session }
		} = await supabase.auth.getSession()

		if (!session) {
			return fail(401, { error: 'Unauthorized' })
		}

		const formData = await request.formData()
		const messageId = formData.get('messageId')?.toString()
		const viewed = formData.get('viewed') === 'on'

		if (!messageId) {
			return fail(400, { error: 'Message ID is required' })
		}

		const { error } = await supabase.from('inbox').update({ viewed }).eq('id', messageId)

		if (error) {
			console.error('Error updating message:', error.message)
			return fail(500, { error: error.message })
		}

		return { success: true }
	},

	signout: async ({ locals: { supabase } }) => {
		const {
			data: { session }
		} = await supabase.auth.getSession()

		if (session) {
			await supabase.auth.signOut()
		}

		throw redirect(303, '/')
	}
}
