import { MockedProvider } from '@apollo/client/testing';
import { useAuth } from '@bliss/auth/contex-ui';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { USER_DETAIL_QUERY, UserDetailPage } from './UserDetailPage';

const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

const userDetailMock = {
  request: {
    query: USER_DETAIL_QUERY,
    variables: { userName: 'john_doe' },
  },
  result: {
    data: {
      user: {
        id: 1,
        name: 'John Doe',
        username: 'john_doe',
      },
    },
  },
};

describe.skip('UserDetailPage', () => {
  beforeEach(() => {
    // Definindo o retorno do hook simulado
    mockedUseAuth.mockReturnValue({
      token: 'test-token',
      user: {
        id: 1,
        name: 'John Doe',
        userName: 'john_doe',
        profileImageUrl: 'teste',
      },
      signin: jest.fn(),
      signout: jest.fn(),
    });
  });

  it('renders without crashing', async () => {
    render(
      <MockedProvider mocks={[userDetailMock]} addTypename={false}>
        <MemoryRouter initialEntries={['/user/john_doe']}>
          <Route path="/user/:userName">
            <UserDetailPage />
          </Route>
        </MemoryRouter>
      </MockedProvider>,
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
