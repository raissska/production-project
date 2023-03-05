import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { UserScheme } from 'entities/User';

export interface StateSchema {
   counter: CounterSchema;
   user: UserScheme;
}
