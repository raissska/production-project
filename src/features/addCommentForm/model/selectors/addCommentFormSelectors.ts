import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentFormText = (stare: StateSchema) => stare.addCommentForm?.text ?? '';
export const getCommentFormError = (stare: StateSchema) => stare.addCommentForm?.error;
