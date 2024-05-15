// AuthProvider.test.tsx
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthProvider';

// Componente fictício para testar o uso do contexto
const ConsumerComponent = () => {
  const auth = useAuth();
  return <div>{auth.user ? auth.user.name : 'No user'}</div>;
};

describe('AuthProvider', () => {
  it('renders its children and provides the auth context', () => {
    // Mock de localStorage, se necessário
    Storage.prototype.getItem = jest.fn(() => null);

    const { getByText } = render(
      <AuthProvider>
        <ConsumerComponent />
      </AuthProvider>,
    );

    // Verifica se o texto indicativo de "No user" está presente, mostrando que o contexto padrão está sendo fornecido
    expect(getByText('No user')).toBeInTheDocument();
  });
});
