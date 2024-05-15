// TopNavigation.test.tsx
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TopNavigation } from './TopNavigation';
// Mocks necessários
jest.mock('@bliss/auth/contex-ui', () => ({
  useAuth: () => ({
    user: null,
    signout: jest.fn(),
  }),
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // import and retain the original functionalities
  useNavigate: () => jest.fn(),
}));

describe('TopNavigation', () => {
  it('displays the Bliss name', () => {
    const { getByText } = render(
      <MemoryRouter>
        <TopNavigation />
      </MemoryRouter>,
    );

    // Verifica se o texto "Bliss" é renderizado
    expect(getByText('Bliss')).toBeInTheDocument();
  });
});
