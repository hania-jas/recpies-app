import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, FormikProps, FormikErrors } from 'formik';
import * as Yup from 'yup';

import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Container, Form, FormContainer, Header, StyledButton, StyledInput } from './signIn.styled';
import { useAuth, useFormik } from '../../hooks';
import { UseAuth, UseFormik } from '../../types';
import { LoginModel, UserWithToken } from '../../models';
import { useSignInValidation } from './signIn.hooks';
import { RoutingPath } from '../../enums';
import { loginRequest } from '../../api';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const SignInView: React.FC = (): React.JSX.Element => {
  const { t } = useTranslation();
  const { isFormSubmitted, setIsFormSubmitted }: UseFormik = useFormik();
  const SignInFormValidationSchema: Yup.Schema<LoginModel> = useSignInValidation();
  const { signIn }: UseAuth = useAuth();
  const navigate: NavigateFunction = useNavigate();

  const mutation: UseMutationResult<UserWithToken, Error, LoginModel> = useMutation({
    mutationFn: (data: LoginModel) => loginRequest(data),
    onError: () => {
      // add error handling!
      (): void => undefined
    },
    onSuccess: (response: UserWithToken) => {
      signIn(response.user, response.jwt);
      navigate(RoutingPath.Home);
    },
  })

  return (
    <Container>
      <FormContainer>
        <Header>{t('app.views.signIn.header')}</Header>
        <Formik
          initialValues={{ identifier: '', password: '' }}
          onSubmit={mutation.mutate}
          validateOnBlur={isFormSubmitted}
          validateOnChange={isFormSubmitted}
          validationSchema={SignInFormValidationSchema}
        >
          {({ handleSubmit, setFieldValue, errors }: FormikProps<LoginModel>): React.JSX.Element => (
            <Form onSubmit={handleSubmit}>
              <StyledInput
                infoMessage={errors.identifier || ''}
                label={t('app.common.email')}
                onBlur={(value: string): Promise<void | FormikErrors<LoginModel>> => setFieldValue('identifier', value)}
                onChange={(value: string): Promise<void | FormikErrors<LoginModel>> => setFieldValue('identifier', value)}
              />
              <StyledInput
                infoMessage={errors.password || ''}
                label={t('app.common.password')}
                onBlur={(value: string): Promise<void | FormikErrors<LoginModel>> => setFieldValue('password', value)}
                onChange={(value: string): Promise<void | FormikErrors<LoginModel>> => setFieldValue('password', value)}
                type="password"
              />
              <StyledButton
                onClick={setIsFormSubmitted}
                text={t('app.common.signIn')}
                type="submit"
              />
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};
