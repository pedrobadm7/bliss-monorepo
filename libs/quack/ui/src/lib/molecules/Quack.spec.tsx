import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Quack } from './Quack';

jest.mock('@bliss/navigation/util', () => ({
  route: {
    userDetail: jest.fn((userName) => `/users/${userName}`),
  },
}));

jest.mock('@bliss/ui', () => ({
  AvatarPhoto: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
  UserName: ({ name }: { name: string }) => <span>{name}</span>,
  UserUserName: ({ userName }: { userName: string }) => (
    <span>@{userName}</span>
  ),
}));
describe('Quack Component', () => {
  it('renders correctly with given props', () => {
    const quackProps = {
      quack: {
        user: {
          name: 'John Doe',
          userName: 'johndoe',
          profileImageUrl: 'http://example.com/johndoe.jpg',
        },
        text: 'Hello, world!',
        createdAt: '2021-01-01T12:00:00.000Z',
      },
    };

    render(
      <Router>
        <Quack {...quackProps} />
      </Router>,
    );

    // Verificar se o link para o perfil do usuário está correto
    const profileLink = screen.getByRole('link', { name: 'John Doe @johndoe' });
    expect(profileLink.getAttribute('href')).toBe('/users/johndoe');

    // Verificar se a imagem do avatar é renderizada corretamente
    expect(screen.getByAltText('John Doe')).toHaveAttribute(
      'src',
      'http://example.com/johndoe.jpg',
    );

    // Verificar se o nome e o username são renderizados
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('@johndoe')).toBeInTheDocument();

    // Verificar se o texto do quack é renderizado
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();

    // Verificar a data formatada
    expect(screen.getByText(/01-01-2021 9:00/)).toBeInTheDocument();
  });
});
