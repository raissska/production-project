import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeblockComponent.module.scss';

interface ArticleCodeblockComponentProps {
   className?: string;
   block: ArticleCodeBlock;
}

export const ArticleCodeblockComponent = memo((props: ArticleCodeblockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleCodeblockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
