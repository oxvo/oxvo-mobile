import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import SignInScreen from './SignIn';

describe('SignInScreen', () => {
  it('should show error messages if inputs are invalid', async () => {
    const { getByTestId, getByText } = render(<SignInScreen />);
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const submitButton = getByText('Sign In');

    fireEvent.changeText(emailInput, 'invalidemail');
    fireEvent.changeText(passwordInput, 'password');

    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(getByText('Invalid email format')).toBeDefined();
    });
  });
});
