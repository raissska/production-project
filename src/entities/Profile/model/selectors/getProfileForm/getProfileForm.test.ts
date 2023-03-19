import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'app/types/global';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return profile data', () => {
        const form = {
            first: 'Raisa',
            lastname: 'Myronova',
            age: 33,
            currency: Currency.NIS,
            country: Country.Israel,
            city: 'Ashdod',
            username: 'admin',
            // eslint-disable-next-line max-len
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Default&skinColor=Pale',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
