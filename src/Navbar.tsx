import React from 'react';
import Switch from '@mui/material/Switch';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 transition-colors duration-300 ease-in-out flex justify-between items-center"
      style={{ borderBottom: `1px solid var(--color-border)`, backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
      <h1>wojwozniak | My projects</h1>
      <div>
        <span className="mr-2">
          {theme !== 'dark' ? 'Dark mode' : 'Light mode'}
        </span>
        <Switch checked={theme === 'dark'}
          onChange={toggleTheme} />
      </div>

    </nav>
  );
};

export default Navbar;