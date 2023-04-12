import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
   className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <div className={classNames(cls.articleEditPage, {}, [className])}>
            {isEdit ? t(`Edit Article by id: ${id}`) : t('Craete new article') }
        </div>
    );
};

export default ArticleEditPage;
