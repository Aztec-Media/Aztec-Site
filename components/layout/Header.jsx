import { useState } from 'react';

import Navbar from './Navbar';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className='header'>
      <div className='logo'>aztecmedia</div>
      <button
        type='button'
        className='burger'
        onClick={() => setNavbarOpen(true)}
      >
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </button>
      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
    </header>
  );
}
