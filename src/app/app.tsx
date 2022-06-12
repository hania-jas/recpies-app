import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RoutingPath } from '../enums';
import { GlobalStyle } from '../theme/globalStyle.theme';
import { HomeView, SignInView } from '../views';

const App: React.FC = (): JSX.Element => (
  <Router>
    <GlobalStyle />
    <Routes>
      <Route path={RoutingPath.Home} element={<HomeView />} />
      <Route path={RoutingPath.SignIn} element={<SignInView />} />
    </Routes>
  </Router>
);

export default App;
