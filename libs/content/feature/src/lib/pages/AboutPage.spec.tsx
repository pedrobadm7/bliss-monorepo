import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AboutPage } from './AboutPage';

jest.mock('../templates/AboutTemplate', () => ({
  AboutTemplate: () => <div>About content</div>,
}));

describe('AboutPage', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<AboutPage />);

    expect(getByText('About content')).toBeInTheDocument();
  });
});
