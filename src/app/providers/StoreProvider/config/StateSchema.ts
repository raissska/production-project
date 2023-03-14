import {
    EnhancedStore,
    AnyAction, Reducer, ReducersMapObject, CombinedState,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { ProfileSchema } from 'entities/Profile';
import { UserScheme } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
   counter: CounterSchema;
   user: UserScheme;

   // async reducers
   login?: LoginSchema;
   profile?: ProfileSchema;

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
