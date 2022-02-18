import { useEffect } from 'react';
import { navState } from '../../utils/navState';

export default function Layout({ children }) {
  useEffect(() => {
    navState.open = false;
  }, [children]);

  return (
    <>
      <div className={`wrapper ${navState.open ? 'nav--open' : ''}`}>
        {children}
      </div>
    </>
  );
}
