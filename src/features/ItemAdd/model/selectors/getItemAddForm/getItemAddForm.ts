import { buildSelector } from '@/shared/lib/store';

export const [useItemAddSelector, getItemAddForm] = buildSelector(
    (state) => state.itemAdd?.item /* ?? {
            codes: { html: '', css: '', js: '' },
            title: '',
            description: '',
            type: 'not selected',
            img: '',
            imgAnim: '',
        }, */,
);
