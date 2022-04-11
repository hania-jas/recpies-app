import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonType } from '../../components/button/button.enums';

import {
  AppTitle,
  ButtonsContainer,
  ChangeLanguageButton,
  Container,
  Header,
  InnerContainer,
  StyledButton,
} from './home.styled';

export const HomeView: React.FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>('en');

  useEffect(
    (): void => {
      i18n.changeLanguage(language);
    },
    [language],
  );

  const changeLang: () => void = (): void => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  return (
    <Container>
      <ChangeLanguageButton onClick={changeLang}>{language.toUpperCase()}</ChangeLanguageButton>
      <InnerContainer>
        <AppTitle>{t('app.common.title')}</AppTitle>
        <Header>{t('app.views.home.header')}</Header>
        <ButtonsContainer>
          <StyledButton text={t('app.views.home.signIn')} onClick={(): void => undefined} />
          <StyledButton type={ButtonType.Secondary} text={t('app.views.home.register')} onClick={(): void => undefined} />
        </ButtonsContainer>
      </InnerContainer>
    </Container>
  );
};
