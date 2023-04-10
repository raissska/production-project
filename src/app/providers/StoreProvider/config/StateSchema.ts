import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { OptionalRecord } from 'app/types/global';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { ProfileSchema } from 'entities/Profile';
import { UserScheme } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ScrollSaveSchema } from 'features/scrollSave';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
   counter: CounterSchema;
   user: UserScheme;
   scrollSave: ScrollSaveSchema;

   // async reducers
   login?: LoginSchema;
   profile?: ProfileSchema;
   articleDetails?: ArticleDetailsSchema;
   addCommentForm?: AddCommentFormSchema;
   articlesPage?: ArticlesPageSchema;
   articleDetailsPage?: ArticleDetailsPageSchema;

}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
   add: (key: StateSchemaKey, reducer: Reducer) => void;
   remove: (key: StateSchemaKey) => void;
   // true - mounted, false - dismounted
   getMountedreducers: () => MountedReducers;

 }

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {

   reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
   api: AxiosInstance,

}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
   state: StateSchema;
}
