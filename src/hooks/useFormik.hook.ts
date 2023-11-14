import { useState } from 'react';

import { UseFormik, UseState } from '../types';

export const useFormik: () => UseFormik = (): UseFormik => {
  const [isFormSubmittedState, setIsFormSubmittedState]: UseState<boolean> = useState<boolean>(false);

  const setIsFormSubmitted: () => void = (): void => setIsFormSubmittedState(true);

  const setIsFormNotSubmitted: () => void = (): void => setIsFormSubmittedState(false);

  return {
    setIsFormSubmitted,
    setIsFormNotSubmitted,
    isFormSubmitted: isFormSubmittedState,
  };
};
