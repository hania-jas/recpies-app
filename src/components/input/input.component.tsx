import * as React from 'react';
import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  FocusEvent,
  useState,
  useEffect,
} from 'react';
import { TransProps, useTranslation } from 'react-i18next';

import {
  BaseInput,
  Container,
  InputLabel,
  TogglePasswordType,
} from './input.styled';
import { InputProps } from './input.types';
import { UseState } from '../../types';

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const { t }: TransProps<never> = useTranslation();
  const {
    value = '',
    label,
    type = 'text',
    onChange,
    onBlur,
    className,
    // TODO: add messages handling
    infoMessage,
  }: InputProps = props;
  const [passwordVisible, setPasswordVisible]: UseState<boolean> = useState<boolean>(false);
  const [inputValue, setInputValue]: UseState<string | undefined> = useState<string | undefined>(value);

  useEffect(
    (): void => {
      if (inputValue !== value) {
        setInputValue(value);
      }
    },
    [value],
  );

  const onChangeAction: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e.target.value);
    }
    setInputValue(e.target.value);
  };

  const onBlurAction: FocusEventHandler<HTMLInputElement> = (e: FocusEvent<HTMLInputElement, Element>): void => {
    if (onBlur) {
      onBlur(e.target.value);
    }
    setInputValue(e.target.value);
  };

  const togglePasswordVisibility: () => void = (): void => setPasswordVisible(!passwordVisible);

  return (
    <Container className={className}>
      {!!label && (
        <InputLabel htmlFor={label}>
          {label}
        </InputLabel>
      )}
      <BaseInput
        id={label}
        name={label}
        value={inputValue}
        onChange={onChangeAction}
        onBlur={onBlurAction}
        type={passwordVisible ? 'text' : type}
        $withPasswordButton={type === 'password'}
      />
      {type === 'password' && (
        <TogglePasswordType onClick={togglePasswordVisibility}>
          {passwordVisible ? t(t('app.components.input.hide')) : t('app.components.input.show')}
        </TogglePasswordType>
      )}
    </Container>
  );
};
