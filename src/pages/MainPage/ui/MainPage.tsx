import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    // const [value, setValue] = useState('');

    // const onChange = (val: string) => {
    //     setValue(val);
    // };

    return (
        <Page>
            {t('mainPage')}
        </Page>
    );
});

export default MainPage;
