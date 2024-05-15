import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Field } from './Field'; // ajuste o caminho conforme necessário

describe('Field Component', () => {
  it('renders correctly', () => {
    const label = 'Test Label';
    const inputProps = {
      type: 'text',
      placeholder: 'Enter text here',
      name: 'testInput',
    };

    render(<Field id="testField" label={label} {...inputProps} />);

    // Verificar se o Label é renderizado com o texto correto
    expect(screen.getByLabelText(label)).toBeInTheDocument();

    // Verificar se o TextInput é renderizado com o placeholder correto
    expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument();
  });

  it('renders an error message when an error is provided', () => {
    const label = 'Test Label';
    const error = 'Error message';
    const inputProps = {
      type: 'text',
      placeholder: 'Enter text here',
      name: 'testInput',
    };

    render(
      <Field id="testField" label={label} error={error} {...inputProps} />,
    );

    // Verificar se a mensagem de erro é renderizada
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
