import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getCommentFormError, getCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
   className?: string;
   onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getCommentFormText);
    const error = useSelector(getCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentChangeText = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentChangeText('');
    }, [onSendComment, onCommentChangeText, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.addCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Enter comment text')}
                    value={text}
                    onChange={onCommentChangeText}
                />
                <Button onClick={onSendHandler}>{t('Send')}</Button>
            </div>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
