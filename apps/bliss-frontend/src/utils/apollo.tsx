import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const LOCAL_STORAGE_AUTH_KEY = 'bliss-auth';

export type AuthUser = {
  id: number;
  userName: string;
  name: string;
  profileImageUrl: string;
};

export type PersistedState = {
  token: string | null;
  user: AuthUser | null;
};

const initialState: PersistedState = {
  token: null,
  user: null,
};

export const AuthContext = createContext<{
  token: string | null;
  user: AuthUser | null;
  signin: (data: { token: string; user: AuthUser }) => void;
  signout: () => void;
}>({
  token: null,
  user: null,
  signin: () =>
    console.error('You are using AuthContext without AuthProvider!'),
  signout: () =>
    console.error('You are using AuthContext without AuthProvider!'),
});

export function useAuth() {
  return useContext(AuthContext);
}

export type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = usePersistedAuth(initialState);

  const contextValue = useMemo(
    () => ({
      token: state.token,
      user: state.user,
      signin: ({ token, user }: { token: string; user: AuthUser }) =>
        setState({ token, user }),
      signout: () => setState({ token: null, user: null }),
    }),
    [state],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

type AuthProviderState = { token: string | null; user: AuthUser | null };

function usePersistedAuth(defaultState: PersistedState) {
  const [state, setStateRaw] = useState<AuthProviderState>(() =>
    getStorageState(defaultState),
  );

  const setState = useCallback((newState: AuthProviderState) => {
    setStateRaw(newState);
    setStorageState(newState);
  }, []);

  return [state, setState] as const;
}

function getStorageState(defaultState: PersistedState): PersistedState {
  if (!window.localStorage) {
    return defaultState;
  }

  const rawData = window.localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
  if (!rawData) {
    return defaultState;
  }

  try {
    const { user, token } = JSON.parse(rawData);
    if (token && user && user.userName && user.id && user.name) {
      return { token, user };
    }
  } catch {
    // ignore
  }

  return defaultState;
}

function setStorageState(newState: PersistedState) {
  if (!window.localStorage) {
    return;
  }

  window.localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(newState));
}
