import { act, render } from '@testing-library/react';
import React from 'react';
import { AuthProvider, useAuth } from './AuthProvider';
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
  it('allows a user to sign in and sign out', async () => {
    const TestComponent: React.FC = () => {
      const auth = useAuth();

      React.useEffect(() => {
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

        setTimeout(() => {
          expect(auth.token).toBe('12345');
          expect(auth.user).toEqual({
            id: 1,
            userName: 'johndoe',
            name: 'John Doe',
            profileImageUrl: 'url',
          });

          act(() => {
            auth.signout();
          });

          expect(auth.token).toBeNull();
          expect(auth.user).toBeNull();
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

  it('persists authentication state to localStorage', () => {
    const TestComponent: React.FC = () => {
      const auth = useAuth();

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
