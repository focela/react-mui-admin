import { useEffect, ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache, { StylisPlugin } from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import useConfig from '~/hooks/useConfig';

interface Props {
  children: ReactNode;
}

export default function RTLLayout({ children }: Props) {
  const { rtlLayout } = useConfig();

  useEffect(() => {
    document.dir = rtlLayout ? 'rtl' : 'ltr';
  }, [rtlLayout]);

  const cacheRtl = createCache({
    key: rtlLayout ? 'rtl' : 'css',
    prepend: true,
    stylisPlugins: rtlLayout ? [rtlPlugin as StylisPlugin] : []
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
