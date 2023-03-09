import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { UserScheme } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
   counter: CounterSchema;
   user: UserScheme;
   login: LoginSchema;
}
