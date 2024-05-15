import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Field } from './Field';

describe('Field component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Field id="test" label="Test Label" />);

    expect(getByText('Test Label')).toBeInTheDocument();
  });
});
