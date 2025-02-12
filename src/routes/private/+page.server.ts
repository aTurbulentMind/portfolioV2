import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data: inbox } = await supabase
		.from('inbox')
		.select('*')
		.limit(5)
		.order('submitted_at', { ascending: false });

	const { data: profiles } = await supabase.from('profiles').select('*');

	return { inbox: inbox ?? [], profiles: profiles ?? [] };
};
