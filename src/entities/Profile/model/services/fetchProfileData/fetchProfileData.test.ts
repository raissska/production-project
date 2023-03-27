import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const res = await thunk.callThunk('1');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(res.payload).toEqual(data);
        // expect
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const res = await thunk.callThunk('1');

        expect(res.meta.requestStatus).toBe('rejected');
    });
});
