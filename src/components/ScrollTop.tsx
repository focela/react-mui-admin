import { ReactElement, useEffect } from 'react';

export default function ScrollTop({ children }: { children: ReactElement | null }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return children || null;
}
