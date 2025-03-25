import { JSX } from 'react';
import { StyledComponentBase } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, max-len
export type StyledComponent<E extends keyof JSX.IntrinsicElements | React.ComponentType<any>, T extends object = object> = StyledComponentBase<
  E,
  object,
  T,
  never
>;
