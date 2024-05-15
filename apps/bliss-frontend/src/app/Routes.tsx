import { AboutPage } from '@bliss/content/feature';
import { SignInPage, SignUpPage } from '@bliss/navigation/feature';
import { PageNotFound } from '@bliss/navigation/ui';
import { route } from '@bliss/navigation/util';
import { HomePage, UserDetailPage } from '@bliss/quack/feature';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

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
