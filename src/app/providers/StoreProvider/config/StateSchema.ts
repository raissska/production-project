import {
    EnhancedStore,
    AnyAction, Reducer, ReducersMapObject, CombinedState,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { ProfileSchema } from 'entities/Profile';
import { UserScheme } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
   counter: CounterSchema;
   user: UserScheme;

   // async reducers
   login?: LoginSchema;
   profile?: ProfileSchema;
   articleDetails?: ArticleDetailsSchema;
   articleDetailsComments?: ArticleDetailsCommentsSchema;

}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
   add: (key: StateSchemaKey, reducer: Reducer) => void;
   remove: (key: StateSchemaKey) => void;

 }

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {

   reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
   api: AxiosInstance,
   navigate?:(to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
   state: StateSchema;
}
