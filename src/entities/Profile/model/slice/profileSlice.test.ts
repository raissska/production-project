import { DeepPartial } from 'app/types/global';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileReducer, profileActions } from './profileSlice';

const data = {
    first: 'Raisa',
    lastname: 'Myronova',
    age: 33,
    currency: Currency.NIS,
    country: Country.Israel,
    city: 'Ashdod',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('test set read only', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(profileReducer(
          state as ProfileSchema,
          profileActions.setReadonly(true),
        ))
            .toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
        state as ProfileSchema,
        profileActions.cancelEdit(),
        ))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data,
            });
    });

    test('test updatel profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'new name' } };
        expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: 'new name' }),
        ))
            .toEqual({
                form: { username: 'new name' },
            });
    });

    test('test updatel profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] };
        expect(profileReducer(
          state as ProfileSchema,
          updateProfileData.pending,
        ))
            .toEqual({
                isLoading: true, validateErrors: undefined,
            });
    });

    test('test updatel profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true };
        expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
        ))
            .toEqual({
                isLoading: false,
                data,
                form: data,
                readonly: true,
                validateErrors: undefined,
            });
    });
});
