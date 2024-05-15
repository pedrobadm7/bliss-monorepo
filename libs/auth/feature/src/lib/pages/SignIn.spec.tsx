import '@testing-library/jest-dom';

import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SignInPage } from './SignInPage';

jest.mock('@bliss/auth/contex-ui', () => ({
  useAuth: () => ({
    signin: jest.fn(),
  }),
}));

jest.mock('@bliss/auth/ui', () => ({
  SignInTemplate: ({
    isLoading,
    error,
    onSubmit,
  }: {
    isLoading: boolean;
    error: string;
    onSubmit: (props: { email: string; password: string }) => void;
  }) => (
    <form
      onSubmit={() =>
        onSubmit({ email: 'test@test.com', password: 'password' })
      }
    >
      {isLoading ? 'Loading...' : 'Not Loading'}
      {error && <span>Error occurred</span>}
      <button type="submit">Sign In</button>
    </form>
  ),
}));

describe('SignInPage', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <MockedProvider>
        <MemoryRouter>
          <SignInPage />
        </MemoryRouter>
      </MockedProvider>,
    );

    // Verifica se o botão de Sign In está presente para indicar que o componente foi renderizado
    expect(getByText('Sign In')).toBeInTheDocument();
  });
});
