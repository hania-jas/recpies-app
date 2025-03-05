import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  AppTitle,
  ChangeLanguageButton,
  Container,
  Header,
  InnerContainer,
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
      </InnerContainer>
    </Container>
  );
};
