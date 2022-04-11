import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Button } from './button.component';
import { ButtonProps } from './button.types';

const buttonProps: ButtonProps = {
  text: 'button',
  onClick: jest.fn(),
};

test('It renders', () => {
  const { getByRole } = render(<Button {...buttonProps} />);

  const button: HTMLElement = getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(String(buttonProps.text));
});

test('It fires event on click', () => {
  const { getByRole } = render(<Button {...buttonProps} />);

  const button: HTMLElement = getByRole('button');
  fireEvent.click(button);

  expect(buttonProps.onClick).toHaveBeenCalled();
});
