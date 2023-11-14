import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, FormikProps, FormikErrors } from 'formik';
import * as Yup from 'yup';

import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Container, Form, StyledButton, StyledInput } from './signIn.styled';
import { useAuth, useFormik } from '../../hooks';
import { UseAuth, UseFormik } from '../../types';
import { LoginModel, UserWithToken } from '../../models';
import { useSignInValidation } from './signIn.hooks';
import { loginRequest } from '../../api/requests';
import { RoutingPath } from '../../enums';

export const SignInView: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { isFormSubmitted, setIsFormSubmitted }: UseFormik = useFormik();
  const SignInFormValidationSchema: Yup.Schema<LoginModel> = useSignInValidation();
  const { signIn }: UseAuth = useAuth();
  const navigate: NavigateFunction = useNavigate();

  const loginAction: (data: LoginModel) => void = (data: LoginModel): void => {
    loginRequest(data)
      .then((response: UserWithToken): void => {
        signIn(response.user, response.jwt);
        navigate(RoutingPath.Home);
      })
      // TODO: add error handler
      .catch((): void => undefined);
  };

  return (
    <Container>
      <Formik
        initialValues={{ identifier: '', password: '' }}
        onSubmit={loginAction}
        validationSchema={SignInFormValidationSchema}
        validateOnChange={isFormSubmitted}
        validateOnBlur={isFormSubmitted}
      >
        {({ handleSubmit, setFieldValue, errors }: FormikProps<LoginModel>): JSX.Element => (
          <Form onSubmit={handleSubmit}>
            <StyledInput
              label={t('app.common.email')}
              onChange={(value: string): Promise<void | FormikErrors<LoginModel>> => setFieldValue('identifier', value)}
              onBlur={(value: string): Promise<void | FormikErrors<LoginModel>> => setFieldValue('identifier', value)}
              infoMessage={errors.identifier || ''}
            />
            <StyledInput
              label={t('app.common.password')}
              type="password"
              onChange={(value: string): Promise<void | FormikErrors<LoginModel>> => setFieldValue('password', value)}
              onBlur={(value: string): Promise<void | FormikErrors<LoginModel>> => setFieldValue('password', value)}
              infoMessage={errors.password || ''}
            />
            <StyledButton
              text={t('app.common.signIn')}
              type="submit"
              onClick={setIsFormSubmitted}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};
