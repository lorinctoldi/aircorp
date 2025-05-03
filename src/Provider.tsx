import { ReactNode } from 'react';

type ProviderProps = {
  children: ReactNode;
};

function Provider({ children }: ProviderProps) {
  return <>{children}</>;
}

export default Provider;
