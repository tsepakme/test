import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoginForm } from './LoginForm';
import { BrowserRouter } from 'react-router-dom';
import { mockAuth } from '../../shared/api/auth';

jest.mock('../../shared/api/auth', () => ({
  mockAuth: jest.fn()
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

describe('LoginForm', () => {
  beforeEach(() => {
    (mockAuth as jest.Mock).mockResolvedValue({ token: 'test-token', message: 'Login successful' });
  });

  it('renders the form elements', () => {
    render(<BrowserRouter><LoginForm /></BrowserRouter>);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Remember me')).toBeInTheDocument();
    expect(screen.getByText('Forgot password?')).toBeInTheDocument();
  });

  it('shows error message on failed login', async () => {
    (mockAuth as jest.Mock).mockResolvedValue({ message: 'Invalid credentials' });

    render(<BrowserRouter><LoginForm /></BrowserRouter>);

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'wrong@email.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });
  });
});