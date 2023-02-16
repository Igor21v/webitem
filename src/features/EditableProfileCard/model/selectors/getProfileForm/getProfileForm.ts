import { buildSelector } from '@/shared/lib/store';

export const [useProfileForm, getProfileForm] = buildSelector(
    (state) => state.profile?.form,
);

/* export const getProfileForm = (state: StateSchema) => state.profile?.form; */
