import React from 'react';
import Switch from '@mui/material/Switch';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 p-4 transition-colors duration-300 ease-in-out flex justify-between items-center"
        style={{ borderBottom: `1px solid var(--color-border)`, backgroundColor: 'var(--color-background)', color: 'var(--color-text)', zIndex: 1000 }}>
        <h1 style={{ lineHeight: '1.5em' }}>wojwozniak | My projects</h1>
        <div style={{ display: 'flex', alignItems: 'center', lineHeight: '1.5em' }}>
          <span className="mr-2">
            Dark mode
          </span>
          <Switch checked={theme === 'dark'}
            onChange={toggleTheme} />
        </div>
      </nav>
      <div style={{ paddingTop: '68px' }} />
    </>
  );
};

export default Navbar;