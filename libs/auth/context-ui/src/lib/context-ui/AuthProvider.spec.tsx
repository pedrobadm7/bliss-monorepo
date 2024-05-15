// AuthProvider.test.tsx

import { act, render } from '@testing-library/react';
import React from 'react';
import { AuthProvider, useAuth } from './AuthProvider'; // ajuste o caminho conforme necessário

// Mock do localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem(key: string): string | null {
      return store[key] || null;
    },
    setItem(key: string, value: string): void {
      store[key] = value.toString();
    },
    clear(): void {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('AuthProvider', () => {
  it('allows a user to sign in and sign out', () => {
    let auth: ReturnType<typeof useAuth>;
    const TestComponent: React.FC = () => {
      auth = useAuth();
      return null;
    };

    // Renderiza o componente com o AuthProvider
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    // Simula a função signin
    act(() => {
      auth.signin({
        token: '12345',
        user: {
          id: 1,
          userName: 'johndoe',
          name: 'John Doe',
          profileImageUrl: 'url',
        },
      });
    });

    // Verifica se o signin atualizou o estado corretamente
    expect(auth.token).toBe('12345');
    expect(auth.user).toEqual({
      id: 1,
      userName: 'johndoe',
      name: 'John Doe',
      profileImageUrl: 'url',
    });

    // Simula a função signout
    act(() => {
      auth.signout();
    });

    // Verifica se o signout limpou o estado
    expect(auth.token).toBeNull();
    expect(auth.user).toBeNull();
  });

  it('persists authentication state to localStorage', () => {
    const TestComponent: React.FC = () => {
      const auth = useAuth();

      // Use useEffect para garantir que as chamadas de função aconteçam após a montagem
      React.useEffect(() => {
        auth.signin({
          token: '12345',
          user: {
            id: 1,
            userName: 'johndoe',
            name: 'John Doe',
            profileImageUrl: 'url',
          },
        });

        // Verifica localStorage na próxima etapa do ciclo de vida
        setTimeout(() => {
          expect(window.localStorage.getItem('bliss-auth')).toEqual(
            JSON.stringify({
              token: '12345',
              user: {
                id: 1,
                userName: 'johndoe',
                name: 'John Doe',
                profileImageUrl: 'url',
              },
            }),
          );
        }, 0);
      }, []);

      return null;
    };

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );
  });
});
