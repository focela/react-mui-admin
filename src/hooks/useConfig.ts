import { useContext } from 'react';

// PROJECTS
import { ConfigContext } from '~/contexts/ConfigContext';

export default function useConfig() {
  return useContext(ConfigContext);
}
