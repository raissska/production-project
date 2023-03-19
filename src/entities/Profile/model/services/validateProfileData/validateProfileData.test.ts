import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
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

describe('validateProfileData.test', () => {
    test('success', () => {
        const res = validateProfileData(data);
        expect(res).toEqual([]);
    });

    test('without first and last name', () => {
        const res = validateProfileData({ ...data, first: '', lastname: '' });
        expect(res).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        const res = validateProfileData({ ...data, age: undefined });
        expect(res).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect all', () => {
        const res = validateProfileData({});
        expect(res).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY]);
    });
});
