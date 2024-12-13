import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    submit: async ({ request, locals: { supabase, safeGetSession } }) => {
        const formData = await request.formData();

        // Extract form data
        const full_name = formData.get('full_name')?.toString().trim();
        const contact_point = formData.get('contact_point')?.toString().trim();
        const message = formData.get('message')?.toString().trim();

        // Validation
        if (!full_name || !contact_point || !message) {
            return fail(400, { error: 'All fields are required.', values: { full_name, contact_point, message } });
        }

        // Rate limiting: Check the last submission time
        const { data: lastSubmission, error: lastSubmissionError } = await supabase
            .from('inbox')
            .select('submitted_at')
            .eq('contact_point', contact_point)
            .order('submitted_at', { ascending: false })
            .limit(2);

        if (lastSubmissionError) {
            return fail(500, { error: lastSubmissionError.message });
        }

        if (lastSubmission.length > 0) {
            const lastSubmittedAt = new Date(lastSubmission[0].submitted_at);
            const now = new Date();
            const timeDifference = (now - lastSubmittedAt) / 1000; // Time difference in seconds

            if (timeDifference < 60) { // Allow only two submissions per minute
                return fail(429, { error: 'Please wait a minute before submitting another message.' });
            }
        }

        // Insert data into Supabase
        try {
            const { data, error } = await supabase.from('inbox').insert({ full_name, contact_point, message });

            if (error) {
                return fail(500, { error: error.message });
            }

            return { success: true };
        } catch (error) {
            return fail(500, { error: error.message });
        }
    }
};
