export const actions: Actions = {
	submit: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const submissionData = {
			full_name: formData.get('full_name'),
			contact_point: formData.get('contact_point'),
			message: formData.get('message')
		};
		try {
			const { error } = await supabase.from('inbox').insert(submissionData);
			if (error) {
				return fail(500, { error: error.message });
			}
		} catch (error) {
			return fail(500, { error: error.message });
		}
	}
};
