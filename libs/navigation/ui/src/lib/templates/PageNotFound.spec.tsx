// PageNotFound.test.tsx
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { PageNotFound } from './PageNotFound';

describe('PageNotFound component', () => {
  it('renders the error 404 title and message', () => {
    const { getByText, getAllByText } = render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>,
    );

    // Verifica se o título do erro 404 é renderizado
    expect(getByText('Error 404')).toBeInTheDocument();

    // Verifica se o link para a página inicial está presente e correto
    const homeLink = getAllByText('Home');
    expect(homeLink[0]).toBeInTheDocument();
    expect(homeLink[0].closest('a')).toHaveAttribute('href', '/');
  });
});
