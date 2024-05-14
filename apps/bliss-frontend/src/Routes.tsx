import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { SignInPage, SignUpPage } from './auth/feature';
import { AboutPage } from './content/feature';
import { PageNotFound } from './navigation/ui';
import { HomePage, UserDetailPage } from './quack/feature';

export const route = {
  home: () => `/`,
  about: () => `/about`,
  signIn: () => `/auth/signin`,
  signUp: () => `/auth/signup`,
  userDetail: (userName: string) => `/${userName}`,
};

export function Routes() {
  return (
    <RouterRoutes>
      <Route path={route.home()} element={<HomePage />} />
      <Route path={route.about()} element={<AboutPage />} />
      <Route path={route.signIn()} element={<SignInPage />} />
      <Route path={route.signUp()} element={<SignUpPage />} />
      <Route
        path={route.userDetail(':userName')}
        element={<UserDetailPage />}
      />
      <Route path="*" element={<PageNotFound />} />
    </RouterRoutes>
  );
}
