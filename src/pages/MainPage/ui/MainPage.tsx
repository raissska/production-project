import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    // const [value, setValue] = useState('');

    // const onChange = (val: string) => {
    //     setValue(val);
    // };

    return (
        <div>
            {t('mainPage')}
        </div>
    );
});

export default MainPage;
