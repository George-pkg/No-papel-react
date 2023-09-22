import { render, screen } from '@testing-library/react';
import App from './App';
import FormHome from './pages/FormHome/FormHome';

describe('login', () => {

  test('given name, when empty, then show required error message', () => {
    render(<FormHome />)

    const name =screen.getByTestId('name');

  })

})
