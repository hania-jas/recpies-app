import { TransProps, useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { LoginModel } from '../../models';

export const useSignInValidation: () => Yup.Schema<LoginModel> = (): Yup.Schema<LoginModel> => {
  const { t }: TransProps<never> = useTranslation();

  return Yup.object().shape({
    identifier: Yup.string()
      .required(t('app.common.requiredField')),
    password: Yup.string()
      .required(t('app.common.requiredField')),
  });
};
