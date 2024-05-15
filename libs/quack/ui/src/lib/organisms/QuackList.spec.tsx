import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { QuackList } from './QuackList';

jest.mock('@bliss/ui', () => ({
  Button: ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  ),
  ErrorBanner: ({ children, title }) => (
    <div>
      {title}
      {children}
    </div>
  ),
  Loading: () => <div>Loading...</div>,
}));

describe('QuackList component', () => {
  it('renders Reload button when there is an error', () => {
    const mockError = new Error('Error loading quacks');

    const { getByText } = render(
      <QuackList
        quacks={[]}
        isLoading={false}
        error={mockError}
        refetch={() => console.log('refetch')}
      />,
    );

    expect(getByText('Reload')).toBeInTheDocument();
  });
});
